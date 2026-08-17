export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { partnerType, fullName, phone, province, address, salesChannel, notes } = body;

    if (!fullName || !phone) {
      return Response.json(
        { success: false, message: "Vui lòng nhập đầy đủ Họ tên và Số điện thoại Zalo." },
        { status: 400 }
      );
    }

    const payload = {
      partnerType: partnerType || "Cộng Tác Viên (CTV)",
      fullName: String(fullName).trim(),
      phone: String(phone).trim(),
      province: String(province || "").trim(),
      address: String(address || "").trim(),
      salesChannel: String(salesChannel || "Bán online / Mạng xã hội").trim(),
      notes: String(notes || "").trim(),
      timestamp: new Date().toISOString(),
    };

    // Google Sheets Apps Script Webhook URL
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbzRw6rmPRQI48pSer-sd2lvZUZ8JELTyeXQtQmoDSGCxMVmp6u5-JS--JgYtPzeAaKJ-Q/exec";

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
