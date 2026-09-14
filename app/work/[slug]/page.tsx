import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/projects/case-study";
import { getProject, projects } from "@/data/projects";
import { absolute } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const url = absolute(`/work/${project.slug}/`);
  const title = `${project.name} case study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description: project.summary },
    twitter: { card: "summary_large_image", title, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return <CaseStudy project={project} />;
}
