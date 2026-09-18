import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/lib/auth";
import { cmsDb } from "@/db";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    if (user) {
      await cmsDb.logActivity({
        userId: user.id,
        userName: user.name,
        action: "user.logout",
        entityType: "user",
        entityId: user.id,
        details: `Người dùng ${user.name} đã đăng xuất khỏi CMS`,
        ipAddress: req.headers.get("x-forwarded-for") || "127.0.0.1",
      });
    }

    const cookieStore = await cookies();
    cookieStore.delete("cms_session");

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Đã xảy ra lỗi khi đăng xuất" },
      { status: 500 }
    );
  }
}
