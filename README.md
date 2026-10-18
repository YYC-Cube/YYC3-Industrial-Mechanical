# YYC³ Industrial Mechanical

![YYC³ Industrial Mechanical](public/Family-001.png)

<div align="center">

> **言启千行代码，语枢万物智能** — *Words Initiate Thousands of Lines of Code, Language Pivots the Intelligence of All Things*

## 五高架构 · 五标体系 · 五化转型 · 五维评估

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000?style=flat-square)](https://ui.shadcn.com/)
[![pnpm](https://img.shields.io/badge/pnpm-12-F69220?style=flat-square&logo=pnpm)](https://pnpm.io/)

[![CI](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical/actions/workflows/ci.yml/badge.svg)](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical/actions/workflows/deploy-pages.yml)
[![Website](https://img.shields.io/badge/Website-im.yyc3.top-0EA5E9?style=flat-square&logo=googlechrome&logoColor=white)](https://im.yyc3.top/)

[![License](https://img.shields.io/github/license/YYC-Cube/YYC3-Industrial-Mechanical?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)
[![Conventional Commits](https://img.shields.io/badge/Commits-Conventional-FF6B3C?style=flat-square)](https://www.conventionalcommits.org/)
[![Code Style](https://img.shields.io/badge/Code_Style-ESLint-4B32C3?style=flat-square&logo=eslint)](eslint.config.mjs)
[![SemVer](https://img.shields.io/badge/SemVer-2.0.0-blue?style=flat-square)](https://semver.org/)
[![Stability](https://img.shields.io/badge/Stability-Active-brightgreen?style=flat-square)](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical)

**中文** · [English](README.en.md)

</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [核心特性](#核心特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [部署](#部署)
- [项目结构](#项目结构)
- [文档架构](#文档架构)
- [开发标准](#开发标准)
- [贡献指南](#贡献指南)
- [安全政策](#安全政策)
- [许可证](#许可证)

---

## 🎯 项目简介

**YYC³ Industrial Mechanical** 是一个融合**工业机械精密感**与**智能科技未来感**的创新UI设计项目。本项目以"五高架构"（高可用、高性能、高安全、高扩展、高智能）为核心理念，采用现代Web技术栈构建，提供沉浸式的机械风格交互体验。

### 核心理念

| 维度 | 内涵 |
| ------ | ------ |
| **五高架构** | 高可用 · 高性能 · 高安全 · 高扩展 · 高智能 |
| **五标体系** | 标准化 · 规范化 · 自动化 · 可视化 · 智能化 |
| **五化转型** | 流程化 · 数字化 · 生态化 · 工具化 · 服务化 |
| **五维评估** | 时间维 · 空间维 · 属性维 · 事件维 · 关联维 |

---

## ✨ 核心特性

### 🎨 机械风格UI

- **精密工业美学** — 齿轮动画、机械音效、金属质感配色
- **沉浸式交互** — 基于 Framer Motion 的物理引擎级动效
- **暗色主题** — 深蓝+青色赛博朋克主题，护眼且富有科技感

### 🌐 国际化支持

- **中英文双语** — 基于 React Context 的即时切换
- **localStorage 持久化** — 语言偏好自动保存
- **无需刷新** — 切换语言即时生效

### 🔊 沉浸式音效系统

- **12种机械音效** — 点击、展开、关闭、悬停、成功、错误等
- **Web Audio API** — 自动回退到系统提示音
- **智能缓存** — 预加载+缓存，零延迟播放

### 🧩 模块化架构

- **功能模块系统** — 数字人像、智能对话、微信助手等
- **乐观更新** — 收藏、评分即时反馈，失败自动回滚
- **Zustand 状态管理** — 轻量、高效、持久化

### 🛡️ 企业级质量

- **错误边界** — 全局 + 组件级双重保障
- **类型安全** — TypeScript Strict 模式
- **错误日志** — 结构化日志系统

---

## 🛠️ 技术栈

| 类别 | 技术 | 版本 |
| ------ | ------ | ------ |
| **框架** | [Next.js](https://nextjs.org/) (App Router, 静态导出) | 16.4+ |
| **UI 框架** | [React](https://react.dev/) | 19+ |
| **语言** | [TypeScript](https://www.typescriptlang.org/) | 5+ |
| **样式** | [Tailwind CSS](https://tailwindcss.com/) | 3.4+ |
| **组件库** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | latest |
| **动画** | [Framer Motion](https://www.framer.com/motion/) | latest |
| **图标** | [Lucide](https://lucide.dev/) | ^0.454 |
| **状态管理** | [Zustand](https://github.com/pmndrs/zustand) | latest |
| **图表** | [Recharts](https://recharts.org/) | 2.15 |
| **验证** | [Zod](https://zod.dev/) + react-hook-form | latest |
| **包管理** | [pnpm](https://pnpm.io/) | 12（>= 9） |
| **质量工具** | ESLint (`eslint-config-next`) | 10+ |
| **托管** | GitHub Pages（自定义域名 `im.yyc3.top`） | — |

---

## 🚀 快速开始

### 前置要求

- **Node.js** >= 20.9
- **pnpm** >= 9（推荐 12）

### 安装

```bash
# 克隆仓库
git clone https://github.com/YYC-Cube/YYC3-Industrial-Mechanical.git
cd YYC3-Industrial-Mechanical

# 安装依赖
pnpm install

# 启动开发服务器（默认端口 3139）
pnpm dev
```

浏览器访问 [http://localhost:3139](http://localhost:3139) 查看效果。

### 构建

```bash
pnpm build     # 静态导出构建，产物位于 out/
pnpm preview   # 本地预览静态产物（serve out）
pnpm lint      # ESLint 代码检查
pnpm typecheck # TypeScript 类型检查
```

### 环境变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `BASE_URL` | `https://im.yyc3.top` | 应用基础地址（构建期注入，用于 SEO/OG） |

---

## 🚢 部署

本项目采用**静态导出 + GitHub Pages** 的全自动部署链路：

```
git push origin main
        │
        ▼
GitHub Actions (.github/workflows/deploy-pages.yml)
        │
        ├─ pnpm install --frozen-lockfile
        ├─ pnpm build  →  out/（静态站点）
        └─ upload-pages-artifact → deploy-pages
        │
        ▼
GitHub Pages  →  https://im.yyc3.top/
```

| 项目 | 说明 |
| ------ | ------ |
| **托管平台** | GitHub Pages（Actions 工作流部署，非分支部署） |
| **自定义域名** | `im.yyc3.top`（由 [public/CNAME](public/CNAME) 定义，构建后随 `out/` 一同发布） |
| **Jekyll 处理** | 已通过 [public/.nojekyll](public/.nojekyll) 关闭，确保 `_next/` 目录可正常访问 |
| **部署触发** | 推送到 `main` 分支或手动 `workflow_dispatch` |
| **质量门禁** | [ci.yml](.github/workflows/ci.yml) 在 PR/推送时执行 lint、typecheck、build 与依赖安全审计 |

> **首次启用提示**：仓库 Settings → Pages → Source 需选择 **GitHub Actions**。自定义域名需在 DNS 侧将 `im.yyc3.top` 指向 GitHub Pages（CNAME 记录），并在 Pages 设置中开启 HTTPS。

---

## 📁 项目结构

```
YYC3-Industrial-Mechanical/
├── .github/                     # CI/CD 与仓库协作配置
│   ├── workflows/
│   │   ├── ci.yml               # 质量门禁：lint / typecheck / build / 安全审计
│   │   └── deploy-pages.yml     # 静态导出并部署到 GitHub Pages
│   ├── dependabot.yml           # 依赖自动更新（按生态分组）
│   ├── ISSUE_TEMPLATE/          # Issue 模板
│   └── pull_request_template.md # PR 模板
├── app/                         # Next.js App Router
│   ├── modules/[id]/            # 模块详情页（generateStaticParams 预渲染）
│   │   ├── page.tsx             # 服务端外壳 + 静态参数生成
│   │   ├── module-detail-view.tsx # 详情客户端视图
│   │   └── utils.ts             # 详情页工具函数
│   ├── layout.tsx               # 根布局（SEO / OG 元数据）
│   ├── page.tsx                 # 首页
│   ├── error.tsx                # 全局错误边界
│   ├── loading.tsx              # 加载状态
│   └── globals.css              # 全局样式与主题变量
├── components/                  # UI 组件
│   ├── ui/                      # shadcn/ui 基础组件（51 个）
│   ├── module-*.tsx             # 模块卡片 / 网格 / 详情 / 操作
│   ├── docs-tab.tsx             # 文档展示页签
│   ├── theme-provider.tsx       # 主题提供者
│   └── ...                      # 仪表盘、懒加载、错误边界等
├── contexts/                    # React Contexts
│   ├── language-context.tsx     # 中英文双语切换
│   ├── notification-context.tsx # 通知系统
│   └── sound-context.tsx        # 音效系统
├── hooks/                       # 自定义 Hooks
├── lib/                         # 工具库（API 客户端、日志、环境、音效管理）
├── services/                    # 服务层（数据访问 / Mock 数据）
├── store/                       # Zustand 状态管理
├── styles/                      # 附加样式
├── types/                       # TypeScript 类型定义
├── public/                      # 静态资源（构建后原样复制到 out/）
│   ├── CNAME                    # 自定义域名：im.yyc3.top
│   ├── .nojekyll                # 关闭 GitHub Pages 的 Jekyll 处理
│   ├── yyc3-dist/               # 全端 Logo / favicon / manifest
│   └── Family-001.png           # 品牌主视觉
├── docs/                        # YYC³ 团队规范与验收文档
├── out/                         # 静态导出产物（构建生成，已 gitignore）
├── next.config.mjs              # output: 'export' 静态导出配置
├── eslint.config.mjs            # ESLint 扁平配置（基于 eslint-config-next）
├── pnpm-workspace.yaml          # pnpm 配置：overrides / 构建白名单 / 审计白名单
├── tailwind.config.ts           # Tailwind 主题与插件
└── tsconfig.json                # TypeScript 配置
```

---

## 🗂️ 文档架构

项目文档遵循 YYC³ 团队「五维驱动 · 五高五标五化」规范，集中沉淀于 [`docs/`](docs) 目录：

```
docs/
├── YYC3-团队通用-标准规范/            📐 团队规范基线
│   ├── YYC3-核心机制-五高五标五化五维.md   核心方法论
│   ├── YYC3-团队规范-开发标准.md          编码 / 命名 / 署名规范
│   └── YYC3-团队规范-文档闭环.md          上下文存档与衔接规范
│
└── YYC3-项目闭环-验收系统/            ✅ 全链路闭环验收
    ├── YYC3-现状审核-分析建议.md          现状审计基线
    ├── YYC3-单元框架-审核验收.md          单元框架验收
    ├── YYC3-功能逻辑-验收标准.md          业务逻辑验收
    ├── YYC3-组件测试-验收标准.md          组件测试验收
    ├── YYC3-代码语法-测试核验.md          代码语法核验
    ├── YYC3-测试用例-审核验收.md          测试用例验收
    ├── YYC3-深度审核-性能优化.md          性能与优化审核
    ├── YYC3-深度探索-高级功能.md          高级功能探索
    ├── YYC3-多维分析-安全加固.md          安全加固分析
    ├── YYC3-统一数据平台-架构方案.md      数据平台架构
    ├── YYC3-智能验收-AI赋能.md            AI 赋能验收
    ├── YYC3-数据调取-拓展建议.md          数据拓展建议
    ├── YYC3-文档体系-闭环审核.md          文档体系闭环
    ├── YYC3-全局统一-验收标准.md          全局统一验收
    └── YYC3-闭环验证-验收标准.md          闭环验证标准
```

### 文档体系分层

| 层级 | 目录 | 定位 | 受众 |
| ------ | ------ | ------ | ------ |
| **L1 规范层** | `docs/YYC3-团队通用-标准规范/` | 定义「怎么做」——方法论与强制规范 | 全体开发者 / AI 导师 |
| **L2 验收层** | `docs/YYC3-项目闭环-验收系统/` | 定义「做到没有」——闭环验证与质量门禁 | 审核者 / 质量负责人 |
| **L3 协作层** | [`CONTRIBUTING.md`](CONTRIBUTING.md) · [`SECURITY.md`](SECURITY.md) · [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) | 定义「如何参与」——协作与安全流程 | 贡献者 / 安全团队 |
| **L4 交付层** | [`README.md`](README.md) · [`CHANGELOG.md`](CHANGELOG.md)（如启用） | 定义「对外交付」——门面与变更记录 | 使用者 / 使用者社区 |

> **文档闭环原则**：上下文存档 · 规划衔接 · 总结同步 · 随时可启。任何会话结束后，均可依据文档快速恢复工作上下文。

---

## 📖 开发标准

本项目遵循 YYC³ 团队统一开发标准，详见 [开发标准文档](docs/YYC3-团队通用-标准规范/YYC3-团队规范-开发标准.md)。

### 关键规范

- **文档标头** — 所有文件必须包含 YAML Front Matter 或 JSDoc 标头
- **命名规范** — PascalCase 组件、camelCase 函数、kebab-case 文件
- **版本管理** — 严格遵循 SemVer 2.0.0
- **类型安全** — TypeScript Strict 模式，禁止使用 `any`

---

## 🤝 贡献指南

我们欢迎所有形式的贡献！完整流程、分支策略、代码规范与本地校验要求详见 **[CONTRIBUTING.md](CONTRIBUTING.md)**。

1. **Fork** 本仓库
2. **创建特性分支**：`git checkout -b feat/amazing-feature`
3. **本地校验**：`pnpm lint && pnpm typecheck && pnpm build` 全部通过
4. **提交更改**：遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
5. **推送到分支**：`git push origin feat/amazing-feature`
6. **创建 Pull Request**（CI 质量门禁需通过）

### 提交规范

```
feat:     新功能
fix:      Bug 修复
docs:     文档更新
style:    代码风格调整
refactor: 代码重构
perf:     性能优化
test:     测试相关
chore:    构建/工具链
```

---

## 🔐 安全政策

我们高度重视本项目及其使用者的安全。

- **漏洞报告** — 请勿通过公开 Issue 披露安全问题，遵循 [SECURITY.md](SECURITY.md) 中的私密报告流程
- **依赖安全** — 通过 Dependabot 与 CI 依赖审计（`pnpm audit --audit-level=high`）持续监控并修复依赖漏洞
- **行为准则** — 所有参与者须遵守 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

---

## 📄 许可证

本项目基于 **MIT 许可证** 开源 — 详见 [LICENSE](LICENSE) 文件。

---

<div align="center">

**© 2026 YanYuCloudCube Team** · [言启象限 | 语枢未来]

*万象归元于云枢 · 深栈智启新纪元*

</div>
