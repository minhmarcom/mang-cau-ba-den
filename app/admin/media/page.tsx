"use client";

import React, { useState, useEffect } from "react";
import { DbMedia } from "../../../db";
import { IconSearch, IconPlus, IconTrash } from "../../../components/admin/Icons";

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<DbMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [uploading, setUploading] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<DbMedia | null>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      if (data.success) {
        setMediaList(data.media);
        if (data.media.length > 0 && !selectedMedia) {
          setSelectedMedia(data.media[0]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("altText", file.name.replace(/\.[^/.]+$/, ""));

      const res = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setMediaList([data.media, ...mediaList]);
        setSelectedMedia(data.media);
        alert("Tải ảnh lên thành công!");
      } else {
        alert(data.error || "Tải ảnh lên thất bại");
      }
    } catch {
      alert("Lỗi kết nối khi tải ảnh");
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateDetails = async () => {
    if (!selectedMedia) return;

    try {
      const res = await fetch(`/api/admin/media/${selectedMedia.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          altText: selectedMedia.altText,
          caption: selectedMedia.caption,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMediaList(mediaList.map((m) => (m.id === selectedMedia.id ? data.media : m)));
        alert("Đã cập nhật thông tin ảnh thành công!");
      }
    } catch {
      alert("Lỗi khi lưu thông tin");
    }
  };

  const handleDelete = async (id: string, filename: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa ảnh: "${filename}"?`)) return;

    try {
      const res = await fetch(`/api/admin/media/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        const nextList = mediaList.filter((m) => m.id !== id);
        setMediaList(nextList);
        setSelectedMedia(nextList.length > 0 ? nextList[0] : null);
      } else {
        alert(data.error || "Xóa ảnh thất bại");
      }
    } catch {
      alert("Lỗi khi kết nối máy chủ");
    }
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(window.location.origin + url);
    alert("Đã sao chép đường dẫn ảnh vào bộ nhớ tạm!");
  };

  const filtered = mediaList.filter(
    (m) =>
      m.filename.toLowerCase().includes(search.toLowerCase()) ||
      (m.altText && m.altText.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Thư Viện Media</h1>
          <p className="text-xs text-slate-500 mt-1">
            Tổng cộng {mediaList.length} tệp hình ảnh trong hệ thống
          </p>
        </div>

        <label className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm self-start active:scale-95">
          <IconPlus className="w-4 h-4" />
          <span>{uploading ? "Đang tải lên..." : "Tải ảnh mới"}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MEDIA GRID (2 COLS) */}
        <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="relative">
            <IconSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm theo tên tệp hoặc ALT text..."
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[600px] overflow-y-auto pr-2">
            {loading ? (
              <div className="col-span-full py-16 text-center text-slate-400 text-xs">
                Đang tải tệp media...
              </div>
            ) : filtered.length === 0 ? (
              <div className="col-span-full py-16 text-center text-slate-400 text-xs">
                Không tìm thấy ảnh nào.
              </div>
            ) : (
              filtered.map((item) => {
                const isSelected = selectedMedia?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMedia(item)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-emerald-600 ring-2 ring-emerald-600/30 scale-95"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <img
                      src={item.url}
                      alt={item.altText || item.filename}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute top-1 right-1 bg-emerald-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* MEDIA DETAILS SIDEBAR (1 COL) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs h-fit space-y-5">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            Chi Tiết Tệp Hình Ảnh
          </h2>

          {selectedMedia ? (
            <div className="space-y-4">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.altText || ""}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-xs space-y-1 text-slate-600 bg-slate-50 p-3 rounded-xl">
                <p className="font-bold text-slate-900 truncate">{selectedMedia.filename}</p>
                <p>Dung lượng: {(selectedMedia.size / 1024).toFixed(1)} KB</p>
                <p>Định dạng: {selectedMedia.mimeType}</p>
                <p>Ngày tải lên: {new Date(selectedMedia.createdAt).toLocaleString("vi-VN")}</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Văn bản thay thế (ALT Text):
                </label>
                <input
                  type="text"
                  value={selectedMedia.altText || ""}
                  onChange={(e) =>
                    setSelectedMedia({ ...selectedMedia, altText: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                  placeholder="Mô tả cho Google & người khiếm thị..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Chú thích ảnh (Caption):
                </label>
                <textarea
                  rows={2}
                  value={selectedMedia.caption || ""}
                  onChange={(e) =>
                    setSelectedMedia({ ...selectedMedia, caption: e.target.value })
                  }
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-none"
                  placeholder="Chú thích ảnh..."
                />
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={handleUpdateDetails}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  Lưu thông tin ảnh
                </button>

                <button
                  type="button"
                  onClick={() => handleCopyUrl(selectedMedia.url)}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-all"
                >
                  🔗 Sao chép đường dẫn URL
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(selectedMedia.id, selectedMedia.filename)}
                  className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1"
                >
                  <IconTrash className="w-3.5 h-3.5" />
                  <span>Xóa ảnh khỏi thư viện</span>
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400 text-center py-12">
              Chọn một hình ảnh để xem chi tiết và tùy chỉnh
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
