"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { DbPost, DbCategory } from "../../../db";
import {
  IconPlus,
  IconSearch,
  IconEdit,
  IconCopy,
  IconTrash,
  IconEye,
} from "../../../components/admin/Icons";

export default function AdminPostsListPage() {
  const [posts, setPosts] = useState<DbPost[]>([]);
  const [categories, setCategories] = useState<DbCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [search, setSearch] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [statusFilter, categoryFilter]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (categoryFilter) params.set("categoryId", categoryFilter);
      if (search) params.set("search", search);

      const [resPosts, resCats] = await Promise.all([
        fetch(`/api/admin/posts?${params.toString()}`),
        fetch("/api/admin/categories"),
      ]);

      const dataPosts = await resPosts.json();
      const dataCats = await resCats.json();

      if (dataPosts.success) setPosts(dataPosts.posts);
      if (dataCats.success) setCategories(dataCats.categories);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  const handleDelete = async (post: DbPost) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa bài viết: "${post.title}"?`)) return;

    setActionLoading(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setPosts(posts.filter((p) => p.id !== post.id));
      } else {
        alert(data.error || "Xóa bài viết thất bại");
      }
    } catch {
      alert("Lỗi khi kết nối máy chủ");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDuplicate = async (post: DbPost) => {
    setActionLoading(post.id);
    try {
      const res = await fetch(`/api/admin/posts/${post.id}/duplicate`, { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setPosts([data.post, ...posts]);
        alert(`Đã nhân bản bài viết thành: "${data.post.title}"`);
      } else {
        alert(data.error || "Nhân bản thất bại");
      }
    } catch {
      alert("Lỗi khi kết nối máy chủ");
    } finally {
      setActionLoading(null);
    }
  };

  const statusBadges: Record<string, { label: string; bg: string; text: string }> = {
    published: { label: "Đã xuất bản", bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700" },
    draft: { label: "Bản nháp", bg: "bg-slate-100 border-slate-200", text: "text-slate-600" },
    pending_review: { label: "Chờ duyệt", bg: "bg-amber-50 border-amber-200", text: "text-amber-700" },
    scheduled: { label: "Đã lên lịch", bg: "bg-blue-50 border-blue-200", text: "text-blue-700" },
  };

  const tabs = [
    { key: "all", label: "Tất cả" },
    { key: "published", label: "Đã xuất bản" },
    { key: "pending_review", label: "Chờ duyệt" },
    { key: "draft", label: "Bản nháp" },
    { key: "scheduled", label: "Đã lên lịch" },
  ];

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Quản Lý Bài Viết</h1>
          <p className="text-xs text-slate-500 mt-1">
            Tổng cộng {posts.length} bài viết trong hệ thống
          </p>
        </div>

        <Link
          href="/admin/posts/new"
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 self-start active:scale-95"
        >
          <IconPlus className="w-4 h-4" />
          <span>Viết Bài Mới</span>
        </Link>
      </div>

      {/* FILTER TABS & SEARCH */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* STATUS TABS */}
        <div className="flex flex-wrap gap-1 border-b border-slate-100 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setStatusFilter(tab.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                statusFilter === tab.key
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SEARCH & CATEGORY FILTER */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <form onSubmit={handleSearchSubmit} className="relative flex-1 w-full max-w-md">
            <IconSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm tiêu đề hoặc slug bài viết..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
            />
          </form>

          <div className="w-full sm:w-auto">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full sm:w-auto px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-emerald-600 font-medium text-slate-700"
            >
              <option value="">-- Tất cả chuyên mục --</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* POSTS TABLE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                <th className="p-4 w-12">#</th>
                <th className="p-4">Tiêu đề bài viết</th>
                <th className="p-4">Chuyên mục</th>
                <th className="p-4">Trạng thái</th>
                <th className="p-4">Ngày cập nhật</th>
                <th className="p-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400">
                    Đang tải danh sách bài viết...
                  </td>
                </tr>
              ) : posts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400">
                    Không có bài viết nào phù hợp với bộ lọc.
                  </td>
                </tr>
              ) : (
                posts.map((post, idx) => {
                  const badge = statusBadges[post.status] || statusBadges.draft;
                  const cat = categories.find((c) => c.id === post.categoryId);

                  return (
                    <tr key={post.id} className="hover:bg-slate-50/75 transition-colors">
                      <td className="p-4 text-slate-400 font-medium">{idx + 1}</td>
                      <td className="p-4">
                        <div className="max-w-md">
                          <Link
                            href={`/admin/posts/${post.id}/edit`}
                            className="font-bold text-slate-900 hover:text-emerald-700 leading-snug line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <span className="text-[11px] text-slate-400 mt-0.5 block truncate">
                            /{post.slug}/
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 font-medium">
                        {cat ? cat.name : <span className="text-slate-400 italic">Chưa phân loại</span>}
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md border ${badge.bg} ${badge.text}`}
                        >
                          {badge.label}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500 whitespace-nowrap">
                        {new Date(post.updatedAt).toLocaleDateString("vi-VN")}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            href={`/admin/posts/${post.id}/edit`}
                            title="Chỉnh sửa bài viết"
                            className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-slate-100 rounded-md transition-colors"
                          >
                            <IconEdit className="w-4 h-4" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleDuplicate(post)}
                            disabled={actionLoading === post.id}
                            title="Nhân bản bài viết (Duplicate)"
                            className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-slate-100 rounded-md transition-colors"
                          >
                            <IconCopy className="w-4 h-4" />
                          </button>

                          <Link
                            href={`/tin-tuc/${post.slug}`}
                            target="_blank"
                            title="Xem trước bài viết"
                            className="p-1.5 text-slate-500 hover:text-indigo-700 hover:bg-slate-100 rounded-md transition-colors"
                          >
                            <IconEye className="w-4 h-4" />
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleDelete(post)}
                            disabled={actionLoading === post.id}
                            title="Xóa bài viết"
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                          >
                            <IconTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
