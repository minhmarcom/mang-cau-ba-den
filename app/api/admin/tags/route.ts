import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";
import { slugifyVietnamese } from "@/lib/slug";

export async function GET() {
  try {
    await requireAuth("writer");
    const tags = await cmsDb.listTags();
    return NextResponse.json({ success: true, tags });
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
    const body = await req.json();

    if (!body.name?.trim()) {
      return NextResponse.json({ error: "Tên thẻ không được để trống" }, { status: 400 });
    }

    const name = body.name.trim();
    let slug = body.slug?.trim() ? slugifyVietnamese(body.slug) : slugifyVietnamese(name);

    const tag = await cmsDb.createTag(name, slug);

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "tag.create",
      entityType: "tag",
      entityId: tag.id,
      details: `${user.name} đã tạo thẻ: "${tag.name}"`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, tag }, { status: 201 });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
