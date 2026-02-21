import { GithubIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaNode, FaReact } from "react-icons/fa";
import { SiTypescript, SiLangchain } from "react-icons/si";

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
            {/* 你的照片/头像 */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="/your-photo.jpg"
                alt="Kai Li"
                fill
                className="rounded-3xl object-cover shadow-2xl"
              />

              {/* 浮动卡片 1: React - 左上 */}
              <div
                className="absolute -top-4 -left-4 bg-card p-4 rounded-2xl shadow-lg 
                            border border-border animate-float hover:scale-105 
                            transition-transform duration-300"
              >
                <div className="flex items-center gap-3">
                  <FaReact className="w-8 h-8 text-[#61DAFB]" />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      React
                    </div>
                    <div className="text-xs text-card-foreground/60">
                      Expert
                    </div>
                  </div>
                </div>
              </div>

              {/* 浮动卡片 2: TypeScript - 右上 */}
              <div
                className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg 
                            border border-border animate-float [animation-delay:200ms] 
                            hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-3">
                  <SiTypescript className="w-8 h-8 text-[#3178C6]" />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      TypeScript
                    </div>
                    <div className="text-xs text-card-foreground/60">
                      Advanced
                    </div>
                  </div>
                </div>
              </div>

              {/* 浮动卡片 3: LangChain - 底部中间 */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card p-4
                            rounded-2xl shadow-lg border border-border animate-float
                            [animation-delay:400ms] hover:scale-105 transition-transform
                            duration-300"
              >
                <div className="flex items-center gap-3">
                  <SiLangchain className="w-8 h-8 text-[#1C3C3C]" />
                  <div>
                    <div className="font-semibold text-card-foreground">
                      LangChain
                    </div>
                    <div className="text-xs text-card-foreground/60">
                      AI Agents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
