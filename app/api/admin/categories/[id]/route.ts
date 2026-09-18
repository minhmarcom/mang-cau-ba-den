import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";
import { slugifyVietnamese } from "@/lib/slug";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth("editor");
    const { id } = await params;
    const body = await req.json();

    let slug = body.slug ? slugifyVietnamese(body.slug) : undefined;

    const updated = await cmsDb.updateCategory(id, {
      name: body.name !== undefined ? body.name.trim() : undefined,
      slug,
      description: body.description !== undefined ? body.description.trim() : undefined,
      parentId: body.parentId !== undefined ? body.parentId : undefined,
    });

    if (!updated) {
      return NextResponse.json({ error: "Không tìm thấy danh mục" }, { status: 404 });
    }

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "category.update",
      entityType: "category",
      entityId: id,
      details: `${user.name} đã cập nhật danh mục: "${updated.name}"`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, category: updated });
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
    const user = await requireAuth("editor");
    const { id } = await params;

    await cmsDb.deleteCategory(id);

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "category.delete",
      entityType: "category",
      entityId: id,
      details: `${user.name} đã xóa danh mục ID ${id}`,
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
