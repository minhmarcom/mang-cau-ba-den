import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth, hashPassword } from "@/lib/auth";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const currentUser = await requireAuth("admin");
    const { id } = await params;
    const body = await req.json();

    const updateData: any = {};
    if (body.name?.trim()) updateData.name = body.name.trim();
    if (body.role && ["admin", "editor", "writer"].includes(body.role)) updateData.role = body.role;
    if (body.isActive !== undefined) updateData.isActive = Boolean(body.isActive);
    if (body.password) updateData.passwordHash = hashPassword(body.password);
    if (body.avatarUrl !== undefined) updateData.avatarUrl = body.avatarUrl;

    const updated = await cmsDb.updateUser(id, updateData);
    if (!updated) {
      return NextResponse.json({ error: "Không tìm thấy người dùng" }, { status: 404 });
    }

    await cmsDb.logActivity({
      userId: currentUser.id,
      userName: currentUser.name,
      action: "user.update",
      entityType: "user",
      entityId: id,
      details: `${currentUser.name} đã cập nhật thông tin người dùng: "${updated.name}" (${updated.role})`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    const { passwordHash, ...safeUser } = updated;
    return NextResponse.json({ success: true, user: safeUser });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const currentUser = await requireAuth("admin");
    const { id } = await params;

    if (currentUser.id === id) {
      return NextResponse.json(
        { error: "Bạn không thể tự xóa tài khoản của chính mình" },
        { status: 400 }
      );
    }

    await cmsDb.deleteUser(id);

    await cmsDb.logActivity({
      userId: currentUser.id,
      userName: currentUser.name,
      action: "user.delete",
      entityType: "user",
      entityId: id,
      details: `${currentUser.name} đã xóa tài khoản ID ${id}`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
