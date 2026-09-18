import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth("writer");
    const { id } = await params;
    const body = await req.json();

    const updated = await cmsDb.updateMedia(id, {
      altText: body.altText !== undefined ? body.altText : undefined,
      caption: body.caption !== undefined ? body.caption : undefined,
    });

    if (!updated) {
      return NextResponse.json({ error: "Không tìm thấy tệp media" }, { status: 404 });
    }

    return NextResponse.json({ success: true, media: updated });
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

    const allMedia = await cmsDb.listMedia();
    const item = allMedia.find((m) => m.id === id);

    if (item) {
      // Remove file from disk if in /uploads
      if (item.url.startsWith("/uploads/")) {
        const filePath = path.join(process.cwd(), "public", item.url);
        if (fs.existsSync(filePath)) {
          try {
            fs.unlinkSync(filePath);
          } catch {
            // Ignore file unlink error
          }
        }
      }
    }

    await cmsDb.deleteMedia(id);

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "media.delete",
      entityType: "media",
      entityId: id,
      details: `${user.name} đã xóa tệp media: "${item?.filename || id}"`,
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
