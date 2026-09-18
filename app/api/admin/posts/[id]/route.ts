import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";
import { sanitizeHtml } from "@/lib/sanitize";
import { slugifyVietnamese } from "@/lib/slug";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth("writer");
    const { id } = await params;

    const post = await cmsDb.findPostById(id);
    if (!post) {
      return NextResponse.json({ error: "Không tìm thấy bài viết" }, { status: 404 });
    }

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await requireAuth("writer");
    const { id } = await params;
    const body = await req.json();

    const currentPost = await cmsDb.findPostById(id);
    if (!currentPost) {
      return NextResponse.json({ error: "Không tìm thấy bài viết" }, { status: 404 });
    }

    // Role restrictions:
    // Content Writer can only edit their own posts
    if (user.role === "writer" && currentPost.authorId !== user.id) {
      return NextResponse.json(
        { error: "Bạn chỉ có thể chỉnh sửa bài viết do chính bạn tạo" },
        { status: 403 }
      );
    }

    let targetStatus = body.status !== undefined ? body.status : currentPost.status;

    // Content Writer cannot publish or schedule directly
    if (user.role === "writer") {
      if (targetStatus === "published" || targetStatus === "scheduled") {
        targetStatus = "pending_review";
      }
    }

    let publishedAt = currentPost.publishedAt;
    if (targetStatus === "published" && !publishedAt) {
      publishedAt = new Date().toISOString();
    }

    const cleanContent = body.content !== undefined ? sanitizeHtml(body.content) : currentPost.content;

    let slug = currentPost.slug;
    if (body.slug && body.slug !== currentPost.slug) {
      slug = slugifyVietnamese(body.slug);
      const existing = await cmsDb.findPostBySlug(slug);
      if (existing && existing.id !== currentPost.id) {
        slug = `${slug}-${Date.now().toString().slice(-4)}`;
      }
    }

    const updated = await cmsDb.updatePost(
      id,
      {
        title: body.title !== undefined ? body.title.trim() : currentPost.title,
        slug,
        content: cleanContent,
        excerpt: body.excerpt !== undefined ? body.excerpt : currentPost.excerpt,
        featuredImage: body.featuredImage !== undefined ? body.featuredImage : currentPost.featuredImage,
        status: targetStatus,
        categoryId: body.categoryId !== undefined ? body.categoryId : currentPost.categoryId,
        tagIds: Array.isArray(body.tagIds) ? body.tagIds : currentPost.tagIds,
        publishedAt,
        scheduledFor: targetStatus === "scheduled" ? body.scheduledFor : null,
        seoTitle: body.seoTitle !== undefined ? body.seoTitle : currentPost.seoTitle,
        seoDescription: body.seoDescription !== undefined ? body.seoDescription : currentPost.seoDescription,
        focusKeyword: body.focusKeyword !== undefined ? body.focusKeyword : currentPost.focusKeyword,
        canonicalUrl: body.canonicalUrl !== undefined ? body.canonicalUrl : currentPost.canonicalUrl,
        isIndexable: body.isIndexable !== undefined ? body.isIndexable : currentPost.isIndexable,
        ogImage: body.ogImage !== undefined ? body.ogImage : currentPost.ogImage,
      },
      user.id
    );

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "post.update",
      entityType: "post",
      entityId: id,
      details: `${user.name} (${user.role}) đã cập nhật bài viết: "${updated?.title}" (Trạng thái: ${updated?.status})`,
      ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
    });

    return NextResponse.json({ success: true, post: updated });
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
    const user = await requireAuth("writer");
    const { id } = await params;

    const post = await cmsDb.findPostById(id);
    if (!post) {
      return NextResponse.json({ error: "Không tìm thấy bài viết" }, { status: 404 });
    }

    // Content Writer can only delete their own draft posts
    if (user.role === "writer") {
      if (post.authorId !== user.id || post.status !== "draft") {
        return NextResponse.json(
          { error: "Content Writer chỉ có quyền xóa bản nháp của chính mình" },
          { status: 403 }
        );
      }
    }

    await cmsDb.deletePost(id);

    await cmsDb.logActivity({
      userId: user.id,
      userName: user.name,
      action: "post.delete",
      entityType: "post",
      entityId: id,
      details: `${user.name} (${user.role}) đã xóa bài viết: "${post.title}"`,
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
