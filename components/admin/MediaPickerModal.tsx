"use client";

import React, { useState, useEffect } from "react";
import { DbMedia } from "../../db";
import { IconSearch, IconPlus } from "./Icons";

interface MediaPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (media: DbMedia) => void;
}

export default function MediaPickerModal({
  isOpen,
  onClose,
  onSelect,
}: MediaPickerModalProps) {
  const [mediaList, setMediaList] = useState<DbMedia[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<DbMedia | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchMedia();
    }
  }, [isOpen]);

  const fetchMedia = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/media");
      const data = await res.json();
      if (data.success) {
        setMediaList(data.media);
        if (data.media.length > 0 && !selectedItem) {
          setSelectedItem(data.media[0]);
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
        setSelectedItem(data.media);
      } else {
        alert(data.error || "Tải ảnh lên thất bại");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi kết nối khi tải ảnh lên");
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  const filteredMedia = mediaList.filter(
    (m) =>
      m.filename.toLowerCase().includes(search.toLowerCase()) ||
      (m.altText && m.altText.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        {/* MODAL HEADER */}
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Thư Viện Media</h2>
            <p className="text-xs text-slate-500">Chọn ảnh đã có hoặc tải ảnh mới từ máy tính</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm">
              <IconPlus className="w-3.5 h-3.5" />
              <span>{uploading ? "Đang tải lên..." : "Tải ảnh mới"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 text-2xl font-light w-8 h-8 rounded-full flex items-center justify-center hover:bg-slate-200"
            >
              ×
            </button>
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="flex-1 flex overflow-hidden">
          {/* MEDIA GRID */}
          <div className="flex-1 flex flex-col border-r border-slate-200 p-4 overflow-hidden">
            <div className="relative mb-4">
              <IconSearch className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm hình ảnh theo tên hoặc ALT text..."
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="flex-1 overflow-y-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 pr-2">
              {loading ? (
                <div className="col-span-full py-12 text-center text-slate-400 text-sm">
                  Đang tải thư viện media...
                </div>
              ) : filteredMedia.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-400 text-sm">
                  Không tìm thấy hình ảnh nào phù hợp.
                </div>
              ) : (
                filteredMedia.map((item) => {
                  const isSelected = selectedItem?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
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

          {/* MEDIA DETAILS SIDEBAR */}
          <div className="w-80 p-5 bg-slate-50 overflow-y-auto flex flex-col justify-between">
            {selectedItem ? (
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Chi tiết tệp hình ảnh
                </h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-300 bg-white">
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.altText || ""}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-xs space-y-1 text-slate-600">
                  <p className="truncate font-semibold text-slate-900">{selectedItem.filename}</p>
                  <p>Dung lượng: {(selectedItem.size / 1024).toFixed(1)} KB</p>
                  <p>Loại: {selectedItem.mimeType}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Văn bản thay thế (ALT Text - Rất quan trọng cho SEO):
                  </label>
                  <input
                    type="text"
                    value={selectedItem.altText || ""}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, altText: e.target.value })
                    }
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:border-emerald-600"
                    placeholder="Mô tả bức ảnh cho người khiếm thị & Google..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Chú thích ảnh (Caption):
                  </label>
                  <textarea
                    rows={2}
                    value={selectedItem.caption || ""}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, caption: e.target.value })
                    }
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded-md bg-white focus:outline-none focus:border-emerald-600 resize-none"
                    placeholder="Chú thích hiển thị dưới bức ảnh..."
                  />
                </div>
              </div>
            ) : (
              <div className="py-20 text-center text-xs text-slate-400">
                Chọn một hình ảnh để xem chi tiết
              </div>
            )}

            {/* ACTION BUTTON */}
            <div className="pt-4 border-t border-slate-200">
              <button
                type="button"
                disabled={!selectedItem}
                onClick={() => {
                  if (selectedItem) {
                    onSelect(selectedItem);
                    onClose();
                  }
                }}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
              >
                Chèn hình ảnh này vào bài
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
