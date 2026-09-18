import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";
import { slugifyVietnamese } from "@/lib/slug";

export async function GET() {
  try {
    await requireAuth("writer");
    const categories = await cmsDb.listCategories();
    return NextResponse.json({ success: true, categories });
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
    // Only Editor or Admin can create categories
    const user = await requireAuth("editor");
    const body = await req.json();

    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Tên danh mục không được để trống" }, { status: 400 });
    }

    let slug = body.slug?.trim() ? slugifyVietnamese(body.slug) : slugifyVietnamese(body.name);
    if (!slug) slug = `danh-muc-${Date.now()}`;

    const newCat = await cmsDb.createCategory({
      name: body.name.trim(),
      slug,
      description: body.description?.trim() || null,
      parentId: body.parentId || null,
    });

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "category.create",
      entityType: "category",
      entityId: newCat.id,
      details: `${user.name} đã tạo danh mục: "${newCat.name}"`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, category: newCat }, { status: 201 });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
