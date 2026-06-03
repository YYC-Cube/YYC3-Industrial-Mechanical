# YYC³ Industrial Mechanical

![YYC³ Industrial Mechanical](public/Family-001.png)

<div align="center">

> **言启千行代码，语枢万物智能** — *Words Initiate Thousands of Lines of Code, Language Pivots the Intelligence of All Things*

## 五高架构 · 五标体系 · 五化转型 · 五维评估

[![Next.js](https://img.shields.io/badge/Next.js-15.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000?style=flat-square)](https://ui.shadcn.com/)
[![pnpm](https://img.shields.io/badge/pnpm-9-F69220?style=flat-square&logo=pnpm)](https://pnpm.io/)

[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)](http://makeapullrequest.com)
[![Conventional Commits](https://img.shields.io/badge/Commits-Conventional-FF6B3C?style=flat-square)](https://www.conventionalcommits.org/)
[![Code Style](https://img.shields.io/badge/Code_Style-Prettier-FF69B4?style=flat-square)](https://prettier.io/)
[![SemVer](https://img.shields.io/badge/SemVer-2.0.0-blue?style=flat-square)](https://semver.org/)
[![Stability](https://img.shields.io/badge/Stability-Active-brightgreen?style=flat-square)](https://github.com/YanYuCloudCube/YYC3-Industrial-Mechanical)

**中文** · [English](README.en.md)

</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [核心特性](#核心特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开发标准](#开发标准)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 🎯 项目简介

**YYC³ Industrial Mechanical** 是一个融合**工业机械精密感**与**智能科技未来感**的创新UI设计项目。本项目以"五高架构"（高可用、高性能、高安全、高扩展、高智能）为核心理念，采用现代Web技术栈构建，提供沉浸式的机械风格交互体验。

### 核心理念

| 维度 | 内涵 |
|------|------|
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
|------|------|------|
| **框架** | [Next.js](https://nextjs.org/) (App Router) | 15.2+ |
| **UI 框架** | [React](https://react.dev/) | 19+ |
| **语言** | [TypeScript](https://www.typescriptlang.org/) | 5+ |
| **样式** | [Tailwind CSS](https://tailwindcss.com/) | 3.4+ |
| **组件库** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | latest |
| **动画** | [Framer Motion](https://www.framer.com/motion/) | latest |
| **图标** | [Lucide](https://lucide.dev/) | ^0.454 |
| **状态管理** | [Zustand](https://github.com/pmndrs/zustand) | latest |
| **图表** | [Recharts](https://recharts.org/) | 2.15 |
| **验证** | [Zod](https://zod.dev/) + react-hook-form | latest |
| **包管理** | [pnpm](https://pnpm.io/) | 9+ |

---

## 🚀 快速开始

### 前置要求

- **Node.js** >= 18.18
- **pnpm** >= 9

### 安装

```bash
# 克隆仓库
git clone https://github.com/your-org/yyc3-industrial-mechanical.git
cd yyc3-industrial-mechanical

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建

```bash
pnpm build     # 生产构建
pnpm start     # 启动生产服务器
pnpm lint      # 代码检查
```

### 环境变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `BASE_URL` | `http://localhost:3000` | 应用基础地址 |

---

## 📁 项目结构

```
yyc3-industrial-mechanical/
├── app/                    # Next.js App Router
│   ├── api/                # API Route Handlers
│   ├── modules/            # 模块详情页
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── error.tsx           # 全局错误边界
│   └── loading.tsx         # 加载状态
├── components/             # UI 组件
│   ├── ui/                 # shadcn/ui 组件
│   ├── module-*.tsx        # 模块相关组件
│   └── theme-provider.tsx  # 主题提供者
├── contexts/               # React Contexts
│   ├── language-context.tsx
│   ├── notification-context.tsx
│   └── sound-context.tsx
├── lib/                    # 工具库
├── services/               # 服务层
├── store/                  # Zustand 状态管理
├── types/                  # TypeScript 类型
├── public/                 # 静态资源
│   ├── yyc3-dist/          # 全端 Logo
│   └── sounds/             # 音效文件
└── docs/                   # 团队规范文档
```

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

我们欢迎所有形式的贡献！请遵循以下步骤：

1. **Fork** 本仓库
2. **创建特性分支**：`git checkout -b feat/amazing-feature`
3. **提交更改**：遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
4. **推送到分支**：`git push origin feat/amazing-feature`
5. **创建 Pull Request**

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

## 📄 许可证

本项目基于 **MIT 许可证** 开源 — 详见 [LICENSE](LICENSE) 文件。

---

<div align="center">

**© 2026 YanYuCloudCube Team** · [言启象限 | 语枢未来]

*万象归元于云枢 · 深栈智启新纪元*

</div>
