import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/portfolio-data";
import PortfolioSite from "@/components/portfolio-site";

export function generateStaticParams() {
  return portfolioData.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project", description: project?.description.en };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <PortfolioSite view="detail" project={project} />;
}
