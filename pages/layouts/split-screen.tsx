"use client";

import { portfolioData as d } from "@/lib/portfolio-data";
import { Github, Twitter, ExternalLink, Mail, FileText, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";

const colors = {
  dark: {
    bg: "#0a192f",
    body: "#8892b0",
    heading: "#ccd6f6",
    accent: "#64ffda",
    accentBg: "rgba(100, 255, 218, 0.1)",
    hoverBg: "rgba(255, 255, 255, 0.03)",
    hoverShadow: "inset 0 1px 0 0 rgba(148,163,184,0.1)",
    gradient: "rgba(29, 78, 216, 0.07)",
    navLine: "#8892b0",
  },
  light: {
    bg: "#faf9f6",
    body: "#64748b",
    heading: "#1e293b",
    accent: "#0d9488",
    accentBg: "rgba(13, 148, 136, 0.08)",
    hoverBg: "rgba(0, 0, 0, 0.025)",
    hoverShadow: "inset 0 1px 0 0 rgba(0,0,0,0.06)",
    gradient: "rgba(13, 148, 136, 0.04)",
    navLine: "#94a3b8",
  },
};

export default function SplitScreenLayout() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || theme === "dark";
  const c = isDark ? colors.dark : colors.light;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen relative transition-colors duration-300" style={{ background: c.bg, color: c.body }}>
      {/* 鼠标跟随光晕 */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${c.gradient}, transparent 80%)`,
        }}
      />

      {/* 主题切换 */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="fixed top-6 right-6 z-20 p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity"
        style={{ color: c.heading }}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="lg:flex lg:gap-12">
          {/* 左栏 */}
          <header className="lg:w-[42%] lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-24 py-16">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: c.heading }}>
                {d.name}
              </h1>
              <h2 className="mt-3 text-lg font-medium" style={{ color: c.heading }}>
                {d.title}
              </h2>
              <p className="mt-4 text-sm" style={{ color: c.body }}>{d.shortIntro}</p>

              <nav className="mt-16 hidden lg:block">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center gap-4 text-xs font-bold tracking-widest transition-all duration-300"
                        style={{ color: activeSection === item.id ? c.accent : undefined }}
                      >
                        <span
                          className="h-px transition-all duration-300"
                          style={{
                            width: activeSection === item.id ? "64px" : "32px",
                            backgroundColor: activeSection === item.id ? c.accent : c.navLine,
                          }}
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex gap-5 mt-8 lg:mt-0">
              <Link href={d.github} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: c.heading }}>
                <Github size={20} />
              </Link>
              <Link href={d.twitter} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity" style={{ color: c.heading }}>
                <Twitter size={20} />
              </Link>
              <Link href={d.blog} target="_blank" className="opacity-60 hover:opacity-100 transition-opacity text-sm underline underline-offset-4" style={{ color: c.heading }}>
                Blog
              </Link>
            </div>
          </header>

          {/* 右栏 */}
          <main className="lg:w-[58%] lg:py-24 pb-24">
            {/* About */}
            <section id="about" className="mb-24 scroll-mt-24">
              <h3 className="text-sm font-bold tracking-widest mb-8 lg:hidden" style={{ color: c.heading }}>ABOUT</h3>
              <p className="leading-relaxed">{d.intro}</p>

            </section>

            {/* Projects */}
            <section id="projects" className="mb-24 scroll-mt-24">
              <h3 className="text-sm font-bold tracking-widest mb-8 lg:hidden" style={{ color: c.heading }}>PROJECTS</h3>
              <div className="space-y-2">
                {d.projects.map((p) => (
                  <div
                    key={p.title}
                    className="group rounded-lg p-5 -mx-5 transition-all duration-300"
                    style={{ ["--hover-bg" as string]: c.hoverBg }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = c.hoverBg;
                      e.currentTarget.style.boxShadow = c.hoverShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* 标题行：名字 + 链接 */}
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h4 className="font-medium" style={{ color: c.heading }}>{p.title}</h4>
                      <div className="flex items-center gap-3 text-sm shrink-0 ml-4">
                        {p.liveUrl && (
                          <Link href={p.liveUrl} target="_blank" className="opacity-50 hover:opacity-100 transition-opacity" style={{ color: c.heading }}>
                            <ExternalLink size={14} />
                          </Link>
                        )}
                        <Link href={p.githubUrl} target="_blank" className="opacity-50 hover:opacity-100 transition-opacity" style={{ color: c.heading }}>
                          <Github size={14} />
                        </Link>
                      </div>
                    </div>
                    {/* 描述 */}
                    <p className="text-sm leading-relaxed mb-2">{p.description}</p>
                    {/* 技术栈：纯文本 */}
                    <p className="text-xs" style={{ color: c.accent }}>
                      {p.tech.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <h3 className="text-sm font-bold tracking-widest mb-8 lg:hidden" style={{ color: c.heading }}>CONTACT</h3>
              <p className="mb-5 text-sm" style={{ color: c.body }}>Currently seeking remote work.</p>
              <div className="flex flex-col gap-3">
                <Link
                  href={`mailto:${d.email}`}
                  className="inline-flex items-center gap-2 transition-colors w-fit"
                  style={{ color: c.heading }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = c.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = c.heading)}
                >
                  <Mail size={15} />
                  {d.email}
                </Link>
                <Link
                  href={d.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 transition-colors w-fit"
                  style={{ color: c.heading }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = c.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = c.heading)}
                >
                  <FileText size={15} />
                  Resume
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
