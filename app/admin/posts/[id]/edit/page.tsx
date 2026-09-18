"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import TipTapEditor from "../../../../../components/admin/TipTapEditor";
import SeoSettingsBox from "../../../../../components/admin/SeoSettingsBox";
import MediaPickerModal from "../../../../../components/admin/MediaPickerModal";
import { DbCategory, DbTag, DbMedia, DbRevision } from "../../../../../db";
import { IconArrowLeft } from "../../../../../components/admin/Icons";
import { slugifyVietnamese } from "../../../../../lib/slug";

export default function AdminEditPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [currentUser, setCurrentUser] = useState<any>(null);
  const [categories, setCategories] = useState<DbCategory[]>([]);
  const [availableTags, setAvailableTags] = useState<DbTag[]>([]);
  const [revisions, setRevisions] = useState<DbRevision[]>([]);
  const [activeTab, setActiveTab] = useState<"edit" | "revisions">("edit");
  const [loading, setLoading] = useState(true);

  // Post form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [status, setStatus] = useState<"draft" | "pending_review" | "published" | "scheduled">("draft");
  const [categoryId, setCategoryId] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [newTagName, setNewTagName] = useState("");

  // SEO state
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [isIndexable, setIsIndexable] = useState(true);
  const [ogImage, setOgImage] = useState("");

  // Scheduling state
  const [scheduledFor, setScheduledFor] = useState("");
  const [mediaModalOpen, setMediaModalOpen] = useState(false);
  const [mediaTarget, setMediaTarget] = useState<"featured" | "og" | "editor">("featured");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  const fetchPostData = async () => {
    setLoading(true);
    try {
      const [resMe, resCats, resTags, resPost, resRev] = await Promise.all([
        fetch("/api/admin/auth/me"),
        fetch("/api/admin/categories"),
        fetch("/api/admin/tags"),
        fetch(`/api/admin/posts/${postId}`),
        fetch(`/api/admin/posts/${postId}/revisions`),
      ]);

      const dataMe = await resMe.json();
      const dataCats = await resCats.json();
      const dataTags = await resTags.json();
      const dataPost = await resPost.json();
      const dataRev = await resRev.json();

      if (dataMe.authenticated) setCurrentUser(dataMe.user);
      if (dataCats.success) setCategories(dataCats.categories);
      if (dataTags.success) setAvailableTags(dataTags.tags);
      if (dataRev.success) setRevisions(dataRev.revisions);

      if (dataPost.success) {
        const p = dataPost.post;
        setTitle(p.title);
        setSlug(p.slug);
        setContent(p.content || "");
        setExcerpt(p.excerpt || "");
        setFeaturedImage(p.featuredImage || "");
        setStatus(p.status);
        setCategoryId(p.categoryId || "");
        setSelectedTagIds(p.tagIds || []);
        setSeoTitle(p.seoTitle || "");
        setSeoDescription(p.seoDescription || "");
        setFocusKeyword(p.focusKeyword || "");
        setCanonicalUrl(p.canonicalUrl || "");
        setIsIndexable(p.isIndexable);
        setOgImage(p.ogImage || "");
        setScheduledFor(p.scheduledFor || "");
      } else {
        setError(dataPost.error || "Không tìm thấy bài viết");
      }
    } catch {
      setError("Lỗi kết nối khi tải bài viết");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNewTag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTagName.trim()) return;

    try {
      const res = await fetch("/api/admin/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newTagName.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setAvailableTags([...availableTags, data.tag]);
        setSelectedTagIds([...selectedTagIds, data.tag.id]);
        setNewTagName("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTag = (tagId: string) => {
    if (selectedTagIds.includes(tagId)) {
      setSelectedTagIds(selectedTagIds.filter((id) => id !== tagId));
    } else {
      setSelectedTagIds([...selectedTagIds, tagId]);
    }
  };

  const handleMediaSelected = (media: DbMedia) => {
    if (mediaTarget === "featured") {
      setFeaturedImage(media.url);
      if (!ogImage) setOgImage(media.url);
    } else if (mediaTarget === "og") {
      setOgImage(media.url);
    } else if (mediaTarget === "editor") {
      const imgTag = `<figure style="margin:20px 0;"><img src="${media.url}" alt="${
        media.altText || ""
      }" style="max-width:100%;border-radius:12px;" />${
        media.caption ? `<figcaption style="text-align:center;font-size:13px;color:#666;margin-top:6px;">${media.caption}</figcaption>` : ""
      }</figure><p></p>`;
      setContent((prev) => `${prev}${imgTag}`);
    }
  };

  const handleSave = async (targetStatus?: "draft" | "pending_review" | "published" | "scheduled") => {
    if (!title.trim()) {
      setError("Tiêu đề bài viết không được để trống");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const saveStatus = targetStatus || status;

      const payload = {
        title: title.trim(),
        slug: slug.trim() || slugifyVietnamese(title),
        content,
        excerpt: excerpt.trim() || null,
        featuredImage: featuredImage || null,
        status: saveStatus,
        categoryId: categoryId || null,
        tagIds: selectedTagIds,
        scheduledFor: saveStatus === "scheduled" ? scheduledFor : null,
        seoTitle: seoTitle.trim() || null,
        seoDescription: seoDescription.trim() || null,
        focusKeyword: focusKeyword.trim() || null,
        canonicalUrl: canonicalUrl.trim() || null,
        isIndexable,
        ogImage: ogImage || featuredImage || null,
      };

      const res = await fetch(`/api/admin/posts/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setStatus(data.post.status);
        alert("Đã lưu các thay đổi thành công!");
        // Refresh revisions
        const resRev = await fetch(`/api/admin/posts/${postId}/revisions`);
        const dataRev = await resRev.json();
        if (dataRev.success) setRevisions(dataRev.revisions);
      } else {
        setError(data.error || "Không thể cập nhật bài viết");
      }
    } catch {
      setError("Lỗi kết nối máy chủ");
    } finally {
      setSaving(false);
    }
  };

  const handleRestoreRevision = async (revId: string) => {
    if (!confirm("Bạn có chắc chắn muốn khôi phục bài viết về phiên bản này?")) return;

    try {
      const res = await fetch(`/api/admin/posts/${postId}/revisions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ revisionId: revId }),
      });
      const data = await res.json();
      if (data.success) {
        setTitle(data.post.title);
        setContent(data.post.content);
        setExcerpt(data.post.excerpt || "");
        setActiveTab("edit");
        alert("Đã khôi phục thành công nội dung phiên bản cũ!");
      } else {
        alert(data.error || "Không thể khôi phục phiên bản");
      }
    } catch {
      alert("Lỗi khi kết nối máy chủ");
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-sm text-slate-400">
        Đang tải thông tin bài viết...
      </div>
    );
  }

  const isWriter = currentUser?.role === "writer";

  return (
    <div className="space-y-6">
      {/* MEDIA PICKER MODAL */}
      <MediaPickerModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
        onSelect={handleMediaSelected}
      />

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <IconArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-slate-900">Chỉnh Sửa Bài Viết</h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold border border-slate-200">
                {status}
              </span>
            </div>
            <p className="text-xs text-slate-500">/{slug}/</p>
          </div>
        </div>

        {/* WORKFLOW ACTION BUTTONS */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSave()}
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold rounded-xl transition-all disabled:opacity-50"
          >
            Lưu thay đổi
          </button>

          {isWriter ? (
            <button
              type="button"
              disabled={saving}
              onClick={() => handleSave("pending_review")}
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50"
            >
              Gửi duyệt bài ➔
            </button>
          ) : (
            <>
              {status !== "published" && (
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleSave("published")}
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50"
                >
                  Phê duyệt &amp; Xuất bản
                </button>
              )}
              {status === "published" && (
                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleSave("draft")}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all"
                >
                  Chuyển về bản nháp
                </button>
              )}
            </>
          )}

          <Link
            href={`/tin-tuc/${slug}`}
            target="_blank"
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-xl transition-all"
          >
            Xem bài viết ↗
          </Link>
        </div>
      </div>

      {/* TABS: EDIT VS REVISION HISTORY */}
      <div className="flex gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab("edit")}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
            activeTab === "edit"
              ? "bg-slate-900 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          ✏️ Soạn Thảo Nội Dung &amp; SEO
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("revisions")}
          className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
            activeTab === "revisions"
              ? "bg-slate-900 text-white shadow-xs"
              : "text-slate-600 hover:bg-slate-100"
          }`}
        >
          <span>⏱ Lịch Sử Phiên Bản</span>
          <span className="px-1.5 py-0.2 rounded-full bg-slate-200 text-slate-800 text-[10px]">
            {revisions.length}
          </span>
        </button>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* TAB CONTENT: EDIT */}
      {activeTab === "edit" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT COLUMN: TITLE & EDITOR */}
          <div className="lg:col-span-2 space-y-6">
            {/* POST TITLE INPUT */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Tiêu đề bài viết (Thẻ H1 chính):
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xl md:text-2xl font-black text-slate-900 placeholder:text-slate-300 border-none focus:outline-none focus:ring-0 leading-snug"
              />
            </div>

            {/* EXCERPT */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Đoạn trích dẫn / Tóm tắt mở đầu (Lead paragraph):
              </label>
              <textarea
                rows={3}
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full text-xs text-slate-700 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-600 resize-y"
              />
            </div>

            {/* TIPTAP RICH TEXT EDITOR */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Thân bài viết (Nội dung chi tiết):
              </label>
              <TipTapEditor
                value={content}
                onChange={setContent}
                onOpenMediaModal={() => {
                  setMediaTarget("editor");
                  setMediaModalOpen(true);
                }}
              />
            </div>

            {/* SEO SETTINGS & PREVIEW */}
            <SeoSettingsBox
              title={title}
              slug={slug}
              seoTitle={seoTitle}
              seoDescription={seoDescription}
              focusKeyword={focusKeyword}
              canonicalUrl={canonicalUrl}
              isIndexable={isIndexable}
              ogImage={ogImage}
              onSlugChange={setSlug}
              onSeoTitleChange={setSeoTitle}
              onSeoDescriptionChange={setSeoDescription}
              onFocusKeywordChange={setFocusKeyword}
              onCanonicalUrlChange={setCanonicalUrl}
              onIndexableChange={setIsIndexable}
              onOgImageChange={setOgImage}
              onOpenMediaModal={() => {
                setMediaTarget("og");
                setMediaModalOpen(true);
              }}
            />
          </div>

          {/* RIGHT COLUMN: SETTINGS & TAXONOMY */}
          <div className="space-y-6">
            {/* FEATURED IMAGE BOX */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Ảnh đại diện bài viết
              </h3>

              {featuredImage ? (
                <div className="space-y-2">
                  <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200">
                    <img
                      src={featuredImage}
                      alt="Ảnh đại diện"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setMediaTarget("featured");
                        setMediaModalOpen(true);
                      }}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      Đổi ảnh khác
                    </button>
                    <button
                      type="button"
                      onClick={() => setFeaturedImage("")}
                      className="text-rose-500 hover:underline"
                    >
                      Gỡ ảnh
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMediaTarget("featured");
                    setMediaModalOpen(true);
                  }}
                  className="w-full aspect-video border-2 border-dashed border-slate-300 hover:border-emerald-600 rounded-xl flex flex-col items-center justify-center p-4 text-slate-500 hover:text-emerald-700 transition-colors"
                >
                  <span className="text-2xl mb-1">🖼</span>
                  <span className="text-xs font-bold">Chọn ảnh từ thư viện</span>
                </button>
              )}
            </div>

            {/* CATEGORY BOX */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Chuyên mục bài viết
              </h3>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-3 py-2.5 text-xs border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-emerald-600 font-medium"
              >
                <option value="">-- Chọn chuyên mục chính --</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* TAGS BOX */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Thẻ bài viết (Tags)
              </h3>

              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
                {availableTags.map((t) => {
                  const isChecked = selectedTagIds.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleTag(t.id)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-all ${
                        isChecked
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      #{t.name}
                    </button>
                  );
                })}
              </div>

              {/* QUICK CREATE TAG */}
              <form onSubmit={handleCreateNewTag} className="flex gap-1.5 pt-2 border-t border-slate-100">
                <input
                  type="text"
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                  placeholder="Tạo thẻ mới..."
                  className="flex-1 px-2.5 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-lg"
                >
                  + Thêm
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        /* TAB CONTENT: REVISION HISTORY */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-slate-900">
              Lịch Sử Các Phiên Bản Đã Lưu
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Hệ thống tự động lưu bản sao mỗi khi bạn cập nhật bài viết. Bạn có thể khôi phục lại bất kỳ lúc nào.
            </p>
          </div>

          {revisions.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              Chưa có phiên bản lịch sử nào được ghi nhận cho bài viết này.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {revisions.map((rev, idx) => (
                <div key={rev.id} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Phiên bản #{revisions.length - idx}: {rev.title}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">
                      Lưu lúc: {new Date(rev.createdAt).toLocaleString("vi-VN")}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRestoreRevision(rev.id)}
                    className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold rounded-lg transition-colors shadow-xs"
                  >
                    Khôi phục phiên bản này
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
