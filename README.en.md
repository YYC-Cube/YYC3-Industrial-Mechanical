# YYC³ Industrial Mechanical

![YYC³ Industrial Mechanical](public/Family-001.png)

<div align="center">

> **Words Initiate Thousands of Lines of Code, Language Pivots the Intelligence of All Things**

## Five-High Architecture · Five-Standard System · Five Transformation · Five-D Evaluation

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

[中文](README.md) · **English**

</div>

---

## 📋 Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development Standards](#development-standards)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Introduction

**Nexus AI** is an innovative UI design project that blends the **precision of industrial mechanics** with the **futuristic vision of intelligent technology**. Built on the "Five-High Architecture" principles (High Availability, High Performance, High Security, High Scalability, High Intelligence), the project utilizes a modern web technology stack to deliver an immersive mechanical-style interactive experience.

### Core Philosophy

| Dimension | Essence |
|-----------|---------|
| **Five-High Architecture** | Availability · Performance · Security · Scalability · Intelligence |
| **Five-Standard System** | Standardization · Normalization · Automation · Visualization · Intelligence |
| **Five Transformation** | Process · Digital · Ecological · Tool · Service |
| **Five-D Evaluation** | Time · Space · Attribute · Event · Association |

---

## ✨ Key Features

### 🎨 Mechanical-Style UI

- **Precision Industrial Aesthetics** — Gear animations, mechanical sound effects, metallic color schemes
- **Immersive Interactions** — Physics-engine-grade animations with Framer Motion
- **Dark Theme** — Cyberpunk-style deep blue + cyan, eye-friendly and futuristic

### 🌐 Internationalization

- **Bilingual Support** — Chinese/English switching via React Context
- **localStorage Persistence** — Language preference auto-saved
- **Instant Switch** — No page refresh needed

### 🔊 Immersive Sound System

- **12 Mechanical Sounds** — Click, expand, close, hover, success, error, and more
- **Web Audio API** — Auto fallback to system beeps
- **Smart Caching** — Preload + cache for zero-latency playback

### 🧩 Modular Architecture

- **Feature Module System** — Digital Avatar, Smart Chat, WeChat Assistant, etc.
- **Optimistic Updates** — Instant feedback with auto-rollback on failure
- **Zustand State Management** — Lightweight, efficient, persistent

### 🛡️ Enterprise Quality

- **Error Boundaries** — Global + component-level protection
- **Type Safety** — TypeScript Strict mode
- **Error Logging** — Structured logging system

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | 15.2+ |
| **UI Framework** | [React](https://react.dev/) | 19+ |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | 5+ |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 3.4+ |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) | latest |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | latest |
| **Icons** | [Lucide](https://lucide.dev/) | ^0.454 |
| **State Mgmt** | [Zustand](https://github.com/pmndrs/zustand) | latest |
| **Charts** | [Recharts](https://recharts.org/) | 2.15 |
| **Validation** | [Zod](https://zod.dev/) + react-hook-form | latest |
| **Package Mgr** | [pnpm](https://pnpm.io/) | 9+ |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.18
- **pnpm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/yyc3-industrial-mechanical.git
cd yyc3-industrial-mechanical

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build     # Production build
pnpm start     # Start production server
pnpm lint      # Lint check
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | `http://localhost:3000` | Application base URL |

---

## 📁 Project Structure

```
yyc3-industrial-mechanical/
├── app/                    # Next.js App Router
│   ├── api/                # API Route Handlers
│   ├── modules/            # Module detail pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Global error boundary
│   └── loading.tsx         # Loading state
├── components/             # UI components
│   ├── ui/                 # shadcn/ui components
│   ├── module-*.tsx        # Module-related components
│   └── theme-provider.tsx  # Theme provider
├── contexts/               # React Contexts
│   ├── language-context.tsx
│   ├── notification-context.tsx
│   └── sound-context.tsx
├── lib/                    # Utilities
├── services/               # Service layer
├── store/                  # Zustand state management
├── types/                  # TypeScript types
├── public/                 # Static assets
│   ├── yyc3-dist/          # Cross-platform logos
│   └── sounds/             # Sound effects
└── docs/                   # Team standards docs
```

---

## 📖 Development Standards

This project follows the YYC³ Team Unified Development Standards. See the [full specification](docs/YYC3-团队通用-标准规范/YYC3-团队规范-开发标准.md) (Chinese) for details.

### Key Standards

- **Document Headers** — All files must include YAML Front Matter or JSDoc headers
- **Naming Conventions** — PascalCase for components, camelCase for functions, kebab-case for files
- **Version Management** — Strict SemVer 2.0.0 compliance
- **Type Safety** — TypeScript Strict mode, no `any` allowed

---

## 🤝 Contributing

We welcome all forms of contribution! Please follow these steps:

1. **Fork** this repository
2. **Create a feature branch**: `git checkout -b feat/amazing-feature`
3. **Commit your changes**: Follow [Conventional Commits](https://www.conventionalcommits.org/) specification
4. **Push to the branch**: `git push origin feat/amazing-feature`
5. **Create a Pull Request**

### Commit Convention

```
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Code style
refactor: Code refactoring
perf:     Performance improvement
test:     Testing
chore:    Build/tooling
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**© 2026 YanYuCloudCube Team** · [Words Initiate Quadrants, Language Serves as Core for Future]

*All things converge in cloud pivot; Deep stacks ignite a new era of intelligence*

</div>
