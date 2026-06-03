import { fail, ok } from "@/lib/api-response";
import { z } from "zod";

const ShareSchema = z.object({
  platform: z.string().min(1).max(50),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const body = await request.json();
    const { platform } = ShareSchema.parse(body);

    console.log(`模块 ${id} 已分享到: ${platform}`);

    return ok({ url: `https://nexus-ai.example.com/share/${id}` });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return fail("VALIDATION_ERROR", "参数校验失败", 400, error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
        code: "INVALID_PARAM",
      })));
    }
    console.error(`分享模块 ${id} 失败:`, error);
    return fail("INTERNAL_ERROR", "分享失败", 500);
  }
}
