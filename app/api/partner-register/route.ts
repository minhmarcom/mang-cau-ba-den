export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { partnerType, fullName, phone, province, address, salesChannel, notes, sourceWebsite } = body;

    const cleanPhone = String(phone || "").trim().replace(/[\s\-\.]/g, "").replace(/^\+84/, "0").replace(/^84/, "0");
    const vnPhoneRegex = /^0(3|5|7|8|9)[0-9]{8}$/;

    if (!fullName || !vnPhoneRegex.test(cleanPhone)) {
      return Response.json(
        { success: false, message: "Vui lòng nhập đúng số điện thoại Zalo Việt Nam (10 chữ số, ví dụ: 0907215521)." },
        { status: 400 }
      );
    }

    // Nhận diện website nguồn (nabaden.vn hoặc mangcaubaden.vn)
    const host = request.headers.get("host") || "";
    const referer = request.headers.get("referer") || "";
    let detectedWebsite = sourceWebsite || "";

    if (!detectedWebsite || detectedWebsite.includes("localhost")) {
      if (host.includes("mangcaubaden") || referer.includes("mangcaubaden")) {
        detectedWebsite = "mangcaubaden.vn";
      } else if (host.includes("nabaden") || referer.includes("nabaden")) {
        detectedWebsite = "nabaden.vn";
      } else {
        detectedWebsite = detectedWebsite || "nabaden.vn";
      }
    } else {
      if (detectedWebsite.includes("mangcaubaden")) {
        detectedWebsite = "mangcaubaden.vn";
      } else if (detectedWebsite.includes("nabaden")) {
        detectedWebsite = "nabaden.vn";
      }
    }

    const now = new Date();
    const formattedTimestamp = now.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const cleanNotes = String(notes || "").trim();
    const noteWithSource = cleanNotes
      ? `${cleanNotes} (Nguồn: ${detectedWebsite})`
      : `(Nguồn: ${detectedWebsite})`;

    // Map 1:1 to Google Sheets Columns (A -> H):
    // Col A: Thời Gian Đăng Ký (timestamp)
    // Col B: Loại Đối Tác (partnerType)
    // Col C: Họ Và Tên (fullName)
    // Col D: Số Điện Thoại (Zalo) (phone)
    // Col E: Tỉnh / Thành Phố (province)
    // Col F: Địa Chỉ Chi Tiết (address)
    // Col G: Kênh Bán / Kinh Nghiệm (salesChannel)
    // Col H: Ghi Chú / Nhu cầu (notes)
    const payload = {
      timestamp: formattedTimestamp,
      partnerType: partnerType || "Cộng Tác Viên (CTV)",
      fullName: String(fullName).trim(),
      phone: cleanPhone,
      province: String(province || "").trim(),
      address: "",
      salesChannel: String(salesChannel || "Bán online qua Facebook / Zalo / TikTok").trim(),
      notes: noteWithSource,
      row: [
        formattedTimestamp,
        partnerType || "Cộng Tác Viên (CTV)",
        String(fullName).trim(),
        "'" + cleanPhone,
        String(province || "").trim(),
        "",
        String(salesChannel || "Bán online qua Facebook / Zalo / TikTok").trim(),
        noteWithSource
      ]
    };

    // Google Sheets Apps Script Webhook URL
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbxWkS88653q4hNRnTxptxYYGKbtSgh5_2hceQYrAmLZT0dSE8EtLAe8OhIx84-lsILxUA/exec";

    if (webhookUrl) {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await res.json().catch(() => ({ result: "forwarded" }));
        console.log("Synced to Google Sheets:", result);
      } catch (webhookErr) {
        console.error("Error sending to Google Sheets Webhook:", webhookErr);
      }
    } else {
      console.log("Partner registration recorded (No GOOGLE_SHEETS_WEBHOOK_URL configured):", payload);
    }

    return Response.json({
      success: true,
      message: "Đăng ký thành công! Đội ngũ Mãng Cầu Bà Đen NABADEN sẽ liên hệ Zalo bạn ngay trong 15 phút.",
      data: payload,
    });
  } catch (error) {
    console.error("Partner registration API error:", error);
    return Response.json(
      { success: false, message: "Có lỗi xảy ra trong quá trình gửi đăng ký. Vui lòng thử lại hoặc liên hệ Hotline/Zalo." },
      { status: 500 }
    );
  }
}
