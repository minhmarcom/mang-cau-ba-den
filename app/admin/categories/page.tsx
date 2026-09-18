"use client";

import React, { useState, useEffect } from "react";
import { DbCategory } from "../../../db";
import { IconPlus, IconEdit, IconTrash } from "../../../components/admin/Icons";
import { slugifyVietnamese } from "../../../lib/slug";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<DbCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [parentId, setParentId] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/categories");
      const data = await res.json();
      if (data.success) setCategories(data.categories);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNameChange = (val: string) => {
    setName(val);
    if (!editingId && !slug) {
      setSlug(slugifyVietnamese(val));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitting(true);
    try {
      const payload = {
        name: name.trim(),
        slug: slug.trim() || slugifyVietnamese(name),
        description: description.trim() || null,
        parentId: parentId || null,
      };

      if (editingId) {
        const res = await fetch(`/api/admin/categories/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          setCategories(categories.map((c) => (c.id === editingId ? data.category : c)));
          resetForm();
        } else {
          alert(data.error || "Cập nhật thất bại");
        }
      } else {
        const res = await fetch("/api/admin/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          setCategories([...categories, data.category]);
          resetForm();
        } else {
          alert(data.error || "Tạo chuyên mục thất bại");
        }
      }
    } catch {
      alert("Lỗi kết nối máy chủ");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (cat: DbCategory) => {
    setEditingId(cat.id);
    setName(cat.name);
    setSlug(cat.slug);
    setDescription(cat.description || "");
    setParentId(cat.parentId || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string, catName: string) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa chuyên mục: "${catName}"?`)) return;

    try {
      const res = await fetch(`/api/admin/categories/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setCategories(categories.filter((c) => c.id !== id));
      } else {
        alert(data.error || "Xóa thất bại");
      }
    } catch {
      alert("Lỗi khi xóa chuyên mục");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setName("");
    setSlug("");
    setDescription("");
    setParentId("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Quản Lý Chuyên Mục</h1>
        <p className="text-xs text-slate-500 mt-1">
          Tạo và phân cấp danh mục bài viết cho website
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* CREATE / EDIT FORM (1 COL) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs h-fit space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-3">
            <IconPlus className="w-4 h-4 text-emerald-700" />
            <span>{editingId ? "Chỉnh sửa chuyên mục" : "Thêm chuyên mục mới"}</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Tên chuyên mục:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Ví dụ: Cẩm nang du lịch..."
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
                placeholder="cam-nang-du-lich"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Chuyên mục cha (Parent Category):
              </label>
              <select
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-emerald-600"
              >
                <option value="">-- Không có (Chuyên mục gốc) --</option>
                {categories
                  .filter((c) => c.id !== editingId)
                  .map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Mô tả chuyên mục:
              </label>
              <textarea
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Mô tả tóm tắt nội dung của chuyên mục này..."
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 resize-none"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
              >
                {submitting
                  ? "Đang lưu..."
                  : editingId
                  ? "Lưu cập nhật"
                  : "Thêm chuyên mục mới"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
                >
                  Hủy
                </button>
              )}
            </div>
          </form>
        </div>

        {/* CATEGORIES LIST TABLE (2 COLS) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-900">
              Danh Sách Chuyên Mục ({categories.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="p-4">Tên chuyên mục</th>
                  <th className="p-4">Slug</th>
                  <th className="p-4">Chuyên mục cha</th>
                  <th className="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-400">
                      Đang tải danh mục...
                    </td>
                  </tr>
                ) : categories.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-400">
                      Chưa có chuyên mục nào.
                    </td>
                  </tr>
                ) : (
                  categories.map((cat) => {
                    const parent = categories.find((c) => c.id === cat.parentId);
                    return (
                      <tr key={cat.id} className="hover:bg-slate-50/75">
                        <td className="p-4 font-bold text-slate-900">
                          {cat.parentId && <span className="text-slate-400 mr-2">└─</span>}
                          {cat.name}
                        </td>
                        <td className="p-4 text-slate-500 font-mono">/{cat.slug}/</td>
                        <td className="p-4 text-slate-500">
                          {parent ? parent.name : "—"}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleEdit(cat)}
                              className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-slate-100 rounded-md"
                              title="Sửa"
                            >
                              <IconEdit className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(cat.id, cat.name)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md"
                              title="Xóa"
                            >
                              <IconTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
