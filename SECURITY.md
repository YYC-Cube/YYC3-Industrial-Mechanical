# 安全政策 (Security Policy)

感谢你帮助维护 **YYC³ Industrial Mechanical** 的安全。我们高度重视本项目及其使用者的信息安全，并遵循 YYC³「五高架构」中的 **高安全** 原则。

---

## 支持范围 (Supported Versions)

本项目当前处于 `1.0.x` 阶段，仅对以下版本提供安全更新：

| 版本 | 支持状态 | 说明 |
|------|----------|------|
| `1.0.x` | ✅ 支持 | 当前主线，接收安全修复 |
| `< 1.0` | ❌ 不支持 | 请升级至最新版本 |

由于本项目为**静态导出**站点（`next build` → `output: 'export'`），部署产物中不含服务端运行时。安全关注点主要集中在：**依赖供应链漏洞**、**构建期注入**、**第三方库风险**。

---

## 报告漏洞 (Reporting a Vulnerability)

> **请勿通过公开 Issue、Discussion 或 PR 披露安全问题。**

请使用以下任一**私密**渠道报告：

1. **推荐**：通过 GitHub 的 [私密漏洞报告](https://github.com/YYC-Cube/YYC3-Industrial-Mechanical/security/advisories/new) 提交 Security Advisory
2. **备选**：发送邮件至 `admin@0379.email`

### 报告内容建议

为便于快速定位与修复，请尽量提供：

- 漏洞类型（如：依赖供应链、XSS、信息泄露等）
- 受影响组件 / 文件 / 依赖包及版本
- 复现步骤或 PoC（最小可复现示例）
- 潜在影响评估
- 可能的修复建议（可选）

---

## 响应流程 (Our Process)

| 阶段 | 目标时限 | 说明 |
|------|----------|------|
| 确认收到 | 3 个工作日内 | 确认报告已收到并开始评估 |
| 初步评估 | 7 个工作日内 | 判定严重程度、影响范围与有效性 |
| 修复与验证 | 依据严重程度安排 | 修复 → 验证 → 发布补丁版本 |
| 公开披露 | 修复发布后 | 经协商后可公开致谢与披露详情 |

我们会在修复发布后，按贡献者意愿在 Security Advisory 或 Release Notes 中致谢。

---

## 自动化安全防线

本项目已建立**持续**的安全监控与闭环修复机制：

| 机制 | 配置位置 | 作用 |
|------|----------|------|
| **Dependabot 告警与自动更新** | [`.github/dependabot.yml`](.github/dependabot.yml) | 每周按生态分组提出依赖升级 PR（Next.js / React / Radix / 工具链） |
| **CI 依赖审计门禁** | [`.github/workflows/ci.yml`](.github/workflows/ci.yml) | 每次 PR / 推送执行 `pnpm audit --audit-level=high`，高危及以上阻断合并 |
| **依赖版本收敛 (overrides)** | [`pnpm-workspace.yaml`](pnpm-workspace.yaml) | 强制传递依赖使用已修复版本，消除深层依赖漏洞 |
| **构建脚本白名单** | [`pnpm-workspace.yaml`](pnpm-workspace.yaml) | 仅允许受信依赖执行安装期脚本，降低供应链投毒风险 |

> 历史记录：依赖漏洞告警曾达 **100 条**（含 6 条 Critical），经升级 Next.js 至 16.x 与依赖收敛后降至 **2 条**（均为上游无补丁的可接受风险，见下）。

---

## 已知例外 (Accepted Risks)

以下依赖告警经评估后**主动接受**，并已在 `pnpm-workspace.yaml` 的 `auditConfig.ignoreGhsas` 中登记，不会阻断 CI：

| 告警 | 依赖包 | 严重度 | 不修复原因 |
|------|--------|--------|------------|
| [`GHSA-vfj7-8cjw-p6xm`](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) | `braces` <= 3.0.3 | High | 上游**暂无补丁版本**（`braces` 最新即 3.0.3），无法在不替换 Tailwind 构建链的前提下修复 |
| [`GHSA-rj75-hqrm-r3gf`](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) | `postcss-selector-parser` < 7.1.6 | Moderate | 仅作为 Tailwind CSS 的**构建期 devDependency**，不进入部署产物；修复需强制大版本升级（7.x）存在构建破坏风险 |

**缓解措施**：二者均属**构建期依赖**，不随静态产物发布至用户浏览器；一旦上游发布补丁或受支持的修复路径出现，将立即移除例外并升级。

---

## 安全最佳实践（贡献者须知）

- 禁止在代码中硬编码密钥、Token、密码；一律使用环境变量
- 提交前确认 `.env*` 文件未被纳入版本控制（见 [`.gitignore`](.gitignore)）
- 新增依赖前评估其维护状态、下载量与安全记录
- 遵循 YYC³ 安全审查要点：参数化查询、输入校验、错误信息不泄露内部细节

---

**© 2025-2026 YanYuCloudCube™. All Rights Reserved.**
