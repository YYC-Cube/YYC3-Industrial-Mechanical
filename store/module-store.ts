import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ModuleData } from "@/types/module";
import { getAllModules, getModuleById } from "@/services/module-service";
import { handleError } from "@/lib/error-handler";

// 内联模拟数据，避免导入问题
const mockModules = [
  {
    id: "01",
    title: "数字人像",
    titleEn: "Digital Avatar",
    description: "一键克隆形象与声音，轻松生成多场景视频",
    descriptionEn:
      "Clone your image and voice with one click, easily generate videos for multiple scenarios",
    features: [
      "形象克隆",
      "音色复制",
      "音频合成",
      "视频生成",
      "文案创作",
      "批量制作",
      "静态数人",
      "直播数人",
    ],
    featuresEn: [
      "Image Clone",
      "Voice Copy",
      "Audio Synthesis",
      "Video Generation",
      "Content Creation",
      "Batch Production",
      "Static Avatar",
      "Live Avatar",
    ],
    icon: "👤",
    isFavorite: false,
    rating: 4.5,
    userRating: 0,
  },
  {
    id: "02",
    title: "智能对话",
    titleEn: "Smart Chat",
    description: "思路对接，就像跟真实文件对话",
    descriptionEn: "Connect ideas, chat with files as if they were real people",
    features: [
      "深度推理",
      "知识对话",
      "对话分享",
      "文件解析",
      "联网搜索",
      "场景对话",
      "对话导出",
      "语义理解",
    ],
    featuresEn: [
      "Deep Reasoning",
      "Knowledge Chat",
      "Chat Sharing",
      "File Analysis",
      "Web Search",
      "Scenario Chat",
      "Chat Export",
      "Semantic Understanding",
    ],
    icon: "💬",
    isFavorite: true,
    rating: 4.8,
    userRating: 5,
  },
  {
    id: "03",
    title: "微信助手",
    titleEn: "WeChat Helper",
    description: "一站式提高微信号管理，AI自动聊天与SOP模拟化客服",
    descriptionEn:
      "One-stop WeChat account management, AI auto-chat and SOP simulated customer service",
    features: [
      "账号管理",
      "智能聊天",
      "关键回复",
      "用户画像",
      "欢迎设置",
      "知识对话",
      "客户跟进",
      "朋友营销",
    ],
    featuresEn: [
      "Account Management",
      "Smart Chat",
      "Key Replies",
      "User Profiling",
      "Welcome Setup",
      "Knowledge Chat",
      "Customer Follow-up",
      "Friend Marketing",
    ],
    icon: "📱",
    isFavorite: false,
    rating: 4.2,
    userRating: 0,
  },
];

interface ModuleState {
  modules: ModuleData[];
  activeModule: string | null;
  loading: boolean;
  error: Error | null;

  // 操作
  fetchModules: () => Promise<void>;
  fetchModule: (id: string) => Promise<ModuleData | null>;
  setActiveModule: (id: string | null) => void;
  toggleFavorite: (id: string, isFavorite: boolean) => Promise<void>;
  rateModule: (id: string, rating: number) => Promise<void>;
}

export const useModuleStore = create<ModuleState>()(
  persist(
    (set, get) => ({
      modules: [],
      activeModule: null,
      loading: false,
      error: null,

      fetchModules: async () => {
        set({ loading: true, error: null });

        try {
          const data = await getAllModules();
          set({ modules: data, loading: false });
        } catch (error) {
          handleError(error, {
            tags: ["module-store", "fetch-modules"],
            showToUser: true,
          });

          set({
            error:
              error instanceof Error ? error : new Error("获取模块列表失败"),
            loading: false,
            modules: mockModules, // 使用模拟数据作为回退
          });
        }
      },

      fetchModule: async (id) => {
        try {
          // 先检查本地状态中是否已有该模块
          const existingModule = get().modules.find((m) => m.id === id);
          if (existingModule) return existingModule;

          // 否则从API获取
          const module = await getModuleById(id);

          // 如果获取成功，更新本地状态
          if (module) {
            set((state) => ({
              modules: state.modules.some((m) => m.id === id)
                ? state.modules.map((m) => (m.id === id ? module : m))
                : [...state.modules, module],
            }));
          }

          return module;
        } catch (error) {
          handleError(error, {
            tags: ["module-store", "fetch-module"],
            metadata: { moduleId: id },
            showToUser: true,
          });

          return null;
        }
      },

      setActiveModule: (id) => set({ activeModule: id }),

      toggleFavorite: async (id, isFavorite) => {
        // 乐观更新
        set((state) => ({
          modules: state.modules.map((m) =>
            m.id === id ? { ...m, isFavorite } : m,
          ),
        }));

        try {
          // 调用API
          await import("@/services/module-service").then(
            ({ toggleFavoriteModule }) => toggleFavoriteModule(id, isFavorite),
          );
        } catch (error) {
          // 如果失败，回滚状态
          handleError(error, {
            tags: ["module-store", "toggle-favorite"],
            metadata: { moduleId: id, isFavorite },
            showToUser: true,
          });

          set((state) => ({
            modules: state.modules.map((m) =>
              m.id === id ? { ...m, isFavorite: !isFavorite } : m,
            ),
          }));
        }
      },

      rateModule: async (id, rating) => {
        // 乐观更新
        set((state) => ({
          modules: state.modules.map((m) =>
            m.id === id ? { ...m, userRating: rating } : m,
          ),
        }));

        try {
          // 调用API
          await import("@/services/module-service").then(({ rateModule }) =>
            rateModule(id, rating),
          );
        } catch (error) {
          // 如果失败，回滚状态
          handleError(error, {
            tags: ["module-store", "rate-module"],
            metadata: { moduleId: id, rating },
            showToUser: true,
          });

          set((state) => ({
            modules: state.modules.map((m) =>
              m.id === id ? { ...m, userRating: m.userRating || 0 } : m,
            ),
          }));
        }
      },
    }),
    {
      name: "nexus-module-storage",
      partialize: (state) => ({
        modules: state.modules,
        activeModule: state.activeModule,
      }),
    },
  ),
);
