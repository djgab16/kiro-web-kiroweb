import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TutorialDetailContent } from "../../components/TutorialDetailContent";

const tutorials: Record<string, string> = {
  "installing-kiro": "Installing Kiro",
  "your-first-kiro-project": "Your First Kiro Project",
  "writing-specifications": "Writing Specifications",
  "working-with-agents": "Working with Agents",
  "advanced-workflows": "Advanced Workflows",
};

export function generateStaticParams() {
  return Object.keys(tutorials).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = tutorials[slug] || "Tutorial";
  return {
    title,
    description: `Learn ${title.toLowerCase()} with this step-by-step Kiro tutorial.`,
  };
}

export default async function TutorialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = tutorials[slug];

  if (!title) {
    notFound();
  }

  return <TutorialDetailContent title={title} />;
}
