type ErrorSeverity = "low" | "medium" | "high" | "critical";

interface ErrorLogOptions {
  severity?: ErrorSeverity;
  tags?: string[];
  user?: string;
  metadata?: Record<string, any>;
}

class ErrorLogger {
  private static instance: ErrorLogger;
  private isInitialized = false;
  private endpoint = "/api/log-error";
  private appVersion = "1.0.0";
  private environment = process.env.NODE_ENV || "development";

  private constructor() {
    // 单例模式
  }

  public static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger();
    }
    return ErrorLogger.instance;
  }

  public init(options?: { endpoint?: string; appVersion?: string }) {
    if (options?.endpoint) {
      this.endpoint = options.endpoint;
    }
    if (options?.appVersion) {
      this.appVersion = options.appVersion;
    }

    this.setupGlobalHandlers();
    this.isInitialized = true;

    return this;
  }

  private setupGlobalHandlers() {
    if (typeof window !== "undefined") {
      // 捕获未处理的Promise错误
      window.addEventListener("unhandledrejection", (event) => {
        this.logError(event.reason, {
          severity: "high",
          tags: ["unhandled-promise-rejection"],
        });
      });

      // 捕获全局错误
      window.addEventListener("error", (event) => {
        this.logError(event.error || new Error(event.message), {
          severity: "high",
          tags: ["global-error"],
          metadata: {
            fileName: event.filename,
            lineNumber: event.lineno,
            columnNumber: event.colno,
          },
        });
      });
    }
  }

  public logError(error: Error | string, options: ErrorLogOptions = {}) {
    const errorObj = typeof error === "string" ? new Error(error) : error;

    const logData = {
      message: errorObj.message,
      stack: errorObj.stack,
      timestamp: new Date().toISOString(),
      severity: options.severity || "medium",
      tags: options.tags || [],
      user: options.user,
      metadata: options.metadata || {},
      appVersion: this.appVersion,
      environment: this.environment,
      userAgent:
        typeof navigator !== "undefined" ? navigator.userAgent : undefined,
    };

    // 在控制台输出错误
    console.error("[ErrorLogger]", logData);

    // 发送错误到服务器
    this.sendErrorToServer(logData).catch((err) => {
      console.error("发送错误日志失败:", err);
    });

    return logData;
  }

  private async sendErrorToServer(logData: any) {
    if (typeof window === "undefined") return;

    try {
      // 使用Beacon API在页面卸载时也能发送数据
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(logData)], {
          type: "application/json",
        });
        return navigator.sendBeacon(this.endpoint, blob);
      }

      // 回退到fetch
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData),
        // 不等待响应完成
        keepalive: true,
      });

      return response.ok;
    } catch (e) {
      console.error("发送错误日志失败:", e);
      return false;
    }
  }

  public logInfo(message: string, metadata?: Record<string, any>) {
    console.info("[Info]", message, metadata);
  }

  public logWarning(message: string, metadata?: Record<string, any>) {
    console.warn("[Warning]", message, metadata);

    // 可以选择是否将警告也发送到服务器
    // this.sendErrorToServer({
    //   message,
    //   severity: "low",
    //   tags: ["warning"],
    //   metadata,
    //   timestamp: new Date().toISOString(),
    // })
  }
}

// 导出单例实例
export const errorLogger = ErrorLogger.getInstance();

// 便捷函数
export function logError(error: Error | string, options?: ErrorLogOptions) {
  return errorLogger.logError(error, options);
}

export function logWarning(message: string, metadata?: Record<string, any>) {
  return errorLogger.logWarning(message, metadata);
}

export function logInfo(message: string, metadata?: Record<string, any>) {
  return errorLogger.logInfo(message, metadata);
}
