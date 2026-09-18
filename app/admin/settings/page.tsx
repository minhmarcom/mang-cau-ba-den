"use client";

import React, { useState } from "react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("TAYNA - Mãng Cầu Bà Đen Tây Ninh");
  const [siteUrl, setSiteUrl] = useState("https://mangcaubaden.vn");
  const [hotline, setHotline] = useState("0907 215 521");
  const [email, setEmail] = useState("admin@mangcaubaden.vn");
  const [address, setAddress] = useState("104 Phan Chu Trinh, Tân Biên, Tỉnh Tây Ninh");
  const [metaDescription, setMetaDescription] = useState(
    "Mãng Cầu Bà Đen Tây Ninh chính gốc từ vùng trồng TAYNA chân Núi Bà Đen. Trái to, ngọt thanh, dẻo dai, đạt chuẩn VietGAP và chứng nhận OCOP 3 sao."
  );
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Cài Đặt Hệ Thống &amp; SEO Mặc Định</h1>
        <p className="text-xs text-slate-500 mt-1">
          Quản lý các thông số chung của website, hotline liên hệ và siêu dữ liệu tìm kiếm
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-xl flex items-center gap-2">
          <span>✓</span>
          <span>Đã lưu thành công cài đặt hệ thống!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Tên website:
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Địa chỉ tên miền (URL):
            </label>
            <input
              type="url"
              value={siteUrl}
              onChange={(e) => setSiteUrl(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Số Hotline liên hệ:
            </label>
            <input
              type="text"
              value={hotline}
              onChange={(e) => setHotline(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Email liên hệ:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Địa chỉ vùng trồng &amp; văn phòng:
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Mô tả mặc định SEO (Meta Description):
          </label>
          <textarea
            rows={3}
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-none font-medium text-slate-700"
          />
        </div>

        <div className="pt-2 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95"
          >
            Lưu Cài Đặt
          </button>
        </div>
      </form>
    </div>
  );
}
