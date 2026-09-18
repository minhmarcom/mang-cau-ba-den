import { NextResponse } from "next/server";
import { cmsDb } from "@/db";
import { requireAuth } from "@/lib/auth";

export async function GET() {
  try {
    // Only Editor or Admin can view system logs
    await requireAuth("editor");
    const activities = await cmsDb.listActivities(50);
    return NextResponse.json({ success: true, activities });
  } catch (error: any) {
    const status = error.message.includes("UNAUTHORIZED")
      ? 401
      : error.message.includes("FORBIDDEN")
      ? 403
      : 500;
    return NextResponse.json({ error: error.message }, { status });
  }
}
