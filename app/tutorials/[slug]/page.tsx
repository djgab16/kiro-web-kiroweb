import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TutorialDetailContent } from "../../components/TutorialDetailContent";
import { tutorialSlugs, tutorialsBySlug } from "../../lib/tutorials";

export function generateStaticParams() {
  return tutorialSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = tutorialsBySlug[slug] || "Tutorial";
  return {
    title: `${title} - Kiro Tutorial`,
    description: `Learn ${title.toLowerCase()} with this step-by-step Kiro tutorial.`,
  };
}

export default async function TutorialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = tutorialsBySlug[slug];

  if (!title) {
    notFound();
  }

  return <TutorialDetailContent title={title} />;
}
