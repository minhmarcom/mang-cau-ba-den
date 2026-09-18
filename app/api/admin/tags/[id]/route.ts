import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth("editor");
    const { id } = await params;

    await cmsDb.deleteTag(id);

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "tag.delete",
      entityType: "tag",
      entityId: id,
      details: `${user.name} đã xóa thẻ ID ${id}`,
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
