# 贡献指南 (Contributing Guide)

首先，感谢你愿意为 **YYC³ Industrial Mechanical** 贡献力量！🎉

本文档面向所有贡献者，说明本项目的开发环境、代码规范、提交约定与协作流程。请在提交任何改动前通读本文。

---

## 📜 行为准则

参与本项目即表示你同意遵守我们的 [行为准则 (CODE_OF_CONDUCT.md)](CODE_OF_CONDUCT.md)。

---

## 🛠️ 开发环境准备

### 前置要求

| 工具 | 版本要求 |
|------|----------|
| Node.js | **>= 20.9** |
| pnpm | **>= 9**（推荐 12，已通过 `packageManager` 固定为 `pnpm@12.11.2`） |
| Git | 最新稳定版 |

### 本地启动

```bash
# 1. Fork 并克隆你的分支
git clone https://github.com/<your-name>/YYC3-Industrial-Mechanical.git
cd YYC3-Industrial-Mechanical

# 2. 添加上游仓库
git remote add upstream https://github.com/YYC-Cube/YYC3-Industrial-Mechanical.git

# 3. 安装依赖（务必使用 pnpm，勿用 npm/yarn）
pnpm install

# 4. 启动开发服务器（默认 http://localhost:3139）
pnpm dev
```

### 可用脚本

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器（端口 3139） |
| `pnpm build` | 静态导出构建，产物位于 `out/` |
| `pnpm preview` | 本地预览静态产物 |
| `pnpm lint` | ESLint 代码检查 |
| `pnpm typecheck` | TypeScript 类型检查 |

---

## 🌿 分支与工作流

采用 **Fork + Pull Request** 模型，主干分支为 `main`。

```bash
# 从最新 main 创建特性分支
git checkout main && git pull upstream main
git checkout -b feat/your-feature
```

### 分支命名规范

| 前缀 | 用途 | 示例 |
|------|------|------|
| `feat/` | 新功能 | `feat/module-compare` |
| `fix/` | Bug 修复 | `fix/favorite-rollback` |
| `docs/` | 文档更新 | `docs/deploy-guide` |
| `refactor/` | 代码重构 | `refactor/module-store` |
| `perf/` | 性能优化 | `perf/image-lazy-load` |
| `chore/` | 构建/工具链 | `chore/bump-next` |

---

## 📝 提交规范 (Conventional Commits)

提交信息须遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**允许的 type**：

| type | 说明 |
|------|------|
| `feat` | 新功能 |
| `fix` | Bug 修复 |
| `docs` | 文档更新 |
| `style` | 代码风格调整（不影响逻辑） |
| `refactor` | 代码重构（不新增功能、不修 Bug） |
| `perf` | 性能优化 |
| `test` | 测试相关 |
| `chore` | 构建过程或工具链变更 |

**示例**：

```
feat(modules): 新增模块对比视图

fix(store): 修复收藏乐观更新失败时未回滚的问题

docs(security): 补充依赖漏洞例外说明
```

---

## 🎨 代码规范

### 通用约定

- **类型安全**：启用 TypeScript Strict，避免 `any`（如确需使用，须说明理由）
- **命名规范**：组件 `PascalCase`、函数/变量 `camelCase`、文件 `kebab-case`
- **组件粒度**：优先复用 `components/ui/` 下的 shadcn/ui 组件，避免重复造轮子
- **可访问性**：基于 Radix UI 原语构建交互组件，保持键盘可达与 ARIA 语义
- **样式**：统一使用 Tailwind CSS，遵循 shadcn/ui 的 CSS 变量主题约定
- **注释**：仅在逻辑不自明处添加注释；文档标头遵循 YYC³ 团队规范（YAML Front Matter 或 JSDoc）

### 静态导出约束 ⚠️

本项目使用 `output: 'export'`，**不支持**服务端动态能力。贡献时请注意：

- ❌ 不要新增 API Route Handlers（`app/api/**/route.ts`）——静态导出下会构建失败
- ❌ 不要使用依赖服务端的动态函数（如未预渲染的 `cookies()` / `headers()`）
- ✅ 动态路由须通过 `generateStaticParams` 预生成（参考 [`app/modules/[id]/page.tsx`](app/modules/[id]/page.tsx)）
- ✅ 需要客户端交互的逻辑，放在独立的 `"use client"` 组件中

> 若你确实需要服务端能力，请先在 Issue 中讨论，评估迁移部署平台（如 Vercel）的可行性。

---

## ✅ 提交前自检清单

在创建 Pull Request 前，请确保本地全部通过：

```bash
pnpm lint       # 0 errors（warning 可接受）
pnpm typecheck  # 0 errors
pnpm build      # 静态导出成功，out/ 正常生成
```

- [ ] 分支已基于最新 `main` 创建
- [ ] 提交信息符合 Conventional Commits
- [ ] `pnpm lint` / `pnpm typecheck` / `pnpm build` 全部通过
- [ ] 未提交任何密钥、Token 或 `.env*` 文件
- [ ] 未新增违反静态导出约束的服务端代码
- [ ] 如涉及 UI 变更，已附上截图或录屏
- [ ] 关联的 Issue 已在 PR 描述中引用（如 `Closes #123`）

---

## 🔀 Pull Request 流程

1. 推送分支并按 [PR 模板](.github/pull_request_template.md) 填写描述
2. CI 自动执行 **质量门禁**（lint / typecheck / build）与 **依赖安全审计**
3. 维护者进行 Code Review，可能提出修改意见
4. 通过评审且 CI 全绿后，由维护者合并至 `main`
5. 合并后由 [deploy-pages.yml](.github/workflows/deploy-pages.yml) 自动部署至 GitHub Pages

---

## 🐛 反馈问题

- **Bug / 功能建议**：使用对应的 [Issue 模板](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical/issues/new/choose)
- **安全问题**：**请勿**公开披露，遵循 [SECURITY.md](SECURITY.md)

---

**再次感谢你的贡献！** 言启千行代码，语枢万物智能。

**© 2025-2026 YanYuCloudCube™. All Rights Reserved.**
