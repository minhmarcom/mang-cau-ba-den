"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Email hoặc mật khẩu không đúng");
      }
    } catch {
      setError("Lỗi kết nối máy chủ. Vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = (roleEmail: string, rolePass: string) => {
    setEmail(roleEmail);
    setPassword(rolePass);
  };

  return (
    <div className="w-full max-w-md mx-auto my-auto">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        {/* BRAND LOGO & TITLE */}
        <div className="text-center mb-8">
          <img
            src="/logo.png"
            alt="TAYNA Mãng Cầu Bà Đen"
            className="w-16 h-16 mx-auto mb-3 object-contain drop-shadow-sm"
          />
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Đăng Nhập CMS Admin
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Hệ thống quản lý nội dung TAYNA – Mãng Cầu Bà Đen
          </p>
        </div>

        {/* ERROR ALERT */}
        {error && (
          <div className="mb-6 p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* LOGIN FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
              Email đăng nhập
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@mangcaubaden.vn"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase">
                Mật khẩu
              </label>
              <Link
                href="/admin/forgot-password"
                className="text-xs font-semibold text-emerald-700 hover:underline"
              >
                Quên mật khẩu?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#1b4332] hover:bg-[#2d6a3f] text-white font-bold text-sm rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-50 mt-2"
          >
            {loading ? "Đang xác thực..." : "Đăng Nhập Vào Quản Trị"}
          </button>
        </form>

        {/* QUICK LOGIN DEMO PRESETS */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-[11px] text-center font-bold text-slate-400 uppercase tracking-wider mb-3">
            Tài khoản mẫu đăng nhập nhanh
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin("admin@mangcaubaden.vn", "AdminPassword2026!")}
              className="p-2 text-center rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold transition-colors"
            >
              👑 Admin
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin("editor@mangcaubaden.vn", "EditorPassword2026!")}
              className="p-2 text-center rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold transition-colors"
            >
              ✍️ Editor
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin("writer@mangcaubaden.vn", "WriterPassword2026!")}
              className="p-2 text-center rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold transition-colors"
            >
              📝 Writer
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-slate-500 hover:text-emerald-700 font-medium">
            ← Quay về Trang chủ Website
          </Link>
        </div>
      </div>
    </div>
  );
}
