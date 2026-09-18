"use client";

import React, { useState, useEffect } from "react";
import { DbActivityLog } from "../../../db";
import { IconActivity } from "../../../components/admin/Icons";

export default function AdminActivityPage() {
  const [activities, setActivities] = useState<DbActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/activity");
      const data = await res.json();
      if (data.success) setActivities(data.activities);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black text-slate-900">Nhật Ký Hoạt Động Hệ Thống</h1>
        <p className="text-xs text-slate-500 mt-1">
          Theo dõi chi tiết các thao tác đăng nhập, đăng bài, xuất bản và chỉnh sửa trong CMS
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-2">
          <IconActivity className="w-5 h-5 text-emerald-700" />
          <h2 className="text-sm font-bold text-slate-900">
            Lịch Sử Thao Tác Gần Đây ({activities.length})
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {loading ? (
            <div className="p-12 text-center text-xs text-slate-400">
              Đang tải nhật ký hoạt động...
            </div>
          ) : activities.length === 0 ? (
            <div className="p-12 text-center text-xs text-slate-400">
              Chưa có hoạt động nào được ghi lại.
            </div>
          ) : (
            activities.map((act) => (
              <div key={act.id} className="p-4 hover:bg-slate-50 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {act.userName || "Hệ thống"}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                      {act.action}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{act.details}</p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs text-slate-500 block">
                    {new Date(act.createdAt).toLocaleString("vi-VN")}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-mono mt-0.5">
                    IP: {act.ipAddress || "127.0.0.1"}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
