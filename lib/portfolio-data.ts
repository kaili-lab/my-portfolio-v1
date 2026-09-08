export type Locale = "en" | "zh";
type Bilingual = Record<Locale, string>;
export type Project = {
  slug: string;
  title: string;
  category: "tasks" | "writing" | "learning";
  featured?: boolean;
  description: Bilingual;
  workflow: Bilingual;
  features: Record<Locale, string[]>;
  tech: string[];
  status: "Live" | "Development";
  liveUrl?: string;
  githubUrl: string;
  image?: string;
};

export const categories = {
  tasks: { en: "Tasks", zh: "任务管理" },
  writing: { en: "Writing", zh: "写作" },
  learning: { en: "Learning English", zh: "英语学习" },
};

export const portfolioData = {
  name: "Kai Li",
  email: "nautilus1876@gmail.com",
  github: "https://github.com/kaili-lab",
  twitter: "https://x.com/kaili_dev",
  blog: "https://blog.kaili.dev",
  resumeUrl: "/kai-li-resume.pdf",
  location: "UTC+8",
  copy: {
    en: {
      greeting: "Hello, I’m Kai Li",
      intro: "I’m a backend and full-stack developer. I work with Java, Node.js, and Python on the backend, and React on the frontend.",
      background: "I have 6+ years of Java experience and use AI to help read, implement, and test code. This site collects my projects in task management, writing, and English learning.",
      nav: { home: "Home", projects: "Projects", about: "About", blog: "Blog" },
      resume: "Résumé", contact: "Write to me", status: "Open to remote opportunities",
      featured: "Start with these two", allProjects: "All projects", aboutLink: "About me & my work",
      projectsTitle: "Project directory", projectsIntro: "Browse by purpose or technology, or open a project to read more.",
      search: "Search name, purpose, or technology", allCategories: "All purposes", result: "projects",
      empty: "No matching projects", clear: "Clear filters", details: "Read more",
      visit: "Visit website", source: "Source code", back: "All projects", workflow: "How it works",
      stack: "Built with", screenshot: "Public homepage; not the signed-in application",
      aboutTitle: "About me", experience: "Work", present: "Present",
      theme: "Switch color theme", language: "切换到中文", skip: "Skip to content",
      development: "In development",
    },
    zh: {
      greeting: "你好，我是 Kai Li",
      intro: "我做后端，也做全栈开发。后端主要用 Java、Node.js 和 Python，前端用 React。",
      background: "我有六年以上 Java 开发经验，也用 AI 辅助读代码、实现和测试。这里收录了我的个人项目，涉及任务管理、写作和英语学习。",
      nav: { home: "首页", projects: "项目", about: "关于", blog: "博客" },
      resume: "简历", contact: "给我写信", status: "正在寻找远程工作机会",
      featured: "先看看这两个", allProjects: "全部项目", aboutLink: "关于我和工作经历",
      projectsTitle: "项目目录", projectsIntro: "按用途或技术查找，也可以打开项目了解具体功能。",
      search: "搜索名称、用途或技术", allCategories: "所有用途", result: "个项目",
      empty: "没有匹配的项目", clear: "清除筛选", details: "详细介绍",
      visit: "打开网站", source: "源代码", back: "返回项目目录", workflow: "怎么用",
      stack: "技术栈", screenshot: "公开首页截图；不是登录后的功能界面",
      aboutTitle: "关于我", experience: "工作经历", present: "至今",
      theme: "切换明暗主题", language: "Switch to English", skip: "跳转到正文",
      development: "开发中",
    },
  },
  experience: [
    {
      start: "2026.08", end: null,
      company: { en: "Confidential startup", zh: "创业公司" },
      role: { en: "Core Full Stack Engineer · Part-time, Remote", zh: "全栈工程师 · 兼职，远程" },
    },
    {
      start: "2024.04", end: "2026.08",
      company: { en: "HangZhou Wangxin Hengtian Software Co., Ltd.", zh: "杭州网新恒天" },
      role: { en: "Full-stack development", zh: "全栈开发" },
    },
    {
      start: "2020.01", end: "2024.01",
      company: { en: "Hefei Yicun Information Technology Co., Ltd.", zh: "合肥一村信息科技" },
      role: { en: "Backend development", zh: "后端开发" },
    },
  ],
  projects: [
    {
      slug: "home-task", title: "Home Task", category: "tasks", featured: true,
      description: {
        en: "Manage tasks with natural language and voice, with less form filling. Supports personal tasks and group collaboration.",
        zh: "用自然语言和语音管理任务，减少填写表单的操作。除了个人任务，也支持群组协作。",
      },
      workflow: {
        en: "Describe what needs doing and the app structures it into a task. Manage personal and shared tasks in one view.",
        zh: "输入要做的事，系统从描述中整理出任务信息。个人任务和共享任务可以在同一视图里管理。",
      },
      features: {
        en: ["Turn natural-language descriptions into tasks with due dates, time slots, and priorities.", "Manage personal and shared tasks in one view."],
        zh: ["用自然语言描述任务，整理截止时间、时间段和优先级。", "在统一视图中管理个人任务和共享任务。"],
      },
      tech: ["React", "Hono.js", "PostgreSQL", "LangChain"], status: "Live",
      liveUrl: "https://task.kaili.dev", githubUrl: "https://github.com/kaili-lab/home-task",
    },
    {
      slug: "ai-blog", title: "AI Blog Platform", category: "writing",
      description: {
        en: "Publish articles with generated summaries and covers, and find related content through vector search.",
        zh: "写好文章后，自动生成摘要和封面，并通过向量搜索查找相关内容。",
      },
      workflow: {
        en: "Write in Markdown and use AI for summaries and covers. Search retrieves articles by meaning rather than relying only on title keywords.",
        zh: "用 Markdown 写作，AI 辅助处理摘要和封面。搜索时根据内容含义查找文章，不必只依赖标题里的关键词。",
      },
      features: {
        en: ["Write articles in Markdown.", "Generate article summaries and covers.", "Retrieve semantically related articles with vector search."],
        zh: ["用 Markdown 编辑文章。", "自动生成文章摘要与封面。", "通过向量搜索查找语义相关的文章。"],
      },
      tech: ["Next.js", "PostgreSQL", "OpenAI"], status: "Live",
      liveUrl: "https://blog.kaili.dev", githubUrl: "https://github.com/hi-carry-lee/blog-v1",
    },
    {
      slug: "vocab-master", title: "Vocab Master", category: "learning",
      description: {
        en: "Understand unfamiliar words in context, collect them in a vocabulary list, and review with spaced repetition.",
        zh: "阅读英文时结合上下文理解生词，收进词汇本，再通过间隔复习记住。",
      },
      workflow: {
        en: "Choose a vocabulary level, paste English text, and see explanations while reading. Keep words for later review.",
        zh: "选择词汇水平，粘贴英文材料，在阅读中查看生词的解释。需要记住的词可以留到之后复习。",
      },
      features: {
        en: ["Explain unfamiliar words in their reading context.", "Collect vocabulary to learn.", "Reinforce retention with spaced repetition."],
        zh: ["结合文章上下文解释生词。", "收集需要掌握的词汇。", "用间隔复习巩固记忆。"],
      },
      tech: ["React", "Hono.js", "PostgreSQL", "OpenAI", "Cloudflare Workers"], status: "Live",
      liveUrl: "https://vocab.kaili.dev", githubUrl: "https://github.com/kaili-lab/vocab-master-v1",
    },
    {
      slug: "say-right", title: "Say Right", category: "learning", featured: true,
      description: {
        en: "Start with an idea in Chinese, generate natural English, and save it as a card. Edit the wording and practise with spaced repetition.",
        zh: "从自己想说的中文出发，生成自然英文表达，并保存为卡片。可以修改生成的英文，再用间隔复习反复练习。",
      },
      workflow: {
        en: "Record an idea in Chinese, review and edit the generated English, then practise useful expressions with spaced repetition.",
        zh: "记录一句想表达的中文，查看并修改生成的英文，再用间隔复习练习这些真实会用到的表达。",
      },
      features: {
        en: ["Generate English expressions from Chinese ideas.", "Edit the generated text.", "Save expressions as cards and review with spaced repetition."],
        zh: ["根据中文想法生成英文表达。", "支持手动修改生成的内容。", "将表达保存为卡片，用间隔复习加深记忆。"],
      },
      tech: ["React", "Hono.js", "Cloudflare Workers", "OpenAI"], status: "Live",
      liveUrl: "https://say-right.kaili.dev", githubUrl: "https://github.com/kaili-lab/say-right",
      image: "/say-right-homepage.png",
    },
  ] satisfies Project[],
};
