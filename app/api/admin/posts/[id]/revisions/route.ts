import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth("writer");
    const { id } = await params;

    const revisions = await cmsDb.listRevisions(id);
    return NextResponse.json({ success: true, revisions });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth("writer");
    const { id } = await params;
    const { revisionId } = await req.json();

    if (!revisionId) {
      return NextResponse.json({ error: "Thiếu ID phiên bản cần khôi phục" }, { status: 400 });
    }

    const restored = await cmsDb.restoreRevision(revisionId, user.id);
    if (!restored) {
      return NextResponse.json({ error: "Không thể khôi phục phiên bản đã chọn" }, { status: 400 });
    }

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "post.restore_revision",
      entityType: "post",
      entityId: id,
      details: `${user.name} (${user.role}) đã khôi phục bài viết "${restored.title}" về phiên bản ID ${revisionId}`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, post: restored });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
