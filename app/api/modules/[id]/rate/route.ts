import { fail, ok } from "@/lib/api-response";
import { z } from "zod";

const RateSchema = z.object({
  rating: z.number().int().min(1).max(5),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const body = await request.json();
    const { rating } = RateSchema.parse(body);

    console.log(`模块 ${id} 评分已更新为: ${rating}`);

    return ok({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return fail("VALIDATION_ERROR", "参数校验失败", 400, error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
        code: "INVALID_PARAM",
      })));
    }
    console.error(`更新模块 ${id} 评分失败:`, error);
    return fail("INTERNAL_ERROR", "更新评分失败", 500);
  }
}
