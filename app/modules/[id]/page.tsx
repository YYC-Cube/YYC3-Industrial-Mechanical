import { mockModules } from "@/services/mock-data";

import ModuleDetailView from "./module-detail-view";

// 静态导出：为所有模块预生成路由（/modules/01/ ... /modules/12/）
export function generateStaticParams() {
  return mockModules.map((module) => ({ id: module.id }));
}

export default function ModuleDetailPage() {
  return <ModuleDetailView />;
}
