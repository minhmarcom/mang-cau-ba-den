import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { cmsDb } from "@/db";
import { verifyPassword, signSessionToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Vui lòng nhập đầy đủ email và mật khẩu" },
        { status: 400 }
      );
    }

    const user = await cmsDb.findUserByEmail(email);
    if (!user || !user.isActive) {
      return NextResponse.json(
        { error: "Email hoặc mật khẩu không chính xác" },
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Email hoặc mật khẩu không chính xác" },
        { status: 401 }
      );
    }

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
