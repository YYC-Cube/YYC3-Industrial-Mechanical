"use client";

import type React from "react";

import { Component, type ReactNode } from "react";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  className?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundaryBase extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 记录错误到错误日志系统
    console.error("组件错误:", error, errorInfo);

    // 调用自定义错误处理函数
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // 发送错误到服务器（可选）
    try {
      void fetch("/api/log-error", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        // 静默处理日志发送失败
      });
    } catch {
      // 静默处理
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className={cn(
            "min-h-[200px] flex items-center justify-center bg-[#1F2127] border border-[#25272E] rounded-lg p-6",
            this.props.className,
          )}
        >
          <div className="text-center">
            <div className="text-[#FF4444] text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-bold mb-2">出现错误</h3>
            <p className="text-[#D0D5DE]/70 mb-4">
              {this.state.error?.message ||
                "加载此内容时发生错误，请刷新页面重试"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#FF6B3C] text-black rounded-md font-medium hover:bg-[#FF8F6C] transition-colors"
            >
              刷新页面
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 包装组件以使用语言上下文
export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { t } = useLanguage();

  const defaultFallback = (
    <div
      className={cn(
        "min-h-[200px] flex items-center justify-center bg-[#1F2127] border border-[#25272E] rounded-lg p-6",
        props.className,
      )}
    >
      <div className="text-center">
        <div className="text-[#FF4444] text-4xl mb-4">⚠️</div>
        <h3 className="text-xl font-bold mb-2">
          {t("出现错误", "An Error Occurred")}
        </h3>
        <p className="text-[#D0D5DE]/70 mb-4">
          {t(
            "加载此内容时发生错误，请刷新页面重试",
            "There was an error loading this content. Please refresh the page and try again.",
          )}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#FF6B3C] text-black rounded-md font-medium hover:bg-[#FF8F6C] transition-colors"
        >
          {t("刷新页面", "Refresh Page")}
        </button>
      </div>
    </div>
  );

  return (
    <ErrorBoundaryBase {...props} fallback={props.fallback || defaultFallback}>
      {props.children}
    </ErrorBoundaryBase>
  );
}
