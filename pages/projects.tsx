"use client";
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tech: string[];
  status: "Live" | "Development";
  liveUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "AI Blog Platform",
    description:
      "Blog platform with AI-generated summaries, cover images, and vector-based semantic search.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OpenAI"],
    status: "Live",
    liveUrl: "https://blog.kaili.dev",
    githubUrl: "https://github.com/hi-carry-lee/blog-v1",
  },
  {
    title: "Home Task",
    description:
      "Task management powered by LangGraph multi-agent system. Multiple AI agents collaborate to plan and execute complex operations.",
    tech: ["React", "Hono.js", "PostgreSQL", "LangChain", "LangGraph"],
    status: "Live",
    liveUrl: "https://task.kaili.dev/today",
    githubUrl: "https://github.com/kaili-lab/home-task",
  },
  {
    title: "Vocab Master",
    description:
      "AI-powered vocabulary assistant with contextual examples, quizzes, and personalized learning paths.",
    tech: ["React", "Hono.js", "PostgreSQL", "OpenAI", "Cloudflare Workers"],
    status: "Live",
    liveUrl: "https://vocab.kaili.dev/",
    githubUrl: "https://github.com/kaili-lab/vocab-master-v1",
  },
  {
    title: "Knowledge Chat",
    description:
      "RAG-based knowledge assistant. Upload documents and chat with your knowledge base.",
    tech: ["Next.js", "PostgreSQL", "OpenAI", "RAG", "Drizzle"],
    status: "Development",
    githubUrl: "https://github.com/kaili-lab/chatbot-base-v1",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold text-foreground mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`group border border-border/50 rounded-xl p-6 transition-all duration-500
              hover:border-foreground/20 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* 标题行 */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  project.status === "Live"
                    ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30"
                    : "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* 技术栈 */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 bg-secondary/40 text-foreground/60 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* 链接 */}
            <div className="flex items-center gap-4 text-sm">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground/50 hover:text-foreground transition-colors"
                >
                  <ExternalLink size={14} />
                  Demo
                </Link>
              )}
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-foreground/50 hover:text-foreground transition-colors"
              >
                <Github size={14} />
                Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
