export const portfolioData = {
  name: "Kai Li",
  title: "Full Stack Developer & AI Agent Builder",
  email: "nautilus1876@gmail.com",
  github: "https://github.com/kaili-lab",
  twitter: "https://x.com/kaili_dev",
  blog: "https://blog.kaili.dev",
  resumeUrl: "/kai-li-resume.pdf",
  location: "UTC+8",
  years: new Date().getFullYear() - 2020,

  intro: `Full-stack developer with a strong backend foundation, now building AI-powered products — from RAG pipelines to multi-agent systems that hold up in production, not just in demos.`,

  shortIntro: "Remote-ready · UTC+8",

  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "LangChain",
    "LangGraph",
  ],

  projects: [
    {
      title: "Home Task",
      description:
        "Multi-agent task app — my testbed for LangGraph orchestration in the real world.",
      tech: ["React", "Hono.js", "PostgreSQL", "LangChain", "LangGraph"],
      status: "Live" as const,
      liveUrl: "https://task.kaili.dev/today",
      githubUrl: "https://github.com/kaili-lab/home-task",
    },
    {
      title: "AI Blog Platform",
      description:
        "My blog, rebuilt with AI-generated summaries, cover images, and vector search.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI"],
      status: "Live" as const,
      liveUrl: "https://blog.kaili.dev",
      githubUrl: "https://github.com/hi-carry-lee/blog-v1",
    },
    {
      title: "Vocab Master",
      description:
        "AI vocabulary assistant I built for my own English learning.",
      tech: ["React", "Hono.js", "PostgreSQL", "OpenAI", "Cloudflare Workers"],
      status: "Live" as const,
      liveUrl: "https://vocab.kaili.dev/",
      githubUrl: "https://github.com/kaili-lab/vocab-master-v1",
    },
    {
      title: "Say Right",
      description:
        "Chinese → natural English → flashcards with spaced repetition — the loop mainstream language apps skip.",
      tech: ["React", "TypeScript", "Hono", "Cloudflare Workers", "Claude", "Drizzle"],
      status: "Live" as const,
      liveUrl: "https://say-right.kaili.dev",
      githubUrl: "https://github.com/kaili-lab/say-right",
    },
  ],

  timeline: [
    { period: "2020–2023", label: "Java Backend", detail: "Spring Boot, microservices, enterprise systems" },
    { period: "2023–2024", label: "Full Stack", detail: "React, Next.js, Node.js" },
    { period: "2024–now", label: "AI Agent Builder", detail: "LangChain, LangGraph, RAG" },
  ],
};
