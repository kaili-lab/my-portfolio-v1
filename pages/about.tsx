"use client";
import { useState, useEffect } from "react";
import { Bot, Code2, Users } from "lucide-react";

export default function AboutMe({ years }: { years: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-4 md:py-16  flex items-center min-h-screen"
    >
      <div className="max-w-6xl py-18 mx-auto px-6 w-full bg-card rounded-2xl border border-border">
        {/* 标题 */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-card-foreground">
            What I Bring to Your Team
          </h2>
          <p className="text-xl text-card-foreground/70 max-w-2xl mx-auto">
            Reliable developer with strong technical skills and communication
          </p>
        </div>

        {/* 3 个核心价值 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 卡片 1: 多面手 */}
          <div
            className={`p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 
                        dark:from-green-950/20 dark:to-blue-950/20
                        border border-green-200 dark:border-green-800
                        transition-all duration-1000 hover:scale-105 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
            style={{ animationDelay: "200ms" }}
          >
            <div
              className="w-12 h-12 bg-green-500 rounded-xl flex items-center
                          justify-center mb-4"
            >
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">
              AI Agent Builder
            </h3>
            <p className="text-card-foreground/70 mb-4">
              Building AI-powered applications with LangChain & LangGraph.
              From RAG pipelines to multi-agent orchestration, I turn LLMs
              into reliable product features.
            </p>
            <div className="text-sm text-card-foreground/60">
              ⚡ Focus:{" "}
              <span className="font-semibold">
                LangGraph · RAG · Multi-Agent Systems
              </span>
            </div>
          </div>

          {/* 卡片 2: 技术栈 */}
          <div
            className={`p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 
                        dark:from-blue-950/20 dark:to-purple-950/20
                        border border-blue-200 dark:border-blue-800
                        transition-all duration-1000 hover:scale-105 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
            style={{ animationDelay: "400ms" }}
          >
            <div
              className="w-12 h-12 bg-blue-500 rounded-xl flex items-center 
                          justify-center mb-4"
            >
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">
              Clean & Maintainable
            </h3>
            <p className="text-card-foreground/70 mb-4">
              Write code with performance, readability, and maintainability in
              mind. Follow best practices and team conventions.
            </p>
            <div className="text-sm text-card-foreground/60 space-y-1">
              <div>
                📦 Frontend:{" "}
                <span className="font-semibold">
                  React · TypeScript · Next.js
                </span>
              </div>
              <div>
                ⚙️ Backend:{" "}
                <span className="font-semibold">
                  Java · Node.js · PostgreSQL
                </span>
              </div>
              <div>
                🤖 AI:{" "}
                <span className="font-semibold">
                  LangChain · LangGraph · OpenAI
                </span>
              </div>
            </div>
          </div>

          {/* 卡片 3: 沟通协作 */}
          <div
            className={`p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 
                        dark:from-purple-950/20 dark:to-pink-950/20
                        border border-purple-200 dark:border-purple-800
                        transition-all duration-1000 hover:scale-105 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
            style={{ animationDelay: "600ms" }}
          >
            <div
              className="w-12 h-12 bg-purple-500 rounded-xl flex items-center 
                          justify-center mb-4"
            >
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">
              Team Player
            </h3>
            <p className="text-card-foreground/70 mb-4">
              Strong communication skills in English. Proactive in updates,
              responsive in discussions, and reliable with deadlines.
              Async-friendly workflow.
            </p>
            <div className="text-sm text-card-foreground/60">
              🌏 Timezone:{" "}
              <span className="font-semibold">UTC+8 · 4+ hrs overlap with EST/PST</span>
            </div>
          </div>
        </div>

        {/* 个人简介 */}
        <div
          className={`mt-12 max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-lg text-card-foreground/70 leading-relaxed">
            Full stack developer with{" "}
            <span className="font-medium text-card-foreground">
              {years}+ years of experience
            </span>{" "}
            in Java and modern web technologies. Now focused on building
            AI-powered applications with LangChain and LangGraph.
            <span className="font-medium text-card-foreground">
              {" "}
              Currently seeking remote opportunities.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
