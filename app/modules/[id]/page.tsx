"use client";

import type React from "react";

import CasesTab from "@/components/cases-tab";
import DocsTab from "@/components/docs-tab";
import ModuleDetailSkeleton from "@/components/module-detail-skeleton";
import { useLanguage } from "@/contexts/language-context";
import { useSound } from "@/contexts/sound-context";
import {
  getModuleById,
  rateModule,
  shareModule,
  toggleFavoriteModule,
} from "@/services/module-service";
import type { ModuleData } from "@/types/module";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Heart,
  Info,
  Settings,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getModuleAdvantages,
  getModulePurpose,
  getModuleSpecs,
  getModuleUserType,
} from "./utils";

// 模块详情页面
export default function ModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { playSound } = useSound();
  const { language, t } = useLanguage();
  const [module, setModule] = useState<ModuleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [isFavorite, setIsFavorite] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    async function loadModuleData() {
      if (typeof params.id !== "string") {
        router.push("/");
        return;
      }

      setLoading(true);
      try {
        const data = await getModuleById(params.id);
        if (!data) {
          router.push("/");
          return;
        }
        setModule(data);
        setIsFavorite(data.isFavorite || false);
        setUserRating(data.userRating || 0);
        // 页面加载完成后播放启动音效
        playSound("startup");
      } catch (error) {
        console.error("加载模块数据失败:", error);
      } finally {
        setLoading(false);
      }
    }

    loadModuleData();
  }, [params.id, router, playSound]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    playSound("click");
  };

  const handleBack = () => {
    playSound("close");
    router.push("/");
  };

  const handleFavoriteToggle = async () => {
    if (!module) return;

    const newState = !isFavorite;
    setIsFavorite(newState);
    playSound(newState ? "success" : "click");

    try {
      await toggleFavoriteModule(module.id, newState);
    } catch (error) {
      console.error("更新收藏状态失败:", error);
      setIsFavorite(!newState); // 恢复原状态
    }
  };

  const handleRating = async (rating: number) => {
    if (!module) return;

    setUserRating(rating);
    playSound("success");

    try {
      await rateModule(module.id, rating);
    } catch (error) {
      console.error("更新评分失败:", error);
      setUserRating(0); // 恢复原状态
    }
  };

  const handleShare = async (platform: string) => {
    if (!module) return;

    try {
      const result = await shareModule(module.id, platform);
      setShareUrl(result.url);
      setIsShareModalOpen(true);
      playSound("success");
    } catch (error) {
      console.error("分享失败:", error);
    }
  };

  if (loading) {
    return <ModuleDetailSkeleton />;
  }

  // 在页面加载失败时显示错误信息
  if (!module && !loading) {
    return (
      <div className="min-h-screen bg-[#1A1C22] text-[#D0D5DE] flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">
            {t("模块不存在", "Module Not Found")}
          </h2>
          <p className="mb-6">
            {t(
              "请检查模块ID是否正确，或返回首页查看所有模块",
              "Please check the module ID or return to the homepage to view all modules",
            )}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 bg-[#FF6B3C] text-black rounded-md font-medium hover:bg-[#FF8F6C] transition-colors"
          >
            {t("返回首页", "Back to Home")}
          </button>
        </div>
      </div>
    );
  }

  // 类型守卫：经过上方两个 early return，module 必不为 null
  const m = module!;

  // 根据当前语言获取标题和描述
  const title =
    language === "en" ? m.titleEn || m.title : m.title;
  const description =
    language === "en"
      ? m.descriptionEn || m.description
      : m.description;

  return (
    <div className="min-h-screen bg-[#1A1C22] text-[#D0D5DE]">
      {/* 顶部导航栏 */}
      <header className="border-b border-[#25272E] bg-[#1A1C22]/70 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBack}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#25272E] hover:bg-[#25272E] transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5V3M12 21v-2M5 12H3M21 12h-2M18.364 18.364l-1.414-1.414M7.05 7.05L5.636 5.636M18.364 5.636l-1.414 1.414M7.05 16.95l-1.414 1.414"
                      stroke="#FF6B3C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" fill="#00B4FF" />
                  </svg>
                </div>
              </div>
              <h1 className="text-xl font-bold tracking-tight">YYC³ Industrial Mechanical</h1>
            </div>
          </div>

          {/* 用户交互按钮 - 桌面版 */}
          <div className="hidden md:flex items-center gap-3">
            <UserInteractionButtons
              isFavorite={isFavorite}
              userRating={userRating}
              onFavoriteToggle={handleFavoriteToggle}
              onRate={handleRating}
              onShare={() => handleShare("general")}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 模块标题区域 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-md bg-[#2A2D36] text-3xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {m.icon}
            </motion.div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
              <p className="text-[#D0D5DE]/70">{description}</p>
            </div>

            {/* 用户交互按钮 - 移动版 */}
            <div className="flex md:hidden items-center gap-3 mt-2">
              <UserInteractionButtons
                isFavorite={isFavorite}
                userRating={userRating}
                onFavoriteToggle={handleFavoriteToggle}
                onRate={handleRating}
                onShare={() => handleShare("general")}
                compact
              />
            </div>
          </div>

          {/* 机械装饰线 */}
          <div className="relative h-1 w-full bg-[#25272E] overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF6B3C] to-[#FF8F6C]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* 标签页导航 */}
        <div className="mb-6 border-b border-[#25272E] overflow-x-auto">
          <div className="flex space-x-1 min-w-max">
            <TabButton
              active={activeTab === "overview"}
              onClick={() => handleTabChange("overview")}
              icon={<Info size={16} />}
              label={t("概览", "Overview")}
            />
            <TabButton
              active={activeTab === "features"}
              onClick={() => handleTabChange("features")}
              icon={<Settings size={16} />}
              label={t("功能", "Features")}
            />
            <TabButton
              active={activeTab === "cases"}
              onClick={() => handleTabChange("cases")}
              icon={<Users size={16} />}
              label={t("案例", "Cases")}
            />
            <TabButton
              active={activeTab === "docs"}
              onClick={() => handleTabChange("docs")}
              icon={<ExternalLink size={16} />}
              label={t("文档", "Docs")}
            />
          </div>
        </div>

        {/* 标签页内容 */}
        <div className="min-h-[60vh]">
          {activeTab === "overview" && <OverviewTab module={m} />}
          {activeTab === "features" && <FeaturesTab module={m} />}
          {activeTab === "cases" && <CasesTab module={m} />}
          {activeTab === "docs" && <DocsTab module={m} />}
        </div>
      </main>

      <footer className="border-t border-[#25272E] py-6">
        <div className="container mx-auto px-4 text-center text-sm text-[#D0D5DE]/60">
          <p>
            {t(
              "© 2026 YYC³ Industrial Mechanical. 保留所有权利.",
              "© 2026 YYC³ Industrial Mechanical. All rights reserved.",
            )}
          </p>
        </div>
      </footer>

      {/* 分享模态框 */}
      <ShareModal
        isOpen={isShareModalOpen}
        url={shareUrl}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}

// 用户交互按钮组件
function UserInteractionButtons({
  isFavorite,
  userRating,
  onFavoriteToggle,
  onRate,
  onShare,
  compact = false,
}: {
  isFavorite: boolean;
  userRating: number;
  onFavoriteToggle: () => void;
  onRate: (rating: number) => void;
  onShare: () => void;
  compact?: boolean;
}) {
  const [isRatingOpen, setIsRatingOpen] = useState(false);

  return (
    <>
      <button
        onClick={onFavoriteToggle}
        className={`flex items-center justify-center ${compact ? "w-8 h-8" : "w-9 h-9"} rounded-full border transition-colors ${isFavorite
          ? "border-[#FF6B3C] bg-[#FF6B3C]/10 text-[#FF6B3C]"
          : "border-[#25272E] hover:bg-[#25272E] text-[#D0D5DE]"
          }`}
        title="收藏"
      >
        <Heart size={16} fill={isFavorite ? "#FF6B3C" : "none"} />
      </button>

      <div className="relative">
        <button
          onClick={() => setIsRatingOpen(!isRatingOpen)}
          className={`flex items-center justify-center ${compact ? "w-8 h-8" : "w-9 h-9"} rounded-full border transition-colors ${userRating > 0
            ? "border-[#FFD700] bg-[#FFD700]/10 text-[#FFD700]"
            : "border-[#25272E] hover:bg-[#25272E] text-[#D0D5DE]"
            }`}
          title="评分"
        >
          <Star size={16} fill={userRating > 0 ? "#FFD700" : "none"} />
        </button>

        <AnimatePresence>
          {isRatingOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              className="absolute top-full mt-2 right-0 bg-[#1F2127] border border-[#25272E] rounded-md p-2 shadow-lg z-10"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => {
                      onRate(rating);
                      setIsRatingOpen(false);
                    }}
                    className="p-1 hover:text-[#FFD700] transition-colors"
                  >
                    <Star
                      size={16}
                      fill={rating <= userRating ? "#FFD700" : "none"}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={onShare}
        className={`flex items-center justify-center ${compact ? "w-8 h-8" : "w-9 h-9"} rounded-full border border-[#25272E] hover:bg-[#25272E] transition-colors`}
        title="分享"
      >
        <Share2 size={16} />
      </button>
    </>
  );
}

// 标签页按钮组件
function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative px-4 py-2 flex items-center gap-2 transition-colors ${active ? "text-[#FF6B3C]" : "text-[#D0D5DE] hover:text-[#D0D5DE]/80"
        }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B3C]"
          layoutId="activeTab"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </button>
  );
}

// 概览标签页内容
function OverviewTab({ module }: { module: ModuleData }) {
  const { language, t } = useLanguage();

  // 获取模块目标和用户类型
  const purpose = getModulePurpose(module.id);
  const userType = getModuleUserType(module.id);
  const advantages = getModuleAdvantages(module.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <motion.div
          className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {t("模块目标", "Module Purpose")}
          </h2>
          <p className="text-[#D0D5DE]/80 leading-relaxed">{purpose}</p>
        </motion.div>

        <motion.div
          className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {t("核心优势", "Core Advantages")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FF6B3C]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B3C]"></div>
                </div>
                <p className="text-[#D0D5DE]/80">{advantage}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {t("功能特性", "Features")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(language === "en" && module.featuresEn
              ? module.featuresEn
              : module.features
            ).map((feature, index) => (
              <motion.div
                key={index}
                className="border border-[#25272E] rounded-md p-3 bg-[#25272E]/20"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255, 107, 60, 0.1)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#FF6B3C]/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B3C]"></div>
                  </div>
                  <span>{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="space-y-6">
        <motion.div
          className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {t("适用用户", "Target Users")}
          </h2>
          <p className="text-[#D0D5DE]/80 leading-relaxed">{userType}</p>
        </motion.div>

        <motion.div
          className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {t("技术规格", "Technical Specs")}
          </h2>
          <div className="space-y-3">
            {getModuleSpecs(module.id).map((spec, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-[#D0D5DE]/60">
                  {t(spec.name, spec.name)}
                </span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4">
            {t("快速操作", "Quick Actions")}
          </h2>
          <div className="space-y-2">
            <button className="w-full py-2 px-4 bg-[#FF6B3C] text-black rounded-md font-medium hover:bg-[#FF8F6C] transition-colors">
              {t("立即使用", "Use Now")}
            </button>
            <button className="w-full py-2 px-4 border border-[#25272E] rounded-md hover:bg-[#25272E] transition-colors">
              {t("查看教程", "View Tutorial")}
            </button>
            <button className="w-full py-2 px-4 border border-[#25272E] rounded-md hover:bg-[#25272E] transition-colors">
              {t("联系支持", "Contact Support")}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 功能标签页内容
function FeaturesTab({ module }: { module: ModuleData }) {
  const { language, t } = useLanguage();

  // 获取功能列表
  const features =
    language === "en" && module.featuresEn
      ? module.featuresEn
      : module.features;

  return (
    <div className="space-y-8">
      <motion.div
        className="rounded-lg border border-[#25272E] bg-[#1F2127] p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-6">
          {t("功能详情", "Feature Details")}
        </h2>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-[#25272E] rounded-lg p-4 bg-[#25272E]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#2A2D36] flex items-center justify-center text-[#FF6B3C]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature}</h3>
                  <p className="text-[#D0D5DE]/70">
                    {t(
                      `这是${feature}功能的详细描述，展示了该功能如何帮助用户提高效率和解决问题。`,
                      `This is a detailed description of the ${feature} feature, showing how it helps users improve efficiency and solve problems.`,
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// 分享模态框组件
function ShareModal({
  isOpen,
  url,
  onClose,
}: {
  isOpen: boolean;
  url: string;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-[#1F2127] border border-[#25272E] rounded-lg max-w-md w-full p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{t("分享模块", "Share Module")}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#25272E] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-[#D0D5DE]/70 mb-2">
            {t("分享链接", "Share Link")}
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={url}
              readOnly
              className="flex-1 bg-[#25272E] border border-[#25272E] rounded-md px-3 py-2 text-sm"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-2 bg-[#FF6B3C] text-black rounded-md text-sm font-medium hover:bg-[#FF8F6C] transition-colors"
            >
              {copied ? t("已复制", "Copied") : t("复制", "Copy")}
            </button>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#D0D5DE]/70 mb-2">
            {t("分享到", "Share to")}
          </p>
          <div className="flex gap-3">
            <button
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
                  "_blank",
                )
              }
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25272E] hover:bg-[#25272E]/70 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.05 4.27 20.82 3.27 21.2 2.14C20.22 2.69 19.14 3.09 18 3.29C17.09 2.29 15.84 1.7 14.5 1.7C11.91 1.7 9.82 3.8 9.82 6.38C9.82 6.76 9.85 7.13 9.93 7.47C6.1 7.29 2.71 5.44 0.5 2.59C0.37 2.96 0.3 3.37 0.3 3.8C0.3 4.6 0.67 5.32 1.23 5.8C0.45 5.79 0.22 5.64 0 5.42V5.46C0 7.7 1.56 9.54 3.66 9.92C3.36 10 3.04 10.05 2.7 10.05C2.46 10.05 2.24 10.03 2.01 9.98C2.47 11.8 4.14 13.16 6.08 13.2C4.54 14.45 2.62 15.18 0.56 15.18C0.37 15.18 0.19 15.17 0 15.15C1.95 16.45 4.27 17.2 6.76 17.2C14.5 17.2 18.85 10.67 18.85 5.08C18.85 4.9 18.84 4.71 18.83 4.53C19.83 3.9 20.68 3.1 21.4 2.17C20.5 2.53 19.56 2.78 18.58 2.9"
                  fill="#D0D5DE"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                  "_blank",
                )
              }
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25272E] hover:bg-[#25272E]/70 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  fill="#D0D5DE"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                  "_blank",
                )
              }
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25272E] hover:bg-[#25272E]/70 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  fill="#D0D5DE"
                />
                <path d="M6 9H2V21H6V9Z" fill="#D0D5DE" />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  fill="#D0D5DE"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
