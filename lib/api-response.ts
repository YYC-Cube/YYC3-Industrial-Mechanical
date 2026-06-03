/**
 * file: api-response.ts
 * description: 统一 API 响应格式工具 · ok() / fail() 工厂函数
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: 2026-06-03
 * updated: 2026-06-03
 * status: active
 * tags: [api],[util],[response]
 *
 * details:
 * - 所有 Route Handler 统一使用此工具返回响应
 * - 成功响应: { success: true, data, meta: { requestId, timestamp, version } }
 * - 错误响应: { success: false, error: { code, message }, meta: { ... } }
 * - 自动附加 requestId 和 timestamp
 * - 支持可选的分页元数据 (pagination)
 */

import { NextResponse } from "next/server";

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

interface ApiResponseMeta {
  requestId: string;
  timestamp: string;
  version: string;
}

function createMeta(): ApiResponseMeta {
  return {
    requestId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  };
}

/**
 * 成功响应 (200)
 * @example ok({ id: "01", title: "数字人像" })
 * @example ok(modules, { pagination: { page: 1, limit: 20, total: 12, totalPages: 1 } })
 */
export function ok<T>(data: T, extras?: { pagination?: PaginationMeta }) {
  return NextResponse.json(
    {
      success: true as const,
      data,
      ...(extras?.pagination ? { pagination: extras.pagination } : {}),
      meta: createMeta(),
    },
    { status: 200 },
  );
}

/**
 * 创建成功响应 (201 Created)
 */
export function created<T>(data: T) {
  return NextResponse.json(
    { success: true as const, data, meta: createMeta() },
    { status: 201 },
  );
}

/**
 * 错误响应
 * @example fail("NOT_FOUND", "模块不存在", 404)
 * @example fail("VALIDATION_ERROR", "参数校验失败", 400, details)
 */
export function fail(
  code: string,
  message: string,
  status: number = 400,
  details?: Array<{ field: string; message: string; code: string }>,
) {
  return NextResponse.json(
    {
      success: false as const,
      error: { code, message, ...(details ? { details } : {}) },
      meta: createMeta(),
    },
    { status },
  );
}

/**
 * 健康检查专用成功响应
 */
export function health<T>(data: T) {
  return NextResponse.json(data, { status: 200 });
}
