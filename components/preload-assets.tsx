"use client";

import { useEffect } from "react";

export function PreloadAssets() {
  useEffect(() => {
    // 预加载逻辑已迁移至 sound-context.tsx（Web Audio API 回退方案）
    // 无须额外预加载操作
  }, []);

  // 这个组件不渲染任何内容
  return null;
}
