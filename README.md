# 🧱 Monorepo Starter: Nx + Next.js + Shadcn + Vite UI Libraries

A modern, scalable monorepo boilerplate designed to **save you time** and **streamline development**. This project leverages **Nx** for monorepo management, **Next.js** for full-stack apps, **Tailwind CSS** + **shadcn/ui** for styling, and **Vite-based UI libraries** for blazing-fast component development.

---

## ✨ Features

- **Nx** for modular monorepo structure
- **Next.js** for SSR/SSG-ready web apps
- **Vite-powered UI libraries** under `libs/` for fast, independent development
- **Tailwind CSS** and **shadcn/ui** for modern, customizable UI
- **PNPM** for fast, disk-efficient package management
- **TypeScript**, ESLint, Prettier & more — all preconfigured

---

## 🏗️ Project Structure

```bash
.
├── apps/
│   ├── web/            # Main Next.js app
│   └── ...             # Other apps can be added here
├── libs/
│   ├── ui/        # Vite-powered UI component based on shadcn 
│   └── ...             # Add more libraries as needed
├── nx.json
├── package.json
├── pnpm-workspace.yaml
└── README.md
