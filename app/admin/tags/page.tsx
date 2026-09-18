"use client";

import React, { useState, useEffect } from "react";
import { DbTag } from "../../../db";
import { IconPlus, IconTrash } from "../../../components/admin/Icons";
import { slugifyVietnamese } from "../../../lib/slug";

export default function AdminTagsPage() {
  const [tags, setTags] = useState<DbTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/tags");
      const data = await res.json();
      if (data.success) setTags(data.tags);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(slugifyVietnamese(val));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          slug: slug.trim() || slugifyVietnamese(name),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setTags([...tags, data.tag]);
        setName("");
        setSlug("");
      } else {
        alert(data.error || "Tạo thẻ thất bại");
      }
    } catch {
      alert("Lỗi kết nối máy chủ");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, tagName: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa thẻ: "#${tagName}"?`)) return;

    try {
      const res = await fetch(`/api/admin/tags/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setTags(tags.filter((t) => t.id !== id));
      } else {
        alert(data.error || "Xóa thẻ thất bại");
      }
    } catch {
      alert("Lỗi khi xóa thẻ");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Quản Lý Thẻ (Tags)</h1>
        <p className="text-xs text-slate-500 mt-1">
          Tạo và gắn nhãn các chủ đề bài viết
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ADD TAG FORM (1 COL) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs h-fit space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-3">
            <IconPlus className="w-4 h-4 text-emerald-700" />
            <span>Thêm thẻ mới</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Tên thẻ:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Ví dụ: Du lịch tâm linh..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Đường dẫn tĩnh (Slug):
              </label>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="du-lich-tam-linh"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
            >
              {submitting ? "Đang tạo..." : "Thêm thẻ mới"}
            </button>
          </form>
        </div>

        {/* TAGS LIST TABLE (2 COLS) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">
              Danh Sách Thẻ ({tags.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="p-4">Tên thẻ</th>
                  <th className="p-4">Slug</th>
                  <th className="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-slate-400">
                      Đang tải thẻ...
                    </td>
                  </tr>
                ) : tags.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="p-8 text-center text-slate-400">
                      Chưa có thẻ nào được tạo.
                    </td>
                  </tr>
                ) : (
                  tags.map((tag) => (
                    <tr key={tag.id} className="hover:bg-slate-50/75">
                      <td className="p-4 font-bold text-slate-900">#{tag.name}</td>
                      <td className="p-4 text-slate-500 font-mono">/{tag.slug}/</td>
                      <td className="p-4 text-right">
                        <button
                          type="button"
                          onClick={() => handleDelete(tag.id, tag.name)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                          title="Xóa"
                        >
                          <IconTrash className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
