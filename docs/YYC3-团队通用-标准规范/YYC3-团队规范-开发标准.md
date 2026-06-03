---
file: YYC3-团队规范-开发标准.md
description: YYC³ 团队统一开发标准 — 涵盖文档规范、代码标准、项目规范、质量保障的全量规范体系
author: YanYuCloudCube Team <admin@0379.email>
version: v1.1.0
created: 2026-03-21
updated: 2026-06-03
status: active
tags: [规范],[标准],[文档格式],[代码标准],[命名规范],[质量保障]
category: policy
language: zh-CN
audience: developers,managers,stakeholders
complexity: intermediate
---

> ***YanYuCloudCube***
> *言启象限 | 语枢未来*
> ***Words Initiate Quadrants, Language Serves as Core for Future***
> *万象归元于云枢 | 深栈智启新纪元*
> ***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***

---

# YYC³ 团队统一开发标准

## 总则

### 核心理念

**五高架构**：高可用 | 高性能 | 高安全 | 高扩展 | 高智能
**五标体系**：标准化 | 规范化 | 自动化 | 可视化 | 智能化
**五化转型**：流程化 | 数字化 | 生态化 | 工具化 | 服务化
**五维评估**：时间维 | 空间维 | 属性维 | 事件维 | 关联维

### 适用范围

本标准适用于 YYC³ Family 全部项目，包括但不限于：

- Web 应用（SPA / PWA）
- Electron 桌面端应用
- Docker 容器化部署
- 工具脚本与自动化流程
- 技术文档与设计文档

### 规范目标

- **可追溯性**：清晰记录代码与文档的创建者、创建时间和修改历史
- **可维护性**：提供用途、依赖关系和注意事项的说明
- **一致性**：统一格式，便于团队协作和代码审查
- **可迭代性**：语义化版本管理，支持持续演进
- **专业性**：符合行业标准，提升代码与文档质量

### 行业标准对照

| 标准领域 | 参考标准 |
|----------|----------|
| 软件文档 | ISO/IEC 18019、IEEE 1063、DITA |
| 元数据 | Dublin Core、Schema.org、JSON-LD |
| 版本管理 | SemVer 2.0.0 |
| Markdown | CommonMark |
| 代码风格 | ESLint / Prettier / TypeScript Strict |
| 测试 | Vitest / React Testing Library |

---

## 第一部分：文档规范

### 1.1 Markdown 文档标头格式

所有 Markdown 文档必须包含 YAML Front Matter 标头：

```markdown
---
file: {FILE_NAME}
description: {FILE_DESCRIPTION}
author: {AUTHOR_NAME} <{AUTHOR_EMAIL}>
version: {VERSION}
created: {CREATE_DATE}
updated: {UPDATE_DATE}
status: {STATUS}
tags: {TAGS}
category: {CATEGORY}
language: {LANGUAGE}
---

> ***YanYuCloudCube***
> *言启象限 | 语枢未来*
> ***Words Initiate Quadrants, Language Serves as Core for Future***
> *万象归元于云枢 | 深栈智启新纪元*
> ***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***

---
```

### 1.2 分类扩展字段

根据文档类型，在必填字段基础上添加扩展字段：

**技术文档**

```yaml
audience: developers
complexity: intermediate
```

**API 文档**

```yaml
base_url: https://api.yyc3.com/v1
authentication: oauth2
```

**项目文档**

```yaml
project: yyc3-platform
phase: development
```

**设计文档**

```yaml
design_type: architecture
review_status: approved
```

### 1.3 必填字段定义

| 字段 | 说明 | 格式要求 | 示例 |
|------|------|----------|------|
| file | 文件名称 | 相对路径或文件名 | `README.md` |
| description | 文档描述 | 简洁描述文档内容和用途，不超过 50 字 | `项目总览文档，包含项目介绍、快速开始等内容` |
| author | 作者信息 | 姓名 <邮箱> | `张三 <zhangsan@0379.email>` |
| version | 版本号 | 语义化版本号 SemVer | `v1.2.3` |
| created | 创建日期 | YYYY-MM-DD | `2026-03-06` |
| updated | 更新日期 | YYYY-MM-DD | `2026-03-06` |
| status | 文档状态 | 见 1.5 状态值定义 | `stable` |
| tags | 标签 | 逗号分隔的标签列表，2-4 个 | `project,overview,getting-started` |
| category | 文档分类 | 见 1.6 分类定义 | `technical` |
| language | 文档语言 | zh-CN / en-US / ja-JP | `zh-CN` |

### 1.4 可选字段定义

| 字段 | 说明 | 格式要求 | 示例 |
|------|------|----------|------|
| audience | 目标读者 | developers / managers / users / stakeholders | `developers` |
| complexity | 复杂度 | basic / intermediate / advanced / expert | `intermediate` |
| base_url | API 基础地址 | URL 地址 | `https://api.yyc3.com/v1` |
| authentication | 认证方式 | none / api-key / oauth2 / jwt | `oauth2` |
| project | 项目名称 | 项目标识符 | `yyc3-platform` |
| phase | 项目阶段 | planning / design / development / testing / production | `development` |
| design_type | 设计类型 | architecture / ui / ux / database | `architecture` |
| review_status | 审核状态 | pending / reviewed / approved / rejected | `approved` |
| related_docs | 相关文档 | 逗号分隔的文档列表 | `API.md,Architecture.md` |
| license | 许可证 | 标准许可证名称 | `MIT` |
| copyright | 版权声明 | 版权信息 | `Copyright (c) 2026 YanYuCloudCube Team` |

### 1.5 状态值定义

**文档/文件状态 (status)**

| 状态值 | 说明 | 使用场景 |
|--------|------|----------|
| draft | 草稿 | 初始编写阶段，内容不完整 |
| dev / active | 开发中/活跃 | 内容编写中或正在使用的文件 |
| review | 审核中 | 内容完成，等待审核 |
| stable / published | 稳定/已发布 | 内容稳定，可供参考 |
| deprecated | 已弃用 | 即将移除或不再维护 |
| experimental | 实验性 | 实验性功能 |

**审核状态 (review_status)**

| 状态值 | 说明 | 使用场景 |
|--------|------|----------|
| pending | 待审核 | 提交审核，等待处理 |
| reviewed | 已审核 | 审核完成，待确认 |
| approved | 已批准 | 审核通过，正式发布 |
| rejected | 已拒绝 | 审核未通过，需要修改 |

**项目阶段 (phase)**

| 阶段值 | 说明 | 使用场景 |
|--------|------|----------|
| planning | 规划阶段 | 项目立项和需求分析 |
| design | 设计阶段 | 技术方案和架构设计 |
| development | 开发阶段 | 功能开发和实现 |
| testing | 测试阶段 | 功能测试和质量保证 |
| production | 生产阶段 | 上线运行和维护 |

### 1.6 文档分类体系

| 分类 | 说明 | 示例文档 |
|------|------|----------|
| general | 通用文档 | README.md, CHANGELOG.md |
| technical | 技术文档 | Architecture.md, Database.md |
| api | API 文档 | API.md, Endpoints.md |
| project | 项目文档 | Project-Plan.md, Roadmap.md |
| design | 设计文档 | UI-Design.md, UX-Design.md |
| guide | 指南文档 | Getting-Started.md, Tutorial.md |
| policy | 策略文档 | Coding-Standard.md, Security-Policy.md |

### 1.7 标签规范

标签按 **类型 → 功能 → 模块** 顺序排列，每份文档 2-4 个标签：

| 分类 | 标签示例 | 说明 |
|------|----------|------|
| 文档类型 | `guide`, `reference`, `tutorial`, `report` | 按文档类型分类 |
| 技术领域 | `frontend`, `backend`, `devops`, `database` | 按技术领域分类 |
| 功能模块 | `auth`, `logging`, `cache`, `i18n`, `api` | 按功能模块分类 |
| 优先级 | `critical`, `high`, `medium`, `low` | 按优先级分类 |
| 语言 | `zh-CN`, `en-US`, `ja-JP` | 按文档语言分类 |

### 1.8 版本号规范

遵循语义化版本号 (SemVer 2.0.0)：`MAJOR.MINOR.PATCH`

| 变更类型 | 版本号变更 | 示例 |
|----------|------------|------|
| 内容修正 / Bug 修复 | PATCH +1 | `v1.0.0` → `v1.0.1` |
| 新增内容 / 向下兼容功能 | MINOR +1 | `v1.0.0` → `v1.1.0` |
| 结构重组 / 不兼容变更 | MAJOR +1 | `v1.0.0` → `v2.0.0` |

### 1.9 文档追溯机制

每次文档更新时，必须更新以下字段：

1. **updated** — 更新为当前日期
2. **version** — 根据变更类型递增版本号
3. **description** — 如有重大变更，更新描述

文档末尾必须包含变更历史记录：

```markdown
## 变更历史

| 版本 | 日期 | 变更内容 | 作者 |
|------|------|----------|------|
| v1.2.0 | 2026-03-06 | 新增 API 认证章节 | 张三 |
| v1.1.0 | 2026-02-28 | 更新架构设计章节 | 李四 |
| v1.0.0 | 2026-01-15 | 初始版本 | YanYuCloudCube Team |
```

Git 提交信息应包含版本号和变更说明：

```bash
git commit -m "docs: v1.1.0 对齐 Next.js App Router 实际项目架构"
git commit -m "docs: v1.1.1 修正错误描述"
git commit -m "docs: v2.0.0 重组文档结构"
```

---

## 第二部分：代码规范

### 2.1 代码文件标头格式

所有代码文件必须包含 JSDoc 标头注释：

```typescript
/**
 * file: 文件名.tsx
 * description: 文件描述（一句话概括，不超过 50 字）
 * author: 作者名称
 * version: v1.0.0
 * created: YYYY-MM-DD
 * updated: YYYY-MM-DD
 * status: active
 * tags: [标签1],[标签2],[标签3]
 *
 * brief: 简要说明（不超过 100 字）
 *
 * details: 详细说明（功能、特性、注意事项）
 *
 * dependencies: 依赖列表
 * exports: 导出内容
 * notes: 注意事项
 */
```

### 2.2 代码标头字段定义

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| file | ✅ | 文件名（包含扩展名） | `useI18n.ts` |
| description | ✅ | 一句话概括文件用途 | `国际化 Hook · 支持中文/English 动态切换` |
| author | ✅ | 作者名称 | `YanYuCloudCube Team` |
| version | ✅ | 语义化版本号 | `v1.0.0` |
| created | ✅ | 创建日期 YYYY-MM-DD | `2026-03-05` |
| updated | ✅ | 更新日期 YYYY-MM-DD | `2026-03-05` |
| status | ✅ | 文件状态（同 1.5） | `active` |
| tags | ✅ | 标签列表 2-4 个 | `[hook],[i18n],[locale]` |
| copyright | ❌ | 版权信息 | `YanYuCloudCube Team` |
| license | ❌ | 许可证 | `MIT` |
| brief | ❌ | 简要说明 | `提供国际化功能` |
| details | ❌ | 详细说明（多行） | `支持中英文动态切换` |
| dependencies | ❌ | 依赖列表 | `React, Context API` |
| exports | ❌ | 导出内容 | `useI18n, I18nProvider` |
| notes | ❌ | 注意事项 | `需要在 App 根组件包裹` |

### 2.3 代码标头标签体系

| 类别 | 标签 | 说明 |
|------|------|------|
| **类型** | `[component]` | 组件文件 |
| | `[hook]` | Hook 文件 |
| | `[util]` | 工具函数 |
| | `[type]` | 类型定义 |
| | `[config]` | 配置文件 |
| | `[test]` | 测试文件 |
| | `[store]` | 状态管理 |
| | `[service]` | 服务层 |
| **功能** | `[i18n]` | 国际化 |
| | `[auth]` | 认证 |
| | `[api]` | API 接口 |
| | `[ui]` | UI 组件 |
| | `[data]` | 数据处理 |
| | `[style]` | 样式 |
| | `[theme]` | 主题 |
| **模块** | `[dashboard]` | 仪表板 |
| | `[cp-im]` | CP-IM 模块 |
| | `[learning]` | 学习中心 |
| | `[settings]` | 设置 |
| | `[electron]` | Electron 主进程 |
| | `[ipc]` | 进程间通信 |

### 2.4 TypeScript/JavaScript 文件标头

```typescript
/**
 * file: useI18n.ts
 * description: 国际化 Hook · 支持中文/English 动态切换
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: 2026-02-26
 * updated: 2026-03-05
 * status: active
 * tags: [hook],[i18n],[locale]
 *
 * copyright: YanYuCloudCube Team
 * license: MIT
 *
 * brief: 提供国际化功能，支持中英文动态切换
 *
 * details:
 * - localStorage 持久化语言偏好
 * - React Context 全局共享
 * - 动态切换无需刷新
 * - t() 函数支持嵌套 key 和模板变量
 *
 * dependencies: React, Context API
 * exports: useI18n, I18nProvider, I18nContext
 * notes: 需要在 App 根组件包裹 I18nProvider
 */

import { useState, useCallback, useMemo, createContext, useContext } from "react";
```

### 2.5 CSS/SCSS 文件标头

```css
/**
 * file: index.css
 * description: 全局样式文件 · 包含基础样式、主题变量和重置样式
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: 2026-02-26
 * updated: 2026-03-05
 * status: active
 * tags: [style],[theme],[global]
 *
 * brief: 全局样式定义
 *
 * details:
 * - 基础样式重置
 * - 主题变量定义（深蓝 + 青色赛博朋克主题）
 * - 全局字体设置
 * - 工具类定义
 *
 * dependencies: TailwindCSS, 自定义主题
 * notes: 在 main.tsx 中引入
 */
```

### 2.6 配置文件标头

```typescript
/**
 * file: vite.config.ts
 * description: Vite 配置文件 · 包含构建、插件、别名等配置
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: 2026-02-26
 * updated: 2026-03-05
 * status: active
 * tags: [config],[build],[vite]
 *
 * brief: Vite 构建配置
 *
 * details:
 * - 基础路径配置（./ 用于 Electron 兼容）
 * - 插件配置（React + TailwindCSS）
 * - 路径别名（/* → ./src/*）
 * - 开发服务器配置（端口 3218）
 * - 构建优化（代码分割、压缩）
 *
 * dependencies: Vite, React, TailwindCSS
 * notes: 修改配置后需要重启开发服务器
 */
```

### 2.7 测试文件标头

```typescript
/**
 * file: useI18n.test.ts
 * description: useI18n Hook 单元测试
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: 2026-03-05
 * updated: 2026-03-05
 * status: active
 * tags: [test],[unit],[hook]
 *
 * brief: 测试 useI18n Hook 的功能
 *
 * details:
 * - 测试语言切换功能
 * - 测试翻译函数 t()
 * - 测试嵌套 key 支持
 * - 测试模板变量支持
 *
 * test-target: src/app/hooks/useI18n.ts
 * coverage: 90%+
 * notes: 使用 Vitest + React Testing Library
 */
```

### 2.8 Electron 文件标头

```javascript
/**
 * file: main.js
 * description: Electron 主进程入口文件 · 创建窗口、托盘和 IPC 通信
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: 2026-02-26
 * updated: 2026-03-05
 * status: active
 * tags: [electron],[main-process],[ipc]
 *
 * brief: Electron 主进程配置
 *
 * details:
 * - 创建 BrowserWindow（1400x900，最小 1200x700）
 * - 系统托盘集成
 * - IPC 通信（preload 脚本）
 * - 自动更新（electron-updater）
 * - 安全配置（contextIsolation, nodeIntegration: false）
 *
 * dependencies: Electron, electron-updater
 * notes: 需要配合 preload.js 使用
 */
```

---

## 第三部分：命名规范

### 3.1 项目命名

| 对象 | 规范 | 示例 |
|------|------|------|
| 项目名称 | `yyc3-` 前缀 + kebab-case | `yyc3-platform`, `yyc3-cp-im` |
| 端口分配 | 默认 3200-3500，禁止占用 3000-3199 | `3218` (开发), `3113` (WebSocket) |
| 包名 | `@yyc3/` 作用域 + kebab-case | `@yyc3/ui-components` |

### 3.2 文件命名

| 对象 | 规范 | 示例 |
|------|------|------|
| 组件文件 | PascalCase.tsx | `DataMonitoring.tsx`, `AISuggestionPanel.tsx` |
| Hook 文件 | camelCase.ts | `useI18n.ts`, `useWebSocketData.ts` |
| 工具函数 | camelCase.ts | `formatDate.ts`, `parseConfig.ts` |
| 类型定义 | camelCase.ts | `index.ts`, `apiTypes.ts` |
| 样式文件 | kebab-case.css | `global-styles.css`, `theme-variables.css` |
| 配置文件 | kebab-case | `vite.config.ts`, `tailwind.config.js` |
| 测试文件 | 源文件名 + .test.ts | `useI18n.test.ts`, `Button.test.tsx` |
| 文档文件 | YYC3- + 中文描述 + .md | `YYC3-团队规范-开发标准.md` |

### 3.3 组件命名模式

| 模式 | 示例 | 说明 |
|------|------|------|
| **PascalCase 功能名** | `DataMonitoring` | 页面/面板组件 |
| **XxxPanel** | `AISuggestionPanel`, `ServiceLoopPanel` | 侧面板组件 |
| **XxxPage** | `DesignSystemPage`, `DevGuidePage` | 完整页面 |
| **XxxModal** | `AddModelModal`, `CreateRuleModal` | 弹窗组件 |
| **XxxCard** | `FollowUpCard`, `GlassCard` | 卡片组件 |
| **XxxDrawer** | `FollowUpDrawer` | 抽屉组件 |
| **XxxManager** | `DatabaseManager`, `HostFileManager` | 管理类组件 |
| **XxxEditor** | `CodeEditor`, `EnvConfigEditor` | 编辑器组件 |
| **XxxMonitor** | `SecurityMonitor`, `PerformanceMonitor` | 监控组件 |
| **XxxTable** | `DataEditorTables`, `InlineEditableTable` | 表格组件 |
| **FamilyXxx** | `FamilyChat`, `FamilyHome` | AI Family 前缀 |

### 3.4 Hook 命名模式

| 模式 | 示例 | 用途 |
|------|------|------|
| `useXxxData` | `useWebSocketData` | 数据获取 |
| `useXxxConfig` | `useNetworkConfig` | 配置管理 |
| `useXxxStore` | `useSettingsStore` | Zustand 状态 |
| `useXxxMode` | `useOfflineMode`, `useMobileView` | 模式检测 |

### 3.5 类型命名模式

| 模式 | 示例 | 说明 |
|------|------|------|
| `XxxType` | `NodeStatusType`, `DatabaseType` | 联合类型（有限值集合） |
| `XxxState` | `WebSocketDataState` | 复合状态快照 |
| `XxxResult` | `ConnectionTestResult` | 操作返回值 |
| `XxxConfig` | `NetworkConfig`, `ReportConfig` | 配置数据 |
| `XxxEntry` | `TerminalHistoryEntry` | 列表项 |
| `XxxLevel` | `AlertLevel` | 级别别名 |
| `XxxRecord` | `NodeStatusRecord` | 数据库行映射（snake_case 字段） |
| `XxxData` | `NodeData` | 前端展示（camelCase 字段） |

### 3.6 命名双标准

```typescript
// 前端 UI 层: camelCase（高频渲染优化）
interface NodeData {
  gpu: number;
  mem: number;
  temp: number;
}

// DB 层: snake_case（与 PostgreSQL 列名一致）
interface NodeStatusRecord {
  gpu_util: number;
  mem_util: number;
  temp_celsius: number;
}

// 转换函数: toNodeData(record) → NodeData
```

---

## 第四部分：项目规范

### 4.1 目录结构规范

```
yyc3-{project-name}/
├── app/                              # Next.js App Router 页面层
│   ├── api/                          # API 路由（Route Handlers）
│   │   ├── health/                   # 健康检查端点
│   │   │   └── route.ts
│   │   └── modules/                  # 模块 API
│   │       ├── route.ts              # GET /api/modules
│   │       └── [id]/                 # 模块详情
│   │           ├── route.ts          # GET /api/modules/[id]
│   │           ├── favorite/
│   │           │   └── route.ts
│   │           ├── rate/
│   │           │   └── route.ts
│   │           └── share/
│   │               └── route.ts
│   ├── modules/                      # 模块页面
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── utils.ts
│   ├── error.tsx                     # 全局错误边界
│   ├── globals.css                   # 全局样式
│   ├── layout.tsx                    # 根布局
│   ├── loading.tsx                   # 全局加载状态
│   └── page.tsx                      # 首页
├── components/                       # 组件层
│   ├── ui/                           # shadcn/ui 组件
│   │   ├── {component}.tsx           # 通用 UI 组件
│   │   ├── loading.tsx
│   │   └── use-toast.ts
│   ├── data-dashboard.tsx            # 数据仪表板
│   ├── module-{card,grid,details}.tsx# 模块相关组件
│   ├── theme-provider.tsx            # 主题提供者
│   ├── language-switcher.tsx         # 语言切换
│   └── error-boundary.tsx            # 错误边界
├── contexts/                         # React Contexts
│   ├── language-context.tsx           # 国际化上下文
│   ├── notification-context.tsx       # 通知系统
│   └── sound-context.tsx             # 音效系统
├── hooks/                            # 自定义 Hooks
├── lib/                              # 工具库
│   ├── api-client.ts                 # API 客户端
│   ├── env.ts                        # 环境变量
│   ├── error-handler.ts              # 错误处理
│   ├── error-logger.ts               # 错误日志
│   ├── sound-manager.ts              # 音效管理
│   └── utils.ts                      # 通用工具函数
├── services/                         # 服务层
│   ├── mock-data.ts                  # 模拟数据
│   └── module-service.ts             # 模块服务
├── store/                            # Zustand 状态管理
│   ├── module-store.ts               # 模块状态
│   ├── ui-store.ts                   # UI 状态
│   └── user-store.ts                 # 用户偏好
├── styles/                           # 全局样式
│   └── globals.css
├── types/                            # TypeScript 类型定义
│   └── module.ts
├── docs/                             # 项目文档
├── public/                           # 静态资源
│   ├── yyc3-dist/                    # 全端 Logo 资源
│   └── sounds/                       # 音效资源
├── .gitignore
├── middleware.ts                     # Next.js 中间件
├── next.config.mjs                   # Next.js 配置
├── tailwind.config.ts                # Tailwind CSS 配置
├── postcss.config.mjs                # PostCSS 配置
├── components.json                   # shadcn/ui 配置
├── package.json
├── tsconfig.json
└── README.md
```

### 4.2 技术栈标准

**核心框架**

| 技术 | 用途 | 版本要求 |
|------|------|----------|
| Next.js | React 全栈框架 (App Router) | 15.2+ |
| React | UI 框架 | 19+ |
| TypeScript | 类型安全 | 5+ |
| Tailwind CSS | 工具类样式框架 | 3.4+ |
| pnpm | 包管理器 | 9+ |

**UI 与样式**

| 技术 | 用途 |
|------|------|
| shadcn/ui | 组件库（基于 Radix UI 构建） |
| Radix UI | 无障碍原子化 React 组件 |
| Tailwind CSS | 工具类样式 |
| Framer Motion | 动画库 |
| Lucide React | 图标库 |
| Recharts | 数据可视化图表 |
| class-variance-authority | 组件变体管理 |
| tailwind-merge | Tailwind 类名合并 |
| tailwindcss-animate | Tailwind 动画扩展 |

**状态管理与数据流**

| 技术 | 用途 |
|------|------|
| Zustand | 全局状态管理（含 persist 中间件） |
| React Context | 局部全局状态（语言、音效、通知） |
| React Server Components | 服务端渲染组件 |
| Next.js Route Handlers | API 路由 |

**表单与验证**

| 技术 | 用途 |
|------|------|
| react-hook-form | 表单管理 |
| @hookform/resolvers | 表单校验连接器 |
| Zod | 数据模式验证 |
| Input OTP | OTP 输入组件 |

**国际化**

| 技术 | 用途 |
|------|------|
| 自定义 React Context | 中英文切换（localStorage 持久化） |

**音效系统**

| 技术 | 用途 |
|------|------|
| Web Audio API | 音效生成与播放 |
| HTMLAudioElement | 机械音效预加载与缓存 |
| AudioContext | 音效合成与回退方案 |

**开发工具链**

| 工具 | 用途 |
|------|------|
| TypeScript | 类型检查（strict 模式） |
| ESLint (Next.js 内置) | 代码检查 |
| PostCSS | CSS 后处理器 |
| Autoprefixer | CSS 浏览器前缀 |
| date-fns | 日期处理 |
| embla-carousel-react | 轮播组件 |
| cmdk | 命令菜单 |
| vaul | 抽屉组件 |
| react-resizable-panels | 可调整面板 |
| sonner | Toast 通知 |
| next-themes | 主题切换 |
| immer | 不可变数据操作 |

### 4.3 路由规范

- 使用 **Next.js App Router** 文件系统路由
- 路由路径使用 kebab-case
- 页面组件 (`page.tsx`) 按功能域分组
- 支持动态路由 `[id]` 和嵌套子路由
- API 路由使用 `route.ts`（Route Handlers）
- 布局组件使用 `layout.tsx` 实现共享布局
- 使用 `loading.tsx` 实现 Suspense 加载状态
- 使用 `error.tsx` 实现错误边界

```typescript
// app/modules/[id]/page.tsx — 动态路由页面
export default async function ModulePage({ params }: { params: { id: string } }) {
  const module = await getModuleData(params.id);
  return <ModuleDetail module={module} />;
}

// app/api/modules/route.ts — API Route Handler
export async function GET() {
  const modules = await getAllModules();
  return Response.json(modules);
}
```

### 4.4 数据层规范

**API 配置**

| 端点 | 方法 | 用途 |
|------|------|------|
| `/api/modules` | GET | 获取模块列表 |
| `/api/modules/[id]` | GET | 获取模块详情 |
| `/api/modules/[id]/favorite` | POST | 收藏/取消收藏 |
| `/api/modules/[id]/rate` | POST | 评分 |
| `/api/modules/[id]/share` | POST | 分享 |
| `/api/health` | GET | 健康检查 |

**状态管理架构**

```
Zustand Store (全局持久化状态)
├── module-store    → 模块数据、加载状态、CRUD 操作
├── ui-store        → 侧边栏、移动菜单、活动标签
└── user-store      → 用户偏好（主题、语言、音效）

React Context (跨组件通信)
├── language-context   → 语言切换 (zh/en)
├── sound-context      → 音效系统 (Web Audio API)
└── notification-context → 通知推送管理
```

**数据流模式**

| 场景 | 模式 | 实现 |
|------|------|------|
| 模块列表加载 | 乐观更新 + 回退 | Zustand → API → fallback mock data |
| 收藏/评分 | 乐观更新 + 回滚 | 先更新 UI → API → 失败回滚 |
| 语言切换 | Context 广播 | localStorage 持久化 |
| 音效设置 | Context + localStorage | 缓存 + 回退提示音 |
| 通知推送 | Context 状态 | 定时自动消除

| 机制 | 实现方式 | 应用场景 |
|------|----------|----------|
| Zustand Store | module-store, ui-store, user-store | 全局持久化状态 |
| React Context | language-context, sound-context, notification-context | 跨层级广播通信 |
| Props Drilling | 标准父子组件传参 | 局部 UI 状态 |
| Custom Events | 键盘快捷键 / 面板事件 | 用户交互 |
| localStorage | Zustand persist 中间件 | 客户端状态持久化 |

---

## 第五部分：质量保障

### 5.1 标头规范检查脚本

```typescript
// scripts/check-headers.ts
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const REQUIRED_FIELDS = ['file', 'description', 'author', 'version', 'created', 'updated', 'status', 'tags'];

function checkFile(filePath: string): { valid: boolean; error?: string } {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  if (!lines[0].includes('/**') && !lines[0].includes('---')) {
    return { valid: false, error: 'Missing header' };
  }

  const missingFields = REQUIRED_FIELDS.filter(field => !content.includes(field));
  if (missingFields.length > 0) {
    return { valid: false, error: `Missing fields: ${missingFields.join(', ')}` };
  }

  return { valid: true };
}

function checkDirectory(dir: string): void {
  const files = readdirSync(dir);

  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      checkDirectory(filePath);
      return;
    }

    if (!file.match(/\.(ts|tsx|js|jsx|css|scss|md)$/)) return;

    const result = checkFile(filePath);
    if (result.valid) {
      console.log(`✅ ${filePath}`);
    } else {
      console.log(`❌ ${filePath}: ${result.error}`);
    }
  });
}

// 检查 app/、components/、hooks/、lib/、store/、types/、contexts/、services/
['app', 'components', 'hooks', 'lib', 'store', 'types', 'contexts', 'services'].forEach(dir => {
  const fullPath = join(process.cwd(), dir);
  if (statSync(fullPath).isDirectory()) {
    console.log(`\n检查目录: ${dir}/`);
    checkDirectory(fullPath);
  }
});
```

### 5.2 ESLint 规则集成

```javascript
module.exports = {
  rules: {
    'header/header': [
      'error',
      'block',
      [
        '*',
        {
          pattern: ' file: .+\\n description: .+\\n author: .+\\n version: .+\\n created: .+\\n updated: .+\\n status: .+\\n tags: .+',
          template: `/**
 * file: FILENAME
 * description: DESCRIPTION
 * author: YanYuCloudCube Team
 * version: v1.0.0
 * created: YYYY-MM-DD
 * updated: YYYY-MM-DD
 * status: active
 * tags: [TAG1],[TAG2],[TAG3]
 */`,
        },
      ],
    ],
  },
};
```

### 5.3 Git Hook 集成

```bash
#!/bin/bash
# .git/hooks/pre-commit

FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(ts|tsx|js|jsx|css|scss|md)$')

if [ -z "$FILES" ]; then
  exit 0
fi

node scripts/check-headers.js

if [ $? -ne 0 ]; then
  echo "❌ Header check failed. Please add proper headers to your files."
  exit 1
fi

echo "✅ Header check passed."
exit 0
```

### 5.4 质量检查清单

**文档质量**

- [ ] 所有必填字段都已填写
- [ ] 文档描述清晰准确（不超过 50 字）
- [ ] 版本号符合 SemVer 规范
- [ ] 日期格式正确（YYYY-MM-DD）
- [ ] 状态值符合规范
- [ ] 标签分类合理（2-4 个）
- [ ] 变更记录完整
- [ ] 作者信息准确

**代码质量**

- [ ] 代码文件包含完整 JSDoc 标头
- [ ] 必填字段全部填写
- [ ] 标签按类型→功能→模块顺序排列
- [ ] description 不超过 50 字
- [ ] 依赖列表准确
- [ ] 导出内容完整
- [ ] 注意事项明确

**结构质量**

- [ ] 标题层级清晰（H1-H6）
- [ ] 段落结构合理
- [ ] 代码块语法高亮
- [ ] 表格格式规范
- [ ] 链接有效

**语言质量**

- [ ] 语言统一（中文/英文）
- [ ] 术语一致
- [ ] 语法正确
- [ ] 表达清晰

### 5.5 标头维护规范

**日常维护**

- 每次修改文件时更新 `updated` 字段
- 重大修改时更新 `version` 字段
- 文件状态变化时更新 `status` 字段
- 文件功能变化时更新 `tags` 字段

**定期审查**

- 每月审查标头规范执行情况
- 每季度更新标头规范标准
- 每年总结标头规范执行效果

**批量更新策略**

1. 按模块逐个更新，确保不遗漏
2. 优先更新核心文件（types, hooks, components）
3. 更新后进行代码审查
4. 更新后运行测试

---

## 第六部分：附录

### A. 术语表

| 术语 | 定义 |
|------|------|
| 标头 | 文件开头的注释块或 YAML Front Matter，包含文件元信息 |
| 必填字段 | 必须填写的标头字段 |
| 可选字段 | 可选填写的标头字段 |
| SemVer | 语义化版本号规范（MAJOR.MINOR.PATCH） |
| kebab-case | 短横线命名法，如 `my-component` |
| PascalCase | 大驼峰命名法，如 `MyComponent` |
| camelCase | 小驼峰命名法，如 `myFunction` |
| snake_case | 下划线命名法，如 `my_variable` |

### B. 参考资源

| 资源 | 链接 |
|------|------|
| Markdown 语法规范 | <https://commonmark.org/> |
| 语义化版本号规范 | <https://semver.org/> |
| Dublin Core 元数据标准 | <https://www.dublincore.org/> |
| IEEE 1063 软件用户文档标准 | <https://standards.ieee.org/> |
| ESLint 文档 | <https://eslint.org/docs/latest/> |
| Git Hooks | <https://git-scm.com/book/zh/v2/自定义-Git-Git-钩子> |

### C. 工具推荐

| 类别 | 工具 |
|------|------|
| 编辑器 | VS Code, Typora |
| 语法检查 | markdownlint, ESLint |
| 代码格式化 | Prettier |
| 文档生成 | MkDocs, Docusaurus |
| 版本控制 | Git |
| 包管理 | pnpm |
| 测试 | Vitest, React Testing Library |

---

## 变更历史

| 版本 | 日期 | 变更内容 | 作者 |
|------|------|----------|------|
| v1.1.0 | 2026-06-03 | 对齐 Next.js + shadcn/ui 实际项目架构 | YanYuCloudCube Team |
| v1.0.0 | 2026-03-21 | 初始版本 | YanYuCloudCube Team |

---

<div align="center">

> 「***YanYuCloudCube***」
> 「***<admin@0379.email>***」
> 「***Words Initiate Quadrants, Language Serves as Core for Future***」
> 「***All things converge in cloud pivot; Deep stacks ignite a new era of intelligence***」

</div>
