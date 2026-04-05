"use client";

import { portfolioData as d } from "@/lib/portfolio-data";
import {
  Github,
  Twitter,
  ExternalLink,
  Mail,
  MapPin,
  FileText,
  Rss,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

function Card({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm ${
        hover
          ? "transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-amber-500/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function BentoGridLayout() {
  return (
    <div
      className="min-h-screen py-8 md:py-16 px-4"
      style={{ background: "#111113", color: "#a1a1aa" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 大卡片：Intro */}
          <Card className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Available for remote work
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight"
                style={{ color: "#fafafa" }}
              >
                {d.name}
              </h1>
              <p
                className="mt-2 text-lg"
                style={{ color: "#d4d4d8" }}
              >
                {d.title}
              </p>
              <p className="mt-5 leading-relaxed max-w-lg">{d.intro}</p>
            </div>
            <div className="flex gap-4 mt-8">
              <Link
                href={d.github}
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href={d.twitter}
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href={`mailto:${d.email}`}
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </Card>

          {/* 小卡片：Location */}
          <Card className="flex flex-col justify-between">
            <MapPin size={18} className="text-amber-400" />
            <div className="mt-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Location
              </p>
              <p className="text-lg font-medium" style={{ color: "#fafafa" }}>
                {d.location}
              </p>
              <p className="text-sm mt-1">Async-friendly, 4+ hrs overlap with EST/PST</p>
            </div>
          </Card>

          {/* 小卡片：Tech */}
          <Card>
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {d.techStack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/[0.06] border border-white/[0.08]"
                  style={{ color: "#d4d4d8" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          {/* 时间线卡片 */}
          <Card className="md:col-span-1">
            <p className="text-xs text-zinc-500 uppercase tracking-wider mb-4">
              Journey
            </p>
            <div className="space-y-3">
              {d.timeline.map((t, i) => (
                <div key={t.period} className="flex gap-3 items-start">
                  <div className="flex flex-col items-center mt-1.5">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor:
                          i === d.timeline.length - 1
                            ? "#f59e0b"
                            : "#3f3f46",
                      }}
                    />
                    {i < d.timeline.length - 1 && (
                      <div className="w-px h-6 bg-zinc-800 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#fafafa" }}>
                      {t.label}
                    </p>
                    <p className="text-xs">{t.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* 项目卡片们 */}
          {d.projects.map((p) => (
            <Card key={p.title} className="md:col-span-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-base" style={{ color: "#fafafa" }}>
                    {p.title}
                  </h3>
                  {p.liveUrl && (
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      className="text-zinc-500 hover:text-amber-400 transition-colors shrink-0"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded bg-white/[0.05] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4 text-sm">
                {p.liveUrl && (
                  <Link
                    href={p.liveUrl}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-zinc-500 hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Demo
                  </Link>
                )}
                <Link
                  href={p.githubUrl}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-zinc-500 hover:text-amber-400 transition-colors"
                >
                  <Github size={13} />
                  Code
                </Link>
              </div>
            </Card>
          ))}

          {/* Blog 卡片 */}
          <Card className="md:col-span-1">
            <Link
              href={d.blog}
              target="_blank"
              className="flex items-start justify-between group"
            >
              <div>
                <Rss size={18} className="text-amber-400 mb-3" />
                <p className="font-medium" style={{ color: "#fafafa" }}>
                  Blog
                </p>
                <p className="text-sm mt-1">Writing about AI agents, full-stack dev, and things I learn along the way.</p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-zinc-600 group-hover:text-amber-400 transition-colors shrink-0 mt-1"
              />
            </Link>
          </Card>

          {/* Contact 卡片 */}
          <Card className="md:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="font-medium" style={{ color: "#fafafa" }}>
                  Let&apos;s work together
                </p>
                <p className="text-sm mt-1">
                  Currently seeking remote opportunities.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`mailto:${d.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
                >
                  <Mail size={14} />
                  Email
                </Link>
                <Link
                  href={d.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-colors"
                  style={{ color: "#d4d4d8" }}
                >
                  <FileText size={14} />
                  Resume
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-600 mt-12">
          © {new Date().getFullYear()} {d.name}
        </p>
      </div>
    </div>
  );
}
