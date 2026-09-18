import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth("writer");
    const { id } = await params;

    const duplicated = await cmsDb.duplicatePost(id, user.id);
    if (!duplicated) {
      return NextResponse.json({ error: "Không tìm thấy bài viết để nhân bản" }, { status: 404 });
    }

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "post.duplicate",
      entityType: "post",
      entityId: duplicated.id,
      details: `${user.name} (${user.role}) đã nhân bản bài viết từ ID ${id} thành "${duplicated.title}"`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, post: duplicated }, { status: 201 });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
