import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../../lib/auth";
import { cmsDb } from "../../db";
import { IconPosts, IconPlus, IconMedia, IconEye, IconEdit } from "../../components/admin/Icons";

export default async function AdminDashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/admin/login");
  }

  const stats = await cmsDb.getDashboardStats();

  const statusBadges: Record<string, { label: string; bg: string; text: string }> = {
    published: { label: "Đã xuất bản", bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700" },
    draft: { label: "Bản nháp", bg: "bg-slate-100 border-slate-200", text: "text-slate-600" },
    pending_review: { label: "Chờ duyệt", bg: "bg-amber-50 border-amber-200", text: "text-amber-700" },
    scheduled: { label: "Đã lên lịch", bg: "bg-blue-50 border-blue-200", text: "text-blue-700" },
  };

  return (
    <div className="space-y-8">
      {/* WELCOME BANNER */}
      <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a3f] rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
            Hệ thống quản lý nội dung
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold mt-1">
            Xin chào, {user.name}! 👋
          </h1>
          <p className="text-sm text-emerald-100/80 mt-1 max-w-xl">
            Chào mừng bạn đến với trang quản trị website Mãng Cầu Bà Đen TAYNA. Quản lý và xuất bản bài viết chuẩn SEO một cách dễ dàng.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            href="/admin/posts/new"
            className="px-5 py-2.5 bg-white text-slate-900 hover:bg-emerald-50 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <IconPlus className="w-4 h-4 text-emerald-700" />
            <span>Viết Bài Mới</span>
          </Link>
          <Link
            href="/admin/media"
            className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <IconMedia className="w-4 h-4" />
            <span>Thư Viện Media</span>
          </Link>
        </div>
      </div>

      {/* METRIC STAT CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Tổng số bài</span>
          <p className="text-2xl font-black text-slate-900 mt-1">{stats.totalPosts}</p>
          <span className="text-[10px] text-slate-500 font-medium">Toàn bộ bài viết</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-emerald-600 uppercase">Đã xuất bản</span>
          <p className="text-2xl font-black text-emerald-700 mt-1">{stats.published}</p>
          <span className="text-[10px] text-emerald-600 font-medium">Hiển thị công khai</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-amber-600 uppercase">Chờ kiểm duyệt</span>
          <p className="text-2xl font-black text-amber-700 mt-1">{stats.pendingReview}</p>
          <span className="text-[10px] text-amber-600 font-medium">Cần Editor xem xét</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase">Bản nháp</span>
          <p className="text-2xl font-black text-slate-700 mt-1">{stats.draft}</p>
          <span className="text-[10px] text-slate-400 font-medium">Chưa xuất bản</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-blue-600 uppercase">Đã lên lịch</span>
          <p className="text-2xl font-black text-blue-700 mt-1">{stats.scheduled}</p>
          <span className="text-[10px] text-blue-600 font-medium">Hẹn giờ đăng</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-purple-600 uppercase">Tệp Media</span>
          <p className="text-2xl font-black text-purple-700 mt-1">{stats.totalMedia}</p>
          <span className="text-[10px] text-purple-600 font-medium">Ảnh đã tải lên</span>
        </div>
      </div>

      {/* TWO COLUMN CONTENT: RECENT POSTS + RECENT ACTIVITIES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* RECENT POSTS (2 COLS) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <IconPosts className="w-5 h-5 text-emerald-700" />
              <span>Bài Viết Vừa Cập Nhật</span>
            </h2>
            <Link
              href="/admin/posts"
              className="text-xs font-semibold text-emerald-700 hover:underline"
            >
              Xem tất cả bài viết ➔
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {stats.recentPosts.map((post) => {
              const badge = statusBadges[post.status] || statusBadges.draft;
              return (
                <div key={post.id} className="py-3.5 flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold text-slate-900 truncate hover:text-emerald-700">
                      <Link href={`/admin/posts/${post.id}/edit`}>{post.title}</Link>
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                      <span>/{post.slug}/</span>
                      <span>•</span>
                      <span>{new Date(post.updatedAt).toLocaleDateString("vi-VN")}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${badge.bg} ${badge.text}`}
                    >
                      {badge.label}
                    </span>

                    <div className="flex items-center gap-1">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        title="Chỉnh sửa bài"
                        className="p-1.5 text-slate-400 hover:text-emerald-700 hover:bg-slate-100 rounded-md transition-colors"
                      >
                        <IconEdit className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/tin-tuc/${post.slug}`}
                        target="_blank"
                        title="Xem bài viết"
                        className="p-1.5 text-slate-400 hover:text-blue-700 hover:bg-slate-100 rounded-md transition-colors"
                      >
                        <IconEye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RECENT ACTIVITIES (1 COL) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-slate-900">Nhật Ký Hoạt Động</h2>
            {user.role !== "writer" && (
              <Link
                href="/admin/activity"
                className="text-xs font-semibold text-emerald-700 hover:underline"
              >
                Chi tiết ➔
              </Link>
            )}
          </div>

          <div className="space-y-4">
            {stats.recentActivities.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-6">Chưa có hoạt động ghi nhận.</p>
            ) : (
              stats.recentActivities.map((act) => (
                <div key={act.id} className="text-xs border-l-2 border-emerald-500 pl-3 py-0.5">
                  <p className="font-semibold text-slate-800 leading-snug">{act.details}</p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    {new Date(act.createdAt).toLocaleString("vi-VN")}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
