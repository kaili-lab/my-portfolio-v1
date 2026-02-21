"use client";
import { useEffect, useState } from "react";
import { Code2, Bot, Server, Zap } from "lucide-react";

const Skills = () => {
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

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Backend Development",
      skills: [
        {
          name: "Java, Spring Boot/Cloud",
          description:
            "Built everything from e-commerce platforms to admin dashboards and mobile app APIs. Yeah, I've wrestled with microservices complexity too.",
        },
        {
          name: "Node.js, Express/Nest.js",
          description:
            "When I need something up and running fast, or when the team prefers JavaScript across the stack.",
        },
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Frontend Development",
      skills: [
        {
          name: "React, Next.js",
          description:
            "From internal management systems to my own side projects. Actually enjoy making things responsive and user-friendly.",
        },
        {
          name: "Tailwind CSS, Shadcn/ui",
          description:
            "My go-to combo for building modern UIs quickly. Love how Tailwind keeps things consistent and Shadcn gives me beautiful components out of the box.",
        },
      ],
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI & Agent Engineering",
      skills: [
        {
          name: "LangChain, LangGraph",
          description:
            "Building AI agents and multi-agent systems. Designed a LangGraph-based multi-agent pipeline for complex task orchestration.",
        },
        {
          name: "Prompt Engineering, RAG",
          description:
            "Crafting reliable prompts and retrieval-augmented generation pipelines. Implemented vector search with Pinecone for semantic content discovery.",
        },
      ],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Infrastructure",
      skills: [
        {
          name: "PostgreSQL, Redis",
          description:
            "PostgreSQL is my go-to database, from schema design to query optimization and performance tuning. Redis for caching and session management when speed is critical.",
        },
        {
          name: "System Design, Message Queues",
          description:
            "I think about scalability from day one, not as an afterthought when things break.",
        },
      ],
    },
  ];

  return (
    <div id="skills" className="min-h-screen py-24 ">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-chart-1/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-chart-3/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题部分 */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and experience
            across different domains
          </p>
        </div>

        {/* 技能分类网格 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group transition-all duration-1000 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                {/* 分类标题 */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* 技能列表 */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill"
                      style={{
                        animationDelay: `${
                          categoryIndex * 200 + skillIndex * 100
                        }ms`,
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-chart-2 rounded-full mt-3 flex-shrink-0 group-hover/skill:bg-primary transition-colors duration-300" />
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-foreground mb-2 group-hover/skill:text-primary transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部装饰 */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 text-secondary-foreground rounded-full border border-secondary/30">
            <Code2 className="h-5 w-5" />
            <span className="text-sm font-medium">
              Always Learning, Always Growing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
