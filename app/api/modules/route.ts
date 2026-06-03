import { NextResponse } from "next/server";
import { mockModules } from "@/services/mock-data";
import { ok, fail } from "@/lib/api-response";

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return ok(mockModules);
  } catch (error) {
    console.error("获取模块列表失败:", error);
    return fail("INTERNAL_ERROR", "获取模块列表失败", 500);
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
