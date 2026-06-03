import { fail, health } from "@/lib/api-response";
import { env } from "@/lib/env";

export async function GET() {
  try {
    const healthStatus = {
      status: "ok",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      version: env.version,
      apis: {
        modules: "ok",
      },
    };

    return health(healthStatus);
  } catch (error) {
    console.error("健康检查失败:", error);
    return fail("INTERNAL_ERROR", "健康检查失败", 500);
  }
}
