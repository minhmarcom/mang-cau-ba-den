import React from "react";
import Link from "next/link";
import { getCurrentUser } from "../../lib/auth";
import AdminSidebarNav from "../../components/admin/AdminSidebarNav";

export const metadata = {
  title: "TAYNA CMS - Quản Trị Website Mãng Cầu Bà Đen",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800 antialiased">
      {/* If logged in, show Admin Shell with Sidebar & Header */}
      {user ? (
        <div className="flex flex-1 min-h-screen">
          {/* SIDEBAR NAVIGATION (Desktop & Mobile Drawer) */}
          <AdminSidebarNav user={user} />

          {/* MAIN ADMIN CONTENT AREA */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* TOP HEADER */}
            <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  CMS Quản Trị
                </span>
                <span className="text-slate-400 text-sm hidden sm:inline">|</span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  TAYNA – Mãng Cầu Bà Đen Tây Ninh
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-slate-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-100 border border-slate-200"
                >
                  <span>Xem Website Công Khai</span>
                  <span className="text-[10px]">↗</span>
                </Link>

                <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-xs font-bold text-slate-800 leading-none">{user.name}</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5 font-medium">
                      {user.role === "admin"
                        ? "Quản trị viên"
                        : user.role === "editor"
                        ? "Biên tập viên"
                        : "Nhân viên Content"}
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* PAGE BODY */}
            <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">{children}</main>
          </div>
        </div>
      ) : (
        /* If not logged in (e.g. login/forgot-password pages) */
        <main className="flex-1 flex items-center justify-center p-4">{children}</main>
      )}
    </div>
  );
}
