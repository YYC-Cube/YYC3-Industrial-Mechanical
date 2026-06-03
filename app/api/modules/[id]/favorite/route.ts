import { fail, ok } from "@/lib/api-response";
import { z } from "zod";

const FavoriteSchema = z.object({
  isFavorite: z.boolean(),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const body = await request.json();
    const { isFavorite } = FavoriteSchema.parse(body);

    console.log(`模块 ${id} 收藏状态已更改为: ${isFavorite}`);

    return ok({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return fail("VALIDATION_ERROR", "参数校验失败", 400, error.errors.map((e) => ({
        field: e.path.join("."),
        message: e.message,
        code: "INVALID_PARAM",
      })));
    }
    console.error(`更新模块 ${id} 收藏状态失败:`, error);
    return fail("INTERNAL_ERROR", "更新收藏状态失败", 500);
  }
}
