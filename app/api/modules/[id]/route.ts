import { fail, ok } from "@/lib/api-response";
import { mockModules } from "@/services/mock-data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const { id } = await params;
    const module = mockModules.find((m) => m.id === id);

    if (!module) {
      return fail("NOT_FOUND", "模块不存在", 404);
    }

    return ok(module);
  } catch (error) {
    console.error("获取模块详情失败:", error);
    return fail("INTERNAL_ERROR", "获取模块详情失败", 500);
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
