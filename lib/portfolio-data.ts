export type Locale = "en" | "zh";

type SectionLabels = {
  about: string;
  projects: string;
  contact: string;
};

type PortfolioCopy = {
  title: string;
  shortIntro: string;
  intro: string;
  nav: SectionLabels;
  contactIntro: string;
  resumeLabel: string;
  blogLabel: string;
  themeToggleLabel: string;
  languageToggleLabel: string;
};

type StackGroup = {
  label: Record<Locale, string>;
  items: string[];
};

type Project = {
  title: string;
  description: Record<Locale, string>;
  tech: string[];
  status: "Live" | "Development";
  liveUrl?: string;
  githubUrl: string;
};

export const portfolioData = {
  name: "Kai Li",
  email: "nautilus1876@gmail.com",
  github: "https://github.com/kaili-lab",
  twitter: "https://x.com/kaili_dev",
  blog: "https://blog.kaili.dev",
  resumeUrl: "/kai-li-resume.pdf",
  location: "UTC+8",
  years: new Date().getFullYear() - 2020,

  copy: {
    en: {
      title: "Full Stack Developer & AI Agent Builder",
      shortIntro: "Open to remote roles · UTC+8",
      intro:
        "6+ years of backend and full-stack experience, now building AI products. Can ship complete applications independently.",
      nav: {
        about: "ABOUT",
        projects: "PROJECTS",
        contact: "CONTACT",
      },
      contactIntro: "Currently seeking remote work opportunities.",
      resumeLabel: "Resume",
      blogLabel: "Blog",
      themeToggleLabel: "Toggle theme",
      languageToggleLabel: "Switch language",
    } satisfies PortfolioCopy,
    zh: {
      title: "全栈开发 · AI 应用方向",
      shortIntro: "坐标 UTC+8 · 优先远程",
      intro:
        "6年+的后端全栈经验, 熟悉 AI 应用开发和AI编程工具, 可以从零独立开发完整应用",
      nav: {
        about: "关于",
        projects: "项目",
        contact: "联系",
      },
      contactIntro: "在看远程方向的工作机会。",
      resumeLabel: "简历",
      blogLabel: "博客",
      themeToggleLabel: "切换主题",
      languageToggleLabel: "切换语言",
    } satisfies PortfolioCopy,
  } satisfies Record<Locale, PortfolioCopy>,

  stack: [
    { label: { en: "Backend", zh: "后端" }, items: ["Node.js", "Java"] },
    { label: { en: "Frontend", zh: "前端" }, items: ["React"] },
  ] satisfies StackGroup[],

  projects: [
    {
      title: "Home Task",
      description: {
        en: "Smart task system with multi-agent orchestration and voice interaction.",
        zh: "智能化任务系统，支持多 Agent 任务管理和语音交互。",
      },
      tech: ["React", "Hono.js", "PostgreSQL", "LangChain"],
      status: "Live" as const,
      liveUrl: "https://task.kaili.dev",
      githubUrl: "https://github.com/kaili-lab/home-task",
    },
    {
      title: "AI Blog Platform",
      description: {
        en: "Personal blog with AI summaries, auto-generated covers, and vector search.",
        zh: "个人博客，支持 AI 摘要、自动封面和向量搜索。",
      },
      tech: ["Next.js", "PostgreSQL", "OpenAI"],
      status: "Live" as const,
      liveUrl: "https://blog.kaili.dev",
      githubUrl: "https://github.com/hi-carry-lee/blog-v1",
    },
    {
      title: "Vocab Master",
      description: {
        en: "Context-based AI vocabulary tool focused on review and long-term retention.",
        zh: "基于上下文的 AI 词汇助手，专注于复习和长期记忆。",
      },
      tech: ["React", "Hono.js", "PostgreSQL", "OpenAI", "Cloudflare Workers"],
      status: "Live" as const,
      liveUrl: "https://vocab.kaili.dev",
      githubUrl: "https://github.com/kaili-lab/vocab-master-v1",
    },
    {
      title: "Say Right",
      description: {
        en: "Record ideas in Chinese, convert to natural English, reinforce with spaced repetition.",
        zh: "随时随地记录中文想法，转成自然的英文表达，再用间隔复习巩固下来。",
      },
      tech: ["React", "Hono.js", "Cloudflare Workers", "OpenAI"],
      status: "Live" as const,
      liveUrl: "https://say-right.kaili.dev",
      githubUrl: "https://github.com/kaili-lab/say-right",
    },
  ] satisfies Project[],
};
