"use client";

import { portfolioData as d, type Locale } from "@/lib/portfolio-data";
import {
  ExternalLink,
  FileText,
  Github,
  Mail,
  Moon,
  Sun,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
    panelBg: "rgba(10, 25, 47, 0.72)",
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
    panelBg: "rgba(250, 249, 246, 0.82)",
  },
} as const;

const languages: Locale[] = ["en", "zh"];

export default function SplitScreenLayout() {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState<Locale>("en");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || theme === "dark";
  const c = isDark ? colors.dark : colors.light;
  const copy = d.copy[language];
  const isZh = language === "zh";

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
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    document
      .querySelectorAll("section[id]")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: copy.nav.about },
    { id: "projects", label: copy.nav.projects },
    { id: "contact", label: copy.nav.contact },
  ];

  return (
    <div
      className="min-h-screen relative transition-colors duration-300"
      style={{ background: c.bg, color: c.body }}
    >
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${c.gradient}, transparent 80%)`,
        }}
      />

      <div className="fixed top-6 right-6 z-20 flex items-center gap-2">
        <div
          role="group"
          aria-label={copy.languageToggleLabel}
          className="flex items-center gap-1 rounded-lg border p-1 backdrop-blur-sm"
          style={{
            borderColor: c.navLine,
            backgroundColor: c.panelBg,
          }}
        >
          {languages.map((nextLanguage) => {
            const isActiveLanguage = language === nextLanguage;

            return (
              <button
                key={nextLanguage}
                type="button"
                onClick={() => setLanguage(nextLanguage)}
                aria-pressed={isActiveLanguage}
                className="min-w-11 rounded-md px-3 py-1.5 text-xs font-bold tracking-[0.2em] transition-colors"
                style={
                  isActiveLanguage
                    ? {
                        backgroundColor: c.heading,
                        color: c.bg,
                      }
                    : {
                        color: c.heading,
                      }
                }
              >
                {nextLanguage.toUpperCase()}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-lg border p-2 opacity-80 hover:opacity-100 transition-opacity backdrop-blur-sm"
          style={{
            color: c.heading,
            borderColor: c.navLine,
            backgroundColor: c.panelBg,
          }}
          aria-label={copy.themeToggleLabel}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="lg:flex lg:gap-12">
          <header className="lg:w-[42%] lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-24 py-16">
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold tracking-tight"
                style={{ color: c.heading }}
              >
                {d.name}
              </h1>
              <h2
                className="mt-3 text-xl font-medium"
                style={{ color: c.heading }}
              >
                {copy.title}
              </h2>
              <p className="mt-4 text-sm" style={{ color: c.body }}>
                {copy.shortIntro}
              </p>

              <nav className="mt-16 hidden lg:block">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`group flex items-center gap-4 text-xs font-bold transition-all duration-300 ${
                          isZh ? "" : "tracking-widest"
                        }`}
                        style={{
                          color: activeSection === item.id ? c.accent : undefined,
                        }}
                      >
                        <span
                          className="h-px transition-all duration-300"
                          style={{
                            width: activeSection === item.id ? "64px" : "32px",
                            backgroundColor:
                              activeSection === item.id ? c.accent : c.navLine,
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
              <Link
                href={d.github}
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: c.heading }}
              >
                <Github size={20} />
              </Link>
              <Link
                href={d.twitter}
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: c.heading }}
              >
                <Twitter size={20} />
              </Link>
              <Link
                href={d.blog}
                target="_blank"
                className="opacity-60 hover:opacity-100 transition-opacity text-sm underline underline-offset-4"
                style={{ color: c.heading }}
              >
                {copy.blogLabel}
              </Link>
            </div>
          </header>

          <main className="lg:w-[58%] lg:py-24 pb-24">
            <section id="about" className="mb-24 scroll-mt-24">
              <h3
                className={`text-sm font-bold mb-8 lg:hidden ${
                  isZh ? "" : "tracking-widest"
                }`}
                style={{ color: c.heading }}
              >
                {copy.nav.about}
              </h3>
              <p className="leading-relaxed">{copy.intro}</p>
              <p className="mt-4 text-sm">
                {d.stack.map((group, i) => (
                  <span key={group.label[language]}>
                    {i > 0 && " · "}
                    <span className="font-medium">
                      {group.label[language]}
                    </span>{" "}
                    {group.items.join(", ")}
                  </span>
                ))}
              </p>
            </section>

            <section id="projects" className="mb-24 scroll-mt-24">
              <h3
                className={`text-sm font-bold mb-8 lg:hidden ${
                  isZh ? "" : "tracking-widest"
                }`}
                style={{ color: c.heading }}
              >
                {copy.nav.projects}
              </h3>
              <div className="space-y-2">
                {d.projects.map((project) => (
                  <div
                    key={project.title}
                    className="group rounded-lg p-5 -mx-5 transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = c.hoverBg;
                      e.currentTarget.style.boxShadow = c.hoverShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h4 className="text-lg font-medium" style={{ color: c.heading }}>
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm shrink-0 ml-4">
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            className="opacity-50 hover:opacity-100 transition-opacity"
                            style={{ color: c.heading }}
                          >
                            <ExternalLink size={14} />
                          </Link>
                        )}
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="opacity-50 hover:opacity-100 transition-opacity"
                          style={{ color: c.heading }}
                        >
                          <Github size={14} />
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-2">
                      {project.description[language]}
                    </p>
                    <p className="text-xs" style={{ color: c.accent }}>
                      {project.tech.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="scroll-mt-24">
              <h3
                className={`text-sm font-bold mb-8 lg:hidden ${
                  isZh ? "" : "tracking-widest"
                }`}
                style={{ color: c.heading }}
              >
                {copy.nav.contact}
              </h3>
              <p className="mb-5 text-sm" style={{ color: c.body }}>
                {copy.contactIntro}
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href={`mailto:${d.email}`}
                  className="inline-flex items-center gap-2 transition-colors w-fit"
                  style={{ color: c.heading }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = c.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = c.heading;
                  }}
                >
                  <Mail size={15} />
                  {d.email}
                </Link>
                <Link
                  href={d.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 transition-colors w-fit"
                  style={{ color: c.heading }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = c.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = c.heading;
                  }}
                >
                  <FileText size={15} />
                  {copy.resumeLabel}
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
