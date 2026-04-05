"use client";

import { portfolioData as d } from "@/lib/portfolio-data";
import { Github, Twitter, ExternalLink, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EditorialLayout() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#faf9f6", color: "#374151" }}
    >
      {/* Header */}
      <header
        className="max-w-2xl mx-auto px-6 py-10 flex justify-between items-baseline"
        style={{ borderBottom: "1px solid #e5e2db" }}
      >
        <span className="text-lg font-semibold" style={{ color: "#111827" }}>
          {d.name}
        </span>
        <nav className="flex gap-6 text-sm" style={{ color: "#6b7280" }}>
          <a href="#work" className="hover:text-neutral-900 transition-colors">
            Work
          </a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">
            Contact
          </a>
          <Link
            href={d.blog}
            target="_blank"
            className="hover:text-neutral-900 transition-colors"
          >
            Blog
          </Link>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6">
        {/* Intro */}
        <section className="py-16 md:py-24">
          <p
            className="text-sm uppercase tracking-widest mb-6"
            style={{ color: "#9ca3af" }}
          >
            {d.title}
          </p>
          <h1
            className="text-3xl md:text-[2.75rem] leading-tight md:leading-[1.2] font-serif font-normal"
            style={{ color: "#111827" }}
          >
            {d.intro}
          </h1>

          <div
            className="mt-10 flex items-center gap-6 text-sm"
            style={{ color: "#6b7280" }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              Available for remote work
            </span>
            <span>·</span>
            <span>{d.location}</span>
          </div>

          {/* 时间线 */}
          <div className="mt-12 flex gap-8 text-sm" style={{ color: "#6b7280" }}>
            {d.timeline.map((t, i) => (
              <div key={t.period}>
                <p className="font-medium" style={{ color: "#111827" }}>
                  {t.label}
                </p>
                <p className="mt-0.5">{t.period}</p>
                {i < d.timeline.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="mt-2 hidden md:block"
                    style={{ color: "#d1d5db" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* 技术栈 */}
          <div className="mt-8 flex flex-wrap gap-2">
            {d.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm rounded-full"
                style={{
                  color: "#4b5563",
                  backgroundColor: "#f3f1ed",
                  border: "1px solid #e5e2db",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* 社交 */}
          <div className="mt-8 flex gap-4">
            <Link
              href={d.github}
              target="_blank"
              className="transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Github size={18} />
            </Link>
            <Link
              href={d.twitter}
              target="_blank"
              className="transition-colors"
              style={{ color: "#9ca3af" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              <Twitter size={18} />
            </Link>
          </div>
        </section>

        {/* Divider */}
        <hr style={{ borderColor: "#e5e2db" }} />

        {/* Projects */}
        <section id="work" className="py-16 scroll-mt-20">
          <h2
            className="text-sm uppercase tracking-widest mb-10"
            style={{ color: "#9ca3af" }}
          >
            Selected Work
          </h2>
          <div className="space-y-12">
            {d.projects.map((p) => (
              <article key={p.title} className="group">
                <div className="flex items-baseline justify-between mb-2">
                  <h3
                    className="text-xl font-serif"
                    style={{ color: "#111827" }}
                  >
                    {p.title}
                  </h3>
                  <div className="flex gap-3 text-sm" style={{ color: "#9ca3af" }}>
                    {p.liveUrl && (
                      <Link
                        href={p.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors"
                      >
                        <ExternalLink size={13} />
                        Demo
                      </Link>
                    )}
                    <Link
                      href={p.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </Link>
                  </div>
                </div>
                <p className="leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs"
                      style={{ color: "#9ca3af" }}
                    >
                      {t}
                      {t !== p.tech[p.tech.length - 1] && " ·"}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr style={{ borderColor: "#e5e2db" }} />

        {/* Contact */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2
            className="text-sm uppercase tracking-widest mb-6"
            style={{ color: "#9ca3af" }}
          >
            Contact
          </h2>
          <p className="leading-relaxed mb-6">
            Currently seeking remote opportunities. Drop me a line if you
            think we&apos;d be a good fit.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <Link
              href={`mailto:${d.email}`}
              className="inline-flex items-center gap-2 transition-colors"
              style={{ color: "#4b5563" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              <Mail size={15} />
              {d.email}
            </Link>
            <Link
              href={d.resumeUrl}
              download
              className="inline-flex items-center gap-2 underline underline-offset-4 transition-colors"
              style={{ color: "#4b5563", textDecorationColor: "#d1d5db" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              Download Resume
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="max-w-2xl mx-auto px-6 py-8 text-xs"
        style={{ color: "#9ca3af", borderTop: "1px solid #e5e2db" }}
      >
        © {new Date().getFullYear()} {d.name}
      </footer>
    </div>
  );
}
