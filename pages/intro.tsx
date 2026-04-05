import { GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Java",
  "PostgreSQL",
  "LangChain",
  "LangGraph",
];

export default function Intro({ years }: { years: number }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl">
        {/* 状态标签 */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30 rounded-full">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          Available for remote work
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Kai Li
        </h1>
        <p className="mt-3 text-xl text-foreground/60">
          Full Stack Developer & AI Agent Builder
        </p>

        {/* 简短介绍 */}
        <div className="mt-6 space-y-3 text-foreground/70 leading-relaxed">
          <p>
            {years}+ years building web applications with Java and modern
            JavaScript stack. Now focused on AI-powered products — from RAG
            pipelines to multi-agent systems with LangGraph.
          </p>
          <p>Based in UTC+8, async-friendly, comfortable with English working environments.</p>
        </div>

        {/* 技术栈标签 */}
        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-secondary/50 text-foreground/70 rounded-md border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 社交链接 */}
        <div className="mt-8 flex items-center gap-5">
          <Link
            href="https://github.com/kaili-lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground/50 hover:text-foreground transition-colors"
          >
            <GithubIcon size={22} />
          </Link>
          <Link
            href="https://x.com/kaili_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="text-foreground/50 hover:text-foreground transition-colors"
          >
            <TwitterIcon size={22} />
          </Link>
          <Link
            href="#contact"
            className="text-sm text-foreground/50 hover:text-foreground transition-colors underline underline-offset-4"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
