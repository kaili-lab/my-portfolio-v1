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
        "拥有 6 年以上后端与全栈开发经验，熟悉金融系统、AI 应用和 AI 辅助开发，能够独立完成从需求到上线的完整交付。",
      nav: {
        about: "关于",
        projects: "项目",
        contact: "联系",
      },
      contactIntro: "目前开放远程工作机会，欢迎联系",
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
        en: "AI-powered task workflow with voice interaction and language-driven task capture.",
        zh: "用语音和自然语言记录、整理并推进日常任务的 AI 工作流",
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
        zh: "个人博客平台，支持 AI 摘要、自动生成封面与语义搜索",
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
        zh: "结合上下文生成练习的 AI 词汇工具，帮助用户持续复习并巩固记忆",
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
        zh: "记录日常中文想法，转换成自然英文表达，再通过间隔复习逐步掌握",
      },
      tech: ["React", "Hono.js", "Cloudflare Workers", "OpenAI"],
      status: "Live" as const,
      liveUrl: "https://say-right.kaili.dev",
      githubUrl: "https://github.com/kaili-lab/say-right",
    },
  ] satisfies Project[],
};
