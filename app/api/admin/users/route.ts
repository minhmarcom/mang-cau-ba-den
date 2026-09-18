import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth, hashPassword } from "@/lib/auth";

export async function GET() {
  try {
    // Strictly Admin only
    await requireAuth("admin");
    const users = await cmsDb.listUsers();
    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}

export async function POST(req: Request) {
  try {
    const currentUser = await requireAuth("admin");
    const body = await req.json();

    if (!body.email?.trim() || !body.password || !body.name?.trim()) {
      return NextResponse.json(
        { error: "Vui lòng cung cấp email, họ tên và mật khẩu" },
        { status: 400 }
      );
    }

    const email = body.email.trim().toLowerCase();
    const existing = await cmsDb.findUserByEmail(email);
    if (existing) {
      return NextResponse.json({ error: "Email này đã được sử dụng" }, { status: 400 });
    }

    const validRoles = ["admin", "editor", "writer"];
    const role = validRoles.includes(body.role) ? body.role : "writer";

    const newUser = await cmsDb.createUser({
      email,
      passwordHash: hashPassword(body.password),
      name: body.name.trim(),
      role,
      avatarUrl: body.avatarUrl || null,
      isActive: body.isActive !== false,
    });

    await cmsDb.logActivity({
      userId: currentUser.id,
      userName: currentUser.name,
      action: "user.create",
      entityType: "user",
      entityId: newUser.id,
      details: `${currentUser.name} đã tạo người dùng mới: "${newUser.name}" (${newUser.email}, vai trò: ${newUser.role})`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    const { passwordHash, ...safeUser } = newUser;
    return NextResponse.json({ success: true, user: safeUser }, { status: 201 });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
