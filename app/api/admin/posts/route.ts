import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";
import { sanitizeHtml } from "@/lib/sanitize";
import { slugifyVietnamese } from "@/lib/slug";

export async function GET(req: Request) {
  try {
    const user = await requireAuth("writer");
    const { searchParams } = new URL(req.url);

    const status = searchParams.get("status") || "all";
    const categoryId = searchParams.get("categoryId") || undefined;
    const authorId = searchParams.get("authorId") || undefined;
    const search = searchParams.get("search") || undefined;

    const posts = await cmsDb.listPosts({
      status,
      categoryId,
      authorId,
      search,
    });

    return NextResponse.json({ success: true, posts });
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

    if (!body.title?.trim()) {
      return NextResponse.json({ error: "Tiêu đề bài viết không được để trống" }, { status: 400 });
    }

    let slug = body.slug?.trim() ? slugifyVietnamese(body.slug) : slugifyVietnamese(body.title);
    if (!slug) {
      slug = `bai-viet-${Date.now()}`;
    }

    // Ensure unique slug
    const existing = await cmsDb.findPostBySlug(slug);
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    // Role-based workflow validation
    let status = body.status || "draft";
    if (user.role === "writer") {
      // Content Writer can only save as draft or submit for review
      if (status !== "draft" && status !== "pending_review") {
        status = "pending_review";
      }
    }

    const cleanContent = sanitizeHtml(body.content || "");

    const newPost = await cmsDb.createPost({
      title: body.title.trim(),
      slug,
      content: cleanContent,
      excerpt: body.excerpt?.trim() || null,
      featuredImage: body.featuredImage || null,
      status,
      authorId: user.id,
      categoryId: body.categoryId || null,
      tagIds: Array.isArray(body.tagIds) ? body.tagIds : [],
      publishedAt: status === "published" ? new Date().toISOString() : body.publishedAt || null,
      scheduledFor: status === "scheduled" ? body.scheduledFor || null : null,
      seoTitle: body.seoTitle?.trim() || `${body.title.trim()} | TAYNA`,
      seoDescription: body.seoDescription?.trim() || body.excerpt?.trim() || null,
      focusKeyword: body.focusKeyword?.trim() || null,
      canonicalUrl: body.canonicalUrl?.trim() || `https://mangcaubaden.vn/${slug}/`,
      isIndexable: body.isIndexable !== false,
      ogImage: body.ogImage || body.featuredImage || null,
    });

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "post.create",
      entityType: "post",
      entityId: newPost.id,
      details: `${user.name} (${user.role}) đã tạo bài viết: "${newPost.title}" (${newPost.status})`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
