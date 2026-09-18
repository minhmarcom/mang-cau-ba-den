"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SessionUser } from "../../lib/auth";
import {
  IconDashboard,
  IconPosts,
  IconCategories,
  IconTags,
  IconMedia,
  IconUsers,
  IconActivity,
  IconSettings,
  IconLogOut,
} from "./Icons";

export default function AdminSidebarNav({ user }: { user: SessionUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (!confirm("Bạn có chắc chắn muốn đăng xuất?")) return;
    setLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setLoggingOut(false);
    }
  };

  const navItems = [
    {
      label: "Bảng Điều Khiển",
      href: "/admin",
      icon: IconDashboard,
      exact: true,
      allowed: ["admin", "editor", "writer"],
    },
    {
      label: "Quản Lý Bài Viết",
      href: "/admin/posts",
      icon: IconPosts,
      exact: false,
      allowed: ["admin", "editor", "writer"],
    },
    {
      label: "Chuyên Mục",
      href: "/admin/categories",
      icon: IconCategories,
      exact: false,
      allowed: ["admin", "editor"],
    },
    {
      label: "Thẻ Bài Viết",
      href: "/admin/tags",
      icon: IconTags,
      exact: false,
      allowed: ["admin", "editor", "writer"],
    },
    {
      label: "Thư Viện Media",
      href: "/admin/media",
      icon: IconMedia,
      exact: false,
      allowed: ["admin", "editor", "writer"],
    },
    {
      label: "Quản Lý Người Dùng",
      href: "/admin/users",
      icon: IconUsers,
      exact: false,
      allowed: ["admin"],
    },
    {
      label: "Nhật Ký Hoạt Động",
      href: "/admin/activity",
      icon: IconActivity,
      exact: false,
      allowed: ["admin", "editor"],
    },
    {
      label: "Cài Đặt",
      href: "/admin/settings",
      icon: IconSettings,
      exact: false,
      allowed: ["admin"],
    },
  ];

  const visibleItems = navItems.filter((item) => item.allowed.includes(user.role));

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#1b4332] text-white">
      {/* BRAND HEADER */}
      <div className="p-5 border-b border-white/10 flex items-center gap-3">
        <img
          src="/logo.png"
          alt="TAYNA CMS"
          className="w-9 h-9 rounded-lg bg-white/10 p-0.5 object-contain"
        />
        <div>
          <h1 className="font-extrabold text-sm tracking-wide text-white leading-tight">
            TAYNA CMS
          </h1>
          <p className="text-[11px] text-emerald-300 font-medium">Hệ thống quản trị nội dung</p>
        </div>
      </div>

      {/* QUICK NEW POST BUTTON */}
      <div className="p-4">
        <Link
          href="/admin/posts/new"
          onClick={() => setMobileOpen(false)}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <span className="text-base font-black leading-none">＋</span>
          <span>Viết Bài Mới</span>
        </Link>
      </div>

      {/* NAVIGATION LINKS */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {visibleItems.map((item) => {
          const isActive = item.exact
            ? pathname === item.href
            : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                isActive
                  ? "bg-white/20 text-white font-bold shadow-xs"
                  : "text-emerald-100/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-emerald-300" : "text-emerald-200/70"}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* USER FOOTER & LOGOUT */}
      <div className="p-4 border-t border-white/10 bg-black/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate">{user.name}</p>
            <p className="text-[10px] text-emerald-300 uppercase font-semibold">
              {user.role}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          title="Đăng xuất"
          className="p-2 text-emerald-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <IconLogOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* MOBILE HAMBURGER BUTTON */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <span className="text-xl leading-none">✕</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] h-full shadow-2xl z-50">
            <SidebarContent />
          </div>
        </div>
      )}

      {/* DESKTOP PERMANENT SIDEBAR */}
      <aside className="hidden md:block w-64 shrink-0 shadow-lg sticky top-0 h-screen">
        <SidebarContent />
      </aside>
    </>
  );
}
