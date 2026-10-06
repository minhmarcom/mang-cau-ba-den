import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { cmsDb } from "@/db";
import { verifyPassword, signSessionToken } from "@/lib/auth";

// In-memory Rate Limiter for admin login brute-force protection
const loginAttemptsMap = new Map<string, { count: number; resetTime: number }>();

function checkLoginRateLimit(ip: string): { blocked: boolean; retryAfterMin: number } {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15-minute window
  const maxAttempts = 5; // Max 5 attempts per 15 minutes per IP

  const record = loginAttemptsMap.get(ip);
  if (!record || now > record.resetTime) {
    return { blocked: false, retryAfterMin: 0 };
  }

  if (record.count >= maxAttempts) {
    const retryAfterMin = Math.ceil((record.resetTime - now) / 60000);
    return { blocked: true, retryAfterMin };
  }

  return { blocked: false, retryAfterMin: 0 };
}

function recordFailedAttempt(ip: string) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const record = loginAttemptsMap.get(ip);
  if (!record || now > record.resetTime) {
    loginAttemptsMap.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    record.count += 1;
  }
}

function clearLoginAttempts(ip: string) {
  loginAttemptsMap.delete(ip);
}

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateCheck = checkLoginRateLimit(clientIp);
    if (rateCheck.blocked) {
      return NextResponse.json(
        {
          error: `Tài khoản tạm thời bị khóa do thử đăng nhập sai quá nhiều lần. Vui lòng thử lại sau ${rateCheck.retryAfterMin} phút.`,
        },
        { status: 429 }
      );
    }

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Vui lòng nhập đầy đủ email và mật khẩu" },
        { status: 400 }
      );
    }

    const user = await cmsDb.findUserByEmail(email);
    if (!user || !user.isActive) {
      recordFailedAttempt(clientIp);
      return NextResponse.json(
        { error: "Email hoặc mật khẩu không chính xác" },
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, user.passwordHash);
    if (!isValid) {
      recordFailedAttempt(clientIp);
      return NextResponse.json(
        { error: "Email hoặc mật khẩu không chính xác" },
        { status: 401 }
      );
    }

    // Clear failed attempts counter on successful login
    clearLoginAttempts(clientIp);

    const sessionUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      avatarUrl: user.avatarUrl,
    };

    const token = signSessionToken(sessionUser);

    const cookieStore = await cookies();
    cookieStore.set("cms_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "user.login",
      entityType: "user",
      entityId: user.id,
      details: `Người dùng ${user.name} (${user.role}) đã đăng nhập vào CMS`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({
      success: true,
      user: sessionUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Đã xảy ra lỗi khi đăng nhập" },
      { status: 500 }
    );
  }
}
