"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md mx-auto my-auto">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
        <div className="text-center mb-6">
          <img
            src="/logo.png"
            alt="TAYNA Mãng Cầu Bà Đen"
            className="w-14 h-14 mx-auto mb-2 object-contain"
          />
          <h1 className="text-xl font-black text-slate-900">Quên Mật Khẩu</h1>
          <p className="text-xs text-slate-500 mt-1">
            Nhập email của bạn để nhận hướng dẫn khôi phục tài khoản
          </p>
        </div>

        {submitted ? (
          <div className="text-center space-y-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs leading-relaxed">
              Yêu cầu đặt lại mật khẩu đã được ghi nhận. Vui lòng liên hệ trực tiếp Quản trị viên hệ thống qua email <strong>admin@mangcaubaden.vn</strong> hoặc Hotline để được cấp lại mật khẩu ngay lập tức.
            </div>
            <Link
              href="/admin/login"
              className="inline-block py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              Quay lại Đăng nhập
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Email tài khoản
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@mangcaubaden.vn"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1b4332] hover:bg-[#2d6a3f] text-white font-bold text-sm rounded-xl transition-all shadow-md"
            >
              Gửi Yêu Cầu Đặt Lại Mật Khẩu
            </button>

            <div className="text-center pt-2">
              <Link href="/admin/login" className="text-xs text-slate-500 hover:text-emerald-700 font-medium">
                ← Quay lại trang Đăng nhập
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
