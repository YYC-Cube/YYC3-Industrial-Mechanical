import type { ModuleData } from "@/types/module";

// 内联定义模拟数据，包含完整的12个模块
const mockModules: ModuleData[] = [
  {
    id: "01",
    title: "数字人像",
    titleEn: "Digital Avatar",
    description: "一键克隆形象与声音，轻松生成多场景视频",
    descriptionEn: "Clone your image and voice with one click, easily generate videos for multiple scenarios",
    features: ["形象克隆", "音色复制", "音频合成", "视频生成", "文案创作", "批量制作", "静态数人", "直播数人"],
    featuresEn: ["Image Clone", "Voice Copy", "Audio Synthesis", "Video Generation", "Content Creation", "Batch Production", "Static Avatar", "Live Avatar"],
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
    features: ["深度推理", "知识对话", "对话分享", "文件解析", "联网搜索", "场景对话", "对话导出", "语义理解"],
    featuresEn: ["Deep Reasoning", "Knowledge Chat", "Chat Sharing", "File Analysis", "Web Search", "Scenario Chat", "Chat Export", "Semantic Understanding"],
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
    descriptionEn: "One-stop WeChat account management, AI auto-chat and SOP simulated customer service",
    features: ["账号管理", "智能聊天", "关键回复", "用户画像", "欢迎设置", "知识对话", "客户跟进", "朋友营销"],
    featuresEn: ["Account Management", "Smart Chat", "Key Replies", "User Profiling", "Welcome Setup", "Knowledge Chat", "Customer Follow-up", "Friend Marketing"],
    icon: "📱",
    isFavorite: false,
    rating: 4.2,
    userRating: 0,
  },
  {
    id: "04",
    title: "AI绘画助手",
    titleEn: "AI Drawing Assistant",
    description: "输入文字描述，AI自动生成精美图片和插画",
    descriptionEn: "Input text descriptions, AI automatically generates beautiful pictures and illustrations",
    features: ["文字生图", "风格转换", "草图上色", "图像修复", "创意扩展", "多风格支持", "高清输出", "批量生成"],
    featuresEn: ["Text to Image", "Style Transfer", "Sketch Coloring", "Image Restoration", "Creative Expansion", "Multi-style Support", "HD Output", "Batch Generation"],
    icon: "🎨",
    isFavorite: false,
    rating: 4.7,
    userRating: 0,
  },
  {
    id: "05",
    title: "智能写作",
    titleEn: "Smart Writing",
    description: "AI辅助创作，快速生成各类文档、文案和文章",
    descriptionEn: "AI-assisted creation, quickly generate various documents, copywriting and articles",
    features: ["文案创作", "文章续写", "内容改写", "语法检查", "翻译服务", "风格调整", "摘要生成", "关键词提取"],
    featuresEn: ["Copywriting Creation", "Article Continuation", "Content Rewriting", "Grammar Checking", "Translation Service", "Style Adjustment", "Summary Generation", "Keyword Extraction"],
    icon: "✍️",
    isFavorite: false,
    rating: 4.6,
    userRating: 0,
  },
  {
    id: "06",
    title: "语音转文字",
    titleEn: "Speech to Text",
    description: "精准识别各类语音，实时转写为文字内容",
    descriptionEn: "Accurately identify various types of speech and transcribe to text in real-time",
    features: ["实时转写", "多语言识别", "方言支持", "标点智能", "分段整理", "关键词提取", "文本摘要", "导出分享"],
    featuresEn: ["Real-time Transcription", "Multi-language Recognition", "Dialect Support", "Intelligent Punctuation", "Segmentation", "Keyword Extraction", "Text Summary", "Export Sharing"],
    icon: "🎙️",
    isFavorite: false,
    rating: 4.4,
    userRating: 0,
  },
  {
    id: "07",
    title: "智能翻译",
    titleEn: "Smart Translation",
    description: "多语种实时翻译，支持文本、图片和语音",
    descriptionEn: "Multi-language real-time translation, supporting text, images and voice",
    features: ["文本翻译", "图片翻译", "语音翻译", "文档翻译", "实时对话", "专业术语库", "历史记录", "批量翻译"],
    featuresEn: ["Text Translation", "Image Translation", "Voice Translation", "Document Translation", "Real-time Conversation", "Professional Terminology", "History Records", "Batch Translation"],
    icon: "🌐",
    isFavorite: false,
    rating: 4.3,
    userRating: 0,
  },
  {
    id: "08",
    title: "代码助手",
    titleEn: "Code Assistant",
    description: "AI辅助编程，自动生成、解释和优化代码",
    descriptionEn: "AI-assisted programming, automatically generate, explain and optimize code",
    features: ["代码生成", "代码解释", "错误修复", "性能优化", "注释生成", "多语言支持", "API查询", "项目分析"],
    featuresEn: ["Code Generation", "Code Explanation", "Error Fixing", "Performance Optimization", "Comment Generation", "Multi-language Support", "API Query", "Project Analysis"],
    icon: "💻",
    isFavorite: false,
    rating: 4.9,
    userRating: 0,
  },
  {
    id: "09",
    title: "智能学习",
    titleEn: "Smart Learning",
    description: "个性化学习方案，智能推荐学习内容和路径",
    descriptionEn: "Personalized learning plans, intelligently recommend learning content and paths",
    features: ["学习规划", "内容推荐", "进度跟踪", "知识图谱", "习题生成", "错题分析", "笔记整理", "学习报告"],
    featuresEn: ["Learning Planning", "Content Recommendation", "Progress Tracking", "Knowledge Graph", "Exercise Generation", "Error Analysis", "Note Organization", "Learning Reports"],
    icon: "🎓",
    isFavorite: false,
    rating: 4.5,
    userRating: 0,
  },
  {
    id: "10",
    title: "数据分析",
    titleEn: "Data Analysis",
    description: "智能分析各类数据，生成可视化报告和洞察",
    descriptionEn: "Intelligently analyze various data, generate visual reports and insights",
    features: ["数据导入", "自动分析", "可视化图表", "异常检测", "预测模型", "报告生成", "多格式导出", "实时更新"],
    featuresEn: ["Data Import", "Auto Analysis", "Visual Charts", "Anomaly Detection", "Prediction Models", "Report Generation", "Multi-format Export", "Real-time Updates"],
    icon: "📊",
    isFavorite: false,
    rating: 4.4,
    userRating: 0,
  },
  {
    id: "11",
    title: "虚拟助手",
    titleEn: "Virtual Assistant",
    description: "24小时智能问答，处理日程、提醒和信息查询",
    descriptionEn: "24-hour intelligent Q&A, handling schedules, reminders and information queries",
    features: ["智能问答", "日程管理", "提醒设置", "信息查询", "天气查询", "新闻推送", "语音交互", "个性化设置"],
    featuresEn: ["Intelligent Q&A", "Schedule Management", "Reminder Setup", "Information Query", "Weather Query", "News Push", "Voice Interaction", "Personalization"],
    icon: "🤖",
    isFavorite: false,
    rating: 4.3,
    userRating: 0,
  },
  {
    id: "12",
    title: "创意灵感",
    titleEn: "Creative Inspiration",
    description: "激发创新思维，提供创意素材和灵感来源",
    descriptionEn: "Inspire innovative thinking, provide creative materials and inspiration sources",
    features: ["灵感库", "创意生成", "素材推荐", "趋势分析", "头脑风暴", "原型设计", "协作分享", "版权查询"],
    featuresEn: ["Inspiration Library", "Creative Generation", "Material Recommendation", "Trend Analysis", "Brainstorming", "Prototype Design", "Collaboration Sharing", "Copyright Query"],
    icon: "💡",
    isFavorite: false,
    rating: 4.6,
    userRating: 0,
  },
];

// 简化版错误处理
function handleError(error: any, options: any) {
  console.error("Error:", error);
  return options.fallback;
}

// 检查是否在预览环境中
const isPreviewEnv = () => {
  if (typeof window === "undefined") return false;
  return (
    window.location.hostname.includes("preview") ||
    window.location.hostname.includes("localhost") ||
    window.location.hostname.includes("vusercontent")
  );
};

// 获取所有模块
export async function getAllModules(): Promise<ModuleData[]> {
  // 在预览环境中直接返回模拟数据
  if (isPreviewEnv()) {
    console.log("预览环境中使用模拟数据");
    return mockModules;
  }

  try {
    // 使用优化后的API客户端
    // const response = await apiClient.get<ModuleData[]>("modules")
    const response = { data: mockModules, error: null }; // 模拟API响应

    if (response.error) {
      return handleError(response.error, {
        tags: ["module-service", "get-all-modules"],
        fallback: mockModules,
      });
    }

    return response.data || mockModules;
  } catch (error) {
    return handleError(error, {
      tags: ["module-service", "get-all-modules"],
      fallback: mockModules,
    });
  }
}

// 获取单个模块详情
export async function getModuleById(id: string): Promise<ModuleData | null> {
  // 在预览环境中直接从模拟数据中查找
  if (isPreviewEnv()) {
    console.log("预览环境中使用模拟数据");
    return mockModules.find((m) => m.id === id) || null;
  }

  try {
    // 使用优化后的API客户端
    // const response = await apiClient.get<ModuleData>(`modules/${id}`)
    const response = {
      data: mockModules.find((m) => m.id === id) || null,
      error: null,
    }; // 模拟API响应

    if (response.error) {
      return handleError(response.error, {
        tags: ["module-service", "get-module-by-id"],
        metadata: { moduleId: id },
        fallback: mockModules.find((m) => m.id === id) || null,
      });
    }

    return response.data || mockModules.find((m) => m.id === id) || null;
  } catch (error) {
    return handleError(error, {
      tags: ["module-service", "get-module-by-id"],
      metadata: { moduleId: id },
      fallback: mockModules.find((m) => m.id === id) || null,
    });
  }
}

// 收藏模块
export async function toggleFavoriteModule(
  id: string,
  isFavorite: boolean,
): Promise<boolean> {
  // 在预览环境中模拟成功
  if (isPreviewEnv()) {
    console.log(`预览环境中模拟收藏模块 ${id}: ${isFavorite}`);
    return true;
  }

  try {
    // 使用优化后的API客户端
    // const response = await apiClient.post<{ success: boolean }>(`modules/${id}/favorite`, {
    //   isFavorite,
    // })
    const response = { data: { success: true }, error: null }; // 模拟API响应

    if (response.error) {
      return handleError(response.error, {
        tags: ["module-service", "toggle-favorite"],
        metadata: { moduleId: id, isFavorite },
        fallback: false,
      });
    }

    return response.data?.success || false;
  } catch (error) {
    return handleError(error, {
      tags: ["module-service", "toggle-favorite"],
      metadata: { moduleId: id, isFavorite },
      fallback: false,
    });
  }
}

// 评分模块
export async function rateModule(id: string, rating: number): Promise<boolean> {
  // 在预览环境中模拟成功
  if (isPreviewEnv()) {
    console.log(`预览环境中模拟评分模块 ${id}: ${rating}`);
    return true;
  }

  try {
    // 使用优化后的API客户端
    // const response = await apiClient.post<{ success: boolean }>(`modules/${id}/rate`, { rating })
    const response = { data: { success: true }, error: null }; // 模拟API响应

    if (response.error) {
      return handleError(response.error, {
        tags: ["module-service", "rate-module"],
        metadata: { moduleId: id, rating },
        fallback: false,
      });
    }

    return response.data?.success || false;
  } catch (error) {
    return handleError(error, {
      tags: ["module-service", "rate-module"],
      metadata: { moduleId: id, rating },
      fallback: false,
    });
  }
}

// 分享模块
export async function shareModule(
  id: string,
  platform: string,
): Promise<{ url: string }> {
  // 在预览环境中模拟成功
  if (isPreviewEnv()) {
    console.log(`预览环境中模拟分享模块 ${id} 到 ${platform}`);
    return { url: `https://example.com/share/${id}` };
  }

  try {
    // 使用优化后的API客户端
    // const response = await apiClient.post<{ url: string }>(`modules/${id}/share`, { platform })
    const response = {
      data: { url: `https://example.com/share/${id}` },
      error: null,
    }; // 模拟API响应

    if (response.error) {
      return handleError(response.error, {
        tags: ["module-service", "share-module"],
        metadata: { moduleId: id, platform },
        fallback: { url: "" },
      });
    }

    return response.data || { url: "" };
  } catch (error) {
    return handleError(error, {
      tags: ["module-service", "share-module"],
      metadata: { moduleId: id, platform },
      fallback: { url: "" },
    });
  }
}
