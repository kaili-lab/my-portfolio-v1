import type { MetadataRoute } from "next";
import { portfolioData } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourproject.vercel.app";
  const now = new Date();

  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    ...portfolioData.projects.map(({ slug }) => ({ path: `/projects/${slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${site}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
