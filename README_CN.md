# Kai Li — 开发者作品集

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

> Kai Li 的个人作品集网站 — 全栈开发者 & AI Agent 工程师，基于 Next.js 16 + React 19 技术栈构建，支持深色/浅色模式、滚动动画，并展示包含 LangGraph 多 Agent 系统在内的 AI 集成项目。

[🌐 在线预览](https://kaili.dev/) · [English](./README.md)

---

<!-- SCREENSHOT: 录制 5–8 秒 GIF，展示页面滚动（Hero → Skills → Projects）及动画和主题切换效果。保存为 public/demo.gif 后替换本注释为：![Demo](./public/demo.gif) -->
> **截图待补充** — 部署完成后添加。

---

## ✨ 亮点

**Next.js 16 + React 19** — 较早同时采用两者的公开作品集之一，体现对前端生态最新动态的持续关注。

**零依赖滚动动画** — 所有区块在滚动进入视口时触发动画，基于原生 Intersection Observer API，不引入任何第三方动画库。

**AI 项目展示** — 包含 4 个 AI 集成项目：向量搜索博客、LangGraph 多 Agent 任务管理、RAG 知识问答、AI 词汇助手。

## 技术栈

| 层级 | 技术 |
|---|---|
| 框架 | Next.js 16, React 19 |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4, Shadcn/ui |
| 主题 | next-themes（深色/浅色 + 系统检测）|
| 图标 | Lucide React, React Icons |
| 部署 | Vercel |

---

## 功能列表

- **深色 / 浅色模式** — 自动检测系统主题 + 手动切换，偏好保存至 localStorage
- **滚动动画** — 基于 Intersection Observer，零动画库依赖
- **浮动技术卡片** — Hero 区域带错开延迟的 CSS 浮动动画
- **项目展示** — 实时状态标识（上线中 / 即将推出）及外链跳转
- **技能区块** — 按领域分类（后端、前端、数据库、架构、AI & Agent 工程）
- **SEO 就绪** — OpenGraph 标签、站点地图、robots.txt（Next.js App Router）
- **全端响应式** — 适配手机、平板、桌面端

## 快速开始

**前置要求：** Node.js 18+，推荐使用 pnpm

```bash
git clone https://github.com/kaili-lab/dev-portfolio-v1.git
cd dev-portfolio-v1
pnpm install
pnpm dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。

**生产构建：**

```bash
pnpm build
pnpm start
```

## 路线图

- [ ] 补充截图 / 演示 GIF
- [ ] 上线剩余项目（Home Task、Vocab Master、Knowledge Chat）

## 开源协议

[MIT](./LICENSE)

---

GitHub: [@kaili-lab](https://github.com/kaili-lab) · X: [@kaili_dev](https://x.com/kaili_dev)
