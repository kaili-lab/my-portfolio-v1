# Kai Li — Developer Portfolio

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

> Personal portfolio of Kai Li, Full Stack Developer & AI Agent Builder — built on Next.js 16 + React 19, featuring dark/light mode, scroll animations, and a showcase of AI-integrated projects including a LangGraph multi-agent system.

[🌐 Live Site](https://kaili.dev/) · [中文文档](./README_CN.md)

---

<!-- SCREENSHOT: Record a 5–8s GIF showing the page scroll (Hero → Skills → Projects) with animations and theme toggle. Save to public/demo.gif and replace this comment with: ![Demo](./public/demo.gif) -->
> **Screenshot pending** — will be added after final deployment.

---

## ✨ Highlights

**Next.js 16 + React 19** — Among the earliest public portfolios to adopt both simultaneously, demonstrating a commitment to staying current with the ecosystem.

**Zero-dependency scroll animations** — Every section animates in on scroll via native Intersection Observer APIs, with no animation library.

**AI-project showcase** — Features 4 AI-integrated projects: a vector search blog, a LangGraph multi-agent task manager, a RAG knowledge chatbot, and an AI vocabulary assistant.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16, React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, Shadcn/ui |
| Theme | next-themes (dark/light + system detection) |
| Icons | Lucide React, React Icons |
| Deployment | Vercel |

---

## Features

- **Dark / Light mode** — automatic system preference detection + manual toggle, persisted in localStorage
- **Scroll animations** — Intersection Observer-based, zero JS animation library dependency
- **Floating tech cards** — hero section badges with staggered CSS float animation
- **Projects grid** — live status indicators (Live / Coming Soon) with external links
- **Skills section** — categorized by domain (Backend, Frontend, Database, Architecture, AI & Agent Engineering)
- **SEO ready** — OpenGraph tags, sitemap, and robots.txt via Next.js App Router
- **Fully responsive** — mobile, tablet, and desktop breakpoints

## Getting Started

**Prerequisites:** Node.js 18+, pnpm (recommended)

```bash
git clone https://github.com/kaili-lab/dev-portfolio-v1.git
cd dev-portfolio-v1
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
pnpm build
pnpm start
```

## Roadmap

- [ ] Add screenshot / demo GIF to README
- [ ] Deploy remaining projects (Home Task, Vocab Master, Knowledge Chat)

## License

[MIT](./LICENSE)

---

GitHub: [@kaili-lab](https://github.com/kaili-lab) · X: [@kaili_dev](https://x.com/kaili_dev)
