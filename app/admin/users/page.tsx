"use client";

import React, { useState, useEffect } from "react";
import { DbUser } from "../../../db";
import { IconPlus, IconUsers, IconTrash } from "../../../components/admin/Icons";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<DbUser[]>([]);
  const [loading, setLoading] = useState(true);

  // New user form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "editor" | "writer">("writer");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      } else {
        setError(data.error || "Bạn không có quyền truy cập trang này");
      }
    } catch {
      setError("Lỗi kết nối khi tải danh sách người dùng");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (data.success) {
        setUsers([...users, data.user]);
        setName("");
        setEmail("");
        setPassword("");
        setRole("writer");
        alert("Tạo người dùng mới thành công!");
      } else {
        setError(data.error || "Tạo người dùng thất bại");
      }
    } catch {
      setError("Lỗi kết nối máy chủ");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChangeRole = async (userId: string, newRole: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });
      const data = await res.json();
      if (data.success) {
        setUsers(users.map((u) => (u.id === userId ? { ...u, role: newRole as any } : u)));
        alert("Đã cập nhật vai trò người dùng!");
      } else {
        alert(data.error || "Cập nhật thất bại");
      }
    } catch {
      alert("Lỗi khi kết nối máy chủ");
    }
  };

  const handleDeleteUser = async (user: DbUser) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa tài khoản: "${user.name}" (${user.email})?`)) return;

    try {
      const res = await fetch(`/api/admin/users/${user.id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setUsers(users.filter((u) => u.id !== user.id));
      } else {
        alert(data.error || "Xóa người dùng thất bại");
      }
    } catch {
      alert("Lỗi khi xóa người dùng");
    }
  };

  const roleLabels: Record<string, { label: string; color: string }> = {
    admin: { label: "Quản trị viên (Admin)", color: "bg-emerald-50 text-emerald-800 border-emerald-300" },
    editor: { label: "Biên tập viên (Editor)", color: "bg-blue-50 text-blue-800 border-blue-300" },
    writer: { label: "Nhân viên Content (Writer)", color: "bg-amber-50 text-amber-800 border-amber-300" },
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Quản Lý Người Dùng &amp; Phân Quyền</h1>
        <p className="text-xs text-slate-500 mt-1">
          Chỉ dành riêng cho Quản trị viên (Admin) quản lý nhân sự biên tập nội dung
        </p>
      </div>

      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ADD USER FORM (1 COL) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs h-fit space-y-4">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-3">
            <IconPlus className="w-4 h-4 text-emerald-700" />
            <span>Thêm tài khoản mới</span>
          </h2>

          <form onSubmit={handleCreateUser} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Họ và tên:
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nguyễn Văn A"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Email đăng nhập:
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nhanvien@mangcaubaden.vn"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Mật khẩu khởi tạo:
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Vai trò &amp; Phân quyền:
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-emerald-600"
              >
                <option value="writer">Content Writer (Chỉ tạo nháp &amp; gửi duyệt)</option>
                <option value="editor">Editor (Kiểm duyệt, xuất bản &amp; danh mục)</option>
                <option value="admin">Admin (Toàn quyền hệ thống)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
            >
              {submitting ? "Đang tạo..." : "Tạo tài khoản"}
            </button>
          </form>
        </div>

        {/* USERS LIST TABLE (2 COLS) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <IconUsers className="w-4 h-4 text-emerald-700" />
              <span>Danh Sách Người Dùng ({users.length})</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="p-4">Người dùng</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Vai trò</th>
                  <th className="p-4 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-400">
                      Đang tải danh sách người dùng...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-8 text-center text-slate-400">
                      Chưa có người dùng nào.
                    </td>
                  </tr>
                ) : (
                  users.map((u) => {
                    const roleInfo = roleLabels[u.role] || roleLabels.writer;
                    return (
                      <tr key={u.id} className="hover:bg-slate-50/75">
                        <td className="p-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center">
                              {u.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-bold text-slate-900">{u.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-slate-500 font-mono">{u.email}</td>
                        <td className="p-4">
                          <select
                            value={u.role}
                            onChange={(e) => handleChangeRole(u.id, e.target.value)}
                            className={`px-2 py-1 text-xs font-bold rounded-md border ${roleInfo.color} bg-white cursor-pointer focus:outline-none`}
                          >
                            <option value="admin">👑 Admin</option>
                            <option value="editor">✍️ Editor</option>
                            <option value="writer">📝 Writer</option>
                          </select>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            type="button"
                            onClick={() => handleDeleteUser(u)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                            title="Xóa tài khoản"
                          >
                            <IconTrash className="w-4 h-4" />
                          </button>
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
