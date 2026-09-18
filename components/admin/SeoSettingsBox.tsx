"use client";

import React, { useState } from "react";

interface SeoSettingsBoxProps {
  title: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  isIndexable: boolean;
  ogImage: string;
  onSlugChange: (val: string) => void;
  onSeoTitleChange: (val: string) => void;
  onSeoDescriptionChange: (val: string) => void;
  onFocusKeywordChange: (val: string) => void;
  onCanonicalUrlChange: (val: string) => void;
  onIndexableChange: (val: boolean) => void;
  onOgImageChange: (val: string) => void;
  onOpenMediaModal?: () => void;
}

export default function SeoSettingsBox({
  title,
  slug,
  seoTitle,
  seoDescription,
  focusKeyword,
  canonicalUrl,
  isIndexable,
  ogImage,
  onSlugChange,
  onSeoTitleChange,
  onSeoDescriptionChange,
  onFocusKeywordChange,
  onCanonicalUrlChange,
  onIndexableChange,
  onOgImageChange,
  onOpenMediaModal,
}: SeoSettingsBoxProps) {
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");

  const displayTitle = seoTitle || (title ? `${title} | TAYNA` : "Tiêu đề bài viết hiển thị trên Google");
  const displayDesc =
    seoDescription ||
    "Mô tả bài viết tóm tắt hiển thị trên kết quả tìm kiếm Google nhằm tối ưu hóa tỷ lệ nhấp chuột (CTR) cho độc giả.";
  const displayUrl = `https://mangcaubaden.vn/${slug || "duong-dan-bai-viet"}/`;

  const titleLength = (seoTitle || title).length;
  const descLength = seoDescription.length;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
          <span>🔍</span> Tối Ưu Hóa SEO &amp; Chia Sẻ Mạng Xã Hội
        </h3>
        <div className="flex items-center bg-slate-100 rounded-lg p-1 text-xs">
          <button
            type="button"
            onClick={() => setPreviewDevice("desktop")}
            className={`px-2.5 py-1 rounded font-medium ${
              previewDevice === "desktop" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
            }`}
          >
            🖥 Máy tính
          </button>
          <button
            type="button"
            onClick={() => setPreviewDevice("mobile")}
            className={`px-2.5 py-1 rounded font-medium ${
              previewDevice === "mobile" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"
            }`}
          >
            📱 Di động
          </button>
        </div>
      </div>

      {/* GOOGLE LIVE PREVIEW */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
          Xem trước kết quả tìm kiếm Google ({previewDevice === "desktop" ? "Desktop" : "Mobile"})
        </span>

        <div className={previewDevice === "mobile" ? "max-w-[360px]" : "max-w-[620px]"}>
          <div className="flex items-center gap-2 text-xs text-slate-700 mb-1">
            <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[9px] font-bold">
              T
            </div>
            <span className="font-medium text-slate-900">mangcaubaden.vn</span>
            <span className="text-slate-400">›</span>
            <span className="text-slate-500 truncate">{slug || "duong-dan"}</span>
          </div>

          <h4 className="text-[#1a0dab] hover:underline cursor-pointer text-lg leading-snug font-medium line-clamp-2">
            {displayTitle}
          </h4>

          <p className="text-sm text-[#4d5156] mt-1 line-clamp-2 leading-relaxed">
            {displayDesc}
          </p>
        </div>
      </div>

      {/* SEO FIELDS */}
      <div className="space-y-4">
        {/* Slug */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Đường dẫn tĩnh (Slug URL):
          </label>
          <div className="flex items-center rounded-lg border border-slate-300 overflow-hidden focus-within:border-emerald-600 focus-within:ring-1 focus-within:ring-emerald-600">
            <span className="bg-slate-100 px-3 py-2 text-xs text-slate-500 border-r border-slate-300">
              mangcaubaden.vn/
            </span>
            <input
              type="text"
              value={slug}
              onChange={(e) => onSlugChange(e.target.value)}
              placeholder="duong-dan-bai-viet-chuan-seo"
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Focus Keyword */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Từ khóa chính (Focus Keyword):
          </label>
          <input
            type="text"
            value={focusKeyword}
            onChange={(e) => onFocusKeywordChange(e.target.value)}
            placeholder="Ví dụ: mãng cầu Bà Đen, hành hương núi bà đen..."
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
          />
        </div>

        {/* SEO Title */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Tiêu đề SEO (SEO Title):
            </label>
            <span
              className={`text-xs font-semibold ${
                titleLength >= 50 && titleLength <= 65
                  ? "text-emerald-600"
                  : titleLength > 65
                  ? "text-rose-500"
                  : "text-amber-500"
              }`}
            >
              {titleLength} / 60 ký tự
            </span>
          </div>
          <input
            type="text"
            value={seoTitle}
            onChange={(e) => onSeoTitleChange(e.target.value)}
            placeholder={title ? `${title} | TAYNA` : "Nhập tiêu đề hiển thị trên Google..."}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
          />
        </div>

        {/* Meta Description */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Mô tả ngắn SEO (Meta Description):
            </label>
            <span
              className={`text-xs font-semibold ${
                descLength >= 120 && descLength <= 160
                  ? "text-emerald-600"
                  : descLength > 160
                  ? "text-rose-500"
                  : "text-amber-500"
              }`}
            >
              {descLength} / 160 ký tự
            </span>
          </div>
          <textarea
            rows={3}
            value={seoDescription}
            onChange={(e) => onSeoDescriptionChange(e.target.value)}
            placeholder="Tóm tắt nội dung hấp dẫn 120 - 160 ký tự kích thích độc giả nhấp chuột vào đọc..."
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-y"
          />
        </div>

        {/* Canonical URL */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Canonical URL (Nếu có bài gốc khác):
          </label>
          <input
            type="url"
            value={canonicalUrl}
            onChange={(e) => onCanonicalUrlChange(e.target.value)}
            placeholder={displayUrl}
            className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
          />
        </div>

        {/* Open Graph Image */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Ảnh đại diện chia sẻ MXH (OG Image):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={ogImage}
              onChange={(e) => onOgImageChange(e.target.value)}
              placeholder="/ten-anh.jpg hoặc link ảnh đầy đủ..."
              className="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
            />
            {onOpenMediaModal && (
              <button
                type="button"
                onClick={onOpenMediaModal}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg"
              >
                Chọn ảnh
              </button>
            )}
          </div>
        </div>

        {/* Index / Noindex Toggle */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            id="isIndexable"
            checked={isIndexable}
            onChange={(e) => onIndexableChange(e.target.checked)}
            className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
          />
          <label htmlFor="isIndexable" className="text-xs font-semibold text-slate-700 cursor-pointer">
            Cho phép các công cụ tìm kiếm lập chỉ mục bài viết này (Index)
          </label>
        </div>
      </div>
    </div>
  );
}
