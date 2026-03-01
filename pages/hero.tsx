import { BrainCircuit, GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiLangchain } from "react-icons/si";
import HeroStatusRotator from "@/components/hero-status-rotator";

function SkillBadge({
  icon,
  title,
  level,
  position,
}: {
  icon: ReactNode;
  title: string;
  level: string;
  position: string;
}) {
  return (
    <div
      className={`absolute ${position} z-20 min-w-[146px] rounded-2xl border border-border/70 bg-card/95 p-4 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:scale-105`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-background/70 p-2 dark:bg-background/20">
          {icon}
        </div>
        <div>
          <div className="text-sm font-bold text-card-foreground">{title}</div>
          <div className="text-[10px] uppercase tracking-wider text-card-foreground/60">
            {level}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ years }: { years: number }) {
  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden mb-4">
      {/* 背景装饰 */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200/30 dark:bg-green-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧：文字内容 */}
          <div className="space-y-6">
            {/* 小标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Available for remote work
              </span>
            </div>

            {/* 主标题 - 更大更粗 */}
            <h1 className="space-y-2">
              <div className="text-6xl md:text-7xl font-bold text-foreground">
                Kai Li
              </div>
              <div className="text-4xl md:text-5xl font-bold text-foreground/70">
                AI Agent Builder
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-primary/80">
                & Full Stack Developer
              </div>
            </h1>

            {/* 一句话介绍 - 精简版 */}
            <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
              Building full-stack web apps and AI-powered agents with
              React, Node.js, and LangGraph.
              <span className="font-medium text-foreground">
                {" "}
                From concept to deployment.
              </span>
            </p>

            {/* 关键数据（可选，如果有的话） */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {years}+
                </div>
                <div className="text-sm text-foreground/60">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-foreground/60">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-foreground/60">
                  Client Satisfaction
                </div>
              </div>
            </div>

            {/* CTA 按钮 - 更突出 */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-foreground text-background rounded-xl font-medium 
                         hover:bg-foreground/90 transition-all hover:scale-105 shadow-lg"
              >
                Get In Touch →
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 border-2 border-foreground rounded-xl font-medium 
                         hover:bg-foreground/5 transition-all"
              >
                View My Work
              </Link>
            </div>

            {/* 社交链接 */}
            <div className="flex gap-4 pt-2">
              <Link
                href="https://github.com/kaili-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <GithubIcon size={24} />
              </Link>
              <Link
                href="https://x.com/kaili_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <TwitterIcon size={24} />
              </Link>
            </div>
          </div>

          {/* 右侧：视觉元素 */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* 用点阵+渐变做“科技画布”，在亮/暗主题下都维持轻量层次感 */}
              <div className="absolute inset-0 rounded-[2.25rem] border border-border/70 bg-gradient-to-br from-card/95 via-background to-emerald-100/40 shadow-2xl dark:from-card/85 dark:via-card/75 dark:to-emerald-900/35" />
              <div className="absolute inset-0 rounded-[2.25rem] [background-image:radial-gradient(circle,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:18px_18px] opacity-60 dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] dark:opacity-40" />

              {/* 连线把三张技能卡和中心中枢绑定在一起，弱化“只是装饰块”的观感 */}
              <svg
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 h-full w-full text-emerald-500/30 dark:text-emerald-300/25"
                aria-hidden="true"
              >
                <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" strokeWidth="0.3" />
                <line x1="50" y1="50" x2="80" y2="20" stroke="currentColor" strokeWidth="0.3" />
                <line x1="50" y1="50" x2="50" y2="84" stroke="currentColor" strokeWidth="0.3" />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-64 w-64 sm:h-72 sm:w-72">
                  <div className="absolute inset-0 rounded-full border border-emerald-500/25 motion-safe:animate-spin [animation-duration:26s]" />
                  <div className="absolute inset-7 rounded-full border border-dashed border-emerald-500/35 motion-safe:animate-spin [animation-direction:reverse] [animation-duration:17s]" />
                  <div className="absolute inset-10 rounded-full bg-emerald-500/12 blur-3xl" />
                  <div className="absolute inset-[28%] rounded-[1.4rem] border border-border/70 bg-background/70 shadow-inner backdrop-blur-md dark:bg-card/70" />

                  {Array.from({ length: 8 }).map((_, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 motion-safe:animate-spin"
                      style={{
                        animationDuration: `${12 + index * 1.8}s`,
                        animationDelay: `${index * 0.25}s`,
                        animationDirection: index % 2 === 0 ? "normal" : "reverse",
                      }}
                    >
                      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.75)]" />
                    </div>
                  ))}

                  <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-emerald-400/40 blur-xl motion-safe:animate-pulse" />
                      <div className="relative rounded-2xl border border-emerald-500/35 bg-card p-4 shadow-lg dark:bg-card/90">
                        <BrainCircuit className="h-10 w-10 text-emerald-500 dark:text-emerald-300" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
                        Neural Hub
                      </span>
                      <HeroStatusRotator />
                    </div>
                  </div>
                </div>
              </div>

              <SkillBadge
                title="React"
                level="Expert"
                position="-top-4 -left-3 animate-float"
                icon={<FaReact className="h-6 w-6 text-[#61DAFB]" />}
              />
              <SkillBadge
                title="TypeScript"
                level="Advanced"
                position="-top-4 -right-3 animate-float [animation-delay:200ms]"
                icon={<SiTypescript className="h-6 w-6 text-[#3178C6]" />}
              />
              <SkillBadge
                title="LangChain"
                level="AI Agents"
                position="-bottom-5 left-1/2 -translate-x-1/2 animate-float [animation-delay:400ms]"
                icon={<SiLangchain className="h-6 w-6 text-[#1C3C3C] dark:text-[#93C5C5]" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
