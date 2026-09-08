"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail, Moon, Sun } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { portfolioData as d, categories, type Project } from "@/lib/portfolio-data";

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={14} aria-hidden="true" /></a>;
}

function ContactLinks() {
  const { locale } = useLocale();
  const c = d.copy[locale];
  return <div className="actions">
    <a href={d.resumeUrl} download><Download size={14} aria-hidden="true" />{c.resume}</a>
    <a href={`mailto:${d.email}`}><Mail size={14} aria-hidden="true" />{c.contact}</a>
  </div>;
}

function ProjectSummary({ project }: { project: Project }) {
  const { locale } = useLocale();
  const c = d.copy[locale];
  return <article className="project-summary">
    <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
    <p className="eyebrow">{categories[project.category][locale]}</p>
    <p>{project.description[locale]}</p>
    <div className="actions">
      <Link href={`/projects/${project.slug}`}>{c.details}<ArrowRight size={14} aria-hidden="true" /></Link>
      {project.liveUrl && <ExternalLink href={project.liveUrl}>{c.visit}</ExternalLink>}
      {project.status === "Development" && <span className="muted">{c.development}</span>}
    </div>
  </article>;
}

export default function PortfolioSite({ view = "home", project }: {
  view?: "home" | "projects" | "about" | "detail";
  project?: Project;
}) {
  const { locale, toggleLocale } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const c = d.copy[locale];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const visible = d.projects.filter((item) =>
    (category === "all" || category === item.category) &&
    [item.title, item.description.en, item.description.zh, ...item.tech].join(" ").toLowerCase().includes(query.trim().toLowerCase())
  );

  return <div className="site-wrap">
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="mast">
      <Link href="/" className="brand">{d.name}</Link>
      <nav aria-label={locale === "zh" ? "主导航" : "Main navigation"}>
        <Link href="/" aria-current={view === "home" ? "page" : undefined}>{c.nav.home}</Link>
        <Link href="/projects" aria-current={view === "projects" || view === "detail" ? "page" : undefined}>{c.nav.projects}</Link>
        <Link href="/about" aria-current={view === "about" ? "page" : undefined}>{c.nav.about}</Link>
        <ExternalLink href={d.blog}>{c.nav.blog}</ExternalLink>
      </nav>
      <div className="settings">
        <button type="button" onClick={toggleLocale} aria-label={c.language} title={c.language}>{locale === "en" ? "中" : "EN"}</button>
        <button type="button" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label={c.theme} title={c.theme}>
          <Sun className="sun" size={16} aria-hidden="true" /><Moon className="moon" size={16} aria-hidden="true" />
        </button>
      </div>
    </header>

    <main id="main">
      {view === "home" && <>
        <section className="introduction">
          <h1>{c.greeting}</h1>
          <p>{c.intro}</p><p>{c.background}</p>
          <ContactLinks />
          <p className="status">{c.status} · {d.location}</p>
        </section>
        <section className="selected-work" aria-labelledby="featured-heading">
          <div className="section-heading">
            <h2 id="featured-heading">{c.featured}</h2>
            <Link href="/projects">{c.allProjects} ({d.projects.length})<ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
          {d.projects.filter((item) => "featured" in item && item.featured).slice(0, 2).map((item) => <ProjectSummary key={item.slug} project={item} />)}
        </section>
        <div className="more-links"><ExternalLink href={d.blog}>{c.nav.blog}</ExternalLink><span aria-hidden="true">/</span><Link href="/about">{c.aboutLink}</Link></div>
      </>}

      {view === "projects" && <section>
        <h1>{c.projectsTitle}</h1><p className="muted">{c.projectsIntro}</p>
        <div className="searchbar">
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={c.search} aria-label={c.search} />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label={c.allCategories}>
            <option value="all">{c.allCategories}</option>
            {Object.entries(categories).map(([key, label]) => <option key={key} value={key}>{label[locale]}</option>)}
          </select>
        </div>
        <p className="eyebrow" role="status">{visible.length} {c.result}</p>
        {visible.map((item) => <ProjectSummary key={item.slug} project={item} />)}
        {visible.length === 0 && <div className="empty"><p>{c.empty}</p><button type="button" className="text-button" onClick={() => { setQuery(""); setCategory("all"); }}>{c.clear}</button></div>}
      </section>}

      {view === "about" && <article>
        <h1>{c.aboutTitle}</h1>
        <p className="about-intro">{c.intro}</p><p>{c.background}</p>
        <p className="status">{c.status} · {d.location}</p><ContactLinks />
        <section className="experience" aria-labelledby="work-heading">
          <h2 id="work-heading">{c.experience}</h2>
          {d.experience.map((job) => <div className="job" key={job.start}>
            <span className="job-date">{job.start}–{job.end ?? c.present}</span>
            <div><h3>{job.company[locale]}</h3><p>{job.role[locale]}</p></div>
          </div>)}
        </section>
        <a className="email-address" href={`mailto:${d.email}`}>{d.email}</a>
      </article>}

      {view === "detail" && project && <article className="project-detail">
        <Link className="back-link" href="/projects"><ArrowLeft size={14} aria-hidden="true" />{c.back}</Link>
        <p className="eyebrow">{categories[project.category][locale]}</p>
        <h1>{project.title}</h1><p className="about-intro">{project.description[locale]}</p>
        <div className="actions">
          {project.liveUrl && <ExternalLink href={project.liveUrl}>{c.visit}</ExternalLink>}
          <ExternalLink href={project.githubUrl}>{c.source}</ExternalLink>
        </div>
        <section><h2>{c.workflow}</h2><p>{project.workflow[locale]}</p><ul>{project.features[locale].map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
        <section><h2>{c.stack}</h2><p className="stack">{project.tech.join(" · ")}</p></section>
        {project.image && <figure><Image src={project.image} alt={`${project.title} — ${c.screenshot}`} width={1280} height={900} sizes="(max-width: 760px) calc(100vw - 44px), 704px" /><figcaption>{c.screenshot}</figcaption></figure>}
      </article>}
    </main>
    <footer><span>{d.name} · {d.location}</span><div className="actions"><ExternalLink href={d.github}>GitHub</ExternalLink><ExternalLink href={d.twitter}>X</ExternalLink><a href={`mailto:${d.email}`}>{locale === "zh" ? "邮件联系" : "Email me"}</a></div></footer>
  </div>;
}
