// In-memory IP Rate Limiter for anti-spam & anti-DDoS
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10-minute window
  const maxRequests = 5; // Max 5 submissions per 10 minutes per IP

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

// Sanitization to prevent XSS / Script injection
function sanitizeInput(str: unknown, maxLen = 200): string {
  if (!str) return "";
  return String(str)
    .replace(/[<>'"]/g, "") // Strip HTML/script chars
    .trim()
    .slice(0, maxLen);
}

export async function POST(request: Request) {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown_ip";

    // 1. Rate Limiting Check
    if (checkRateLimit(clientIp)) {
      return Response.json(
        { success: false, message: "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau 10 phút hoặc liên hệ trực tiếp Zalo 0907 215 521." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const {
      partnerType,
      fullName,
      phone,
      province,
      salesChannel,
      notes,
      sourceWebsite,
      website_hp, // Honeypot hidden field
      renderedAt, // Submission velocity check
    } = body;

    // 2. Honeypot Anti-Bot Shield: If hidden honeypot field is filled by bot, fake success silently
    if (website_hp && String(website_hp).trim().length > 0) {
      console.warn("Spam Bot blocked via Honeypot field from IP:", clientIp);
      return Response.json({
        success: true,
        message: "Đăng ký thành công! Đội ngũ Mãng Cầu Bà Đen sẽ liên hệ Zalo bạn ngay trong 15 phút.",
      });
    }

    // 3. Velocity Check: Human cannot fill form in under 1.2 seconds
    if (renderedAt && typeof renderedAt === "number") {
      const elapsedMs = Date.now() - renderedAt;
      if (elapsedMs < 1200) {
        console.warn("Spam Bot blocked via Velocity check from IP:", clientIp, "Elapsed:", elapsedMs);
        return Response.json({
          success: true,
          message: "Đăng ký thành công! Đội ngũ Mãng Cầu Bà Đen sẽ liên hệ Zalo bạn ngay trong 15 phút.",
        });
      }
    }

    // 4. Strict Phone & Field Validation
    const cleanPhone = String(phone || "").trim().replace(/[\s\-\.]/g, "").replace(/^\+84/, "0").replace(/^84/, "0");
    const vnPhoneRegex = /^0(3|5|7|8|9)[0-9]{8}$/;

    const cleanFullName = sanitizeInput(fullName, 80);
    const cleanProvince = sanitizeInput(province, 100);
    const cleanSalesChannel = sanitizeInput(salesChannel || "Bán online qua Facebook / Zalo / TikTok", 100);
    const cleanPartnerType = sanitizeInput(partnerType || "Cộng Tác Viên (CTV)", 50);

    if (!cleanFullName || !vnPhoneRegex.test(cleanPhone)) {
      return Response.json(
        { success: false, message: "Vui lòng nhập đúng số điện thoại Zalo Việt Nam (10 chữ số, ví dụ: 0907215521)." },
        { status: 400 }
      );
    }

    // Nhận diện website nguồn của Mãng Cầu Bà Đen
    const host = request.headers.get("host") || "";
    const referer = request.headers.get("referer") || "";
    let detectedWebsite = sanitizeInput(sourceWebsite, 50);

    if (!detectedWebsite || detectedWebsite.includes("localhost")) {
      if (host.includes("mangcaubaden") || referer.includes("mangcaubaden")) {
        detectedWebsite = "mangcaubaden.vn";
      } else {
        detectedWebsite = detectedWebsite || "mangcaubaden.vn";
      }
    } else {
      if (detectedWebsite.includes("mangcaubaden")) {
        detectedWebsite = "mangcaubaden.vn";
      }
    }

    const now = new Date();
    const formattedTimestamp = now.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const userNotes = sanitizeInput(notes, 500);
    const noteWithSource = userNotes
      ? `${userNotes} (Nguồn: ${detectedWebsite})`
      : `(Nguồn: ${detectedWebsite})`;

    // Map 1:1 to Google Sheets Columns (A -> G)
    const payload = {
      timestamp: formattedTimestamp,
      partnerType: cleanPartnerType,
      fullName: cleanFullName,
      phone: cleanPhone,
      province: cleanProvince,
      salesChannel: cleanSalesChannel,
      notes: noteWithSource,
      row: [
        formattedTimestamp,
        cleanPartnerType,
        cleanFullName,
        "'" + cleanPhone,
        cleanProvince,
        cleanSalesChannel,
        noteWithSource,
      ],
    };

    // Google Sheets Apps Script Webhook URL
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbz5zVdK4zDesJDwH-ijWZM5rEeEsUZMo0A3ugnuIa96GKlGZYiavQq40Ng97uR5RtHbsw/exec";

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
      message: "Đăng ký thành công! Đội ngũ Mãng Cầu Bà Đen sẽ liên hệ Zalo bạn ngay trong 15 phút.",
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
