import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TutorialDetailContent } from "../../components/TutorialDetailContent";
import { createPageMeta } from "../../lib/metadata";
import { tutorials, tutorialSlugs, tutorialsBySlug } from "../../lib/tutorials";

export function generateStaticParams() {
  return tutorialSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = tutorials.find((t) => t.slug === slug);
  const title = tutorial?.title ?? "Tutorial";
  const description =
    tutorial?.description ??
    `Learn ${title.toLowerCase()} with this step-by-step Kiro tutorial.`;

  return {
    ...createPageMeta({ title, description }),
    robots: { index: true, follow: true },
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
