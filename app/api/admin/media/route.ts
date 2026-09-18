import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export async function GET() {
  try {
    await requireAuth("writer");
    const media = await cmsDb.listMedia();
    return NextResponse.json({ success: true, media });
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
    const user = await requireAuth("writer");
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const altText = (formData.get("altText") as string) || "";
    const caption = (formData.get("caption") as string) || "";

    if (!file) {
      return NextResponse.json({ error: "Vui lòng chọn tệp để tải lên" }, { status: 400 });
    }

    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Định dạng tệp không được hỗ trợ. Vui lòng tải ảnh JPG, PNG, WebP, GIF hoặc SVG" },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Kích thước tệp vượt quá giới hạn cho phép (Tối đa 10MB)" },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate safe clean filename
    const ext = path.extname(file.name) || ".jpg";
    const baseName = path
      .basename(file.name, ext)
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, "-")
      .replace(/-+/g, "-");
    const uniqueFilename = `${baseName}-${Date.now()}${ext}`;
    const filePath = path.join(uploadsDir, uniqueFilename);

    fs.writeFileSync(filePath, buffer);

    const publicUrl = `/uploads/${uniqueFilename}`;

    const mediaItem = await cmsDb.createMedia({
      filename: uniqueFilename,
      url: publicUrl,
      mimeType: file.type,
      size: file.size,
      width: null,
      height: null,
      altText: altText || baseName,
      caption: caption || null,
      uploadedBy: user.id,
    });

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "media.upload",
      entityType: "media",
      entityId: mediaItem.id,
      details: `${user.name} đã tải lên tệp ảnh: "${uniqueFilename}" (${(file.size / 1024).toFixed(1)} KB)`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, media: mediaItem }, { status: 201 });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
