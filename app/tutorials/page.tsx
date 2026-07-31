import { createPageMeta } from "../lib/metadata";
import { TutorialsContent } from "../components/TutorialsContent";
import { tutorials } from "../lib/tutorials";
import { SITE_URL } from "../lib/constants";

export const metadata = createPageMeta({
  title: "Tutorials",
  description:
    "Follow the recommended learning path to master Kiro. From installation to advanced workflows, each tutorial builds on the previous one.",
});

export default function TutorialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kiro Tutorials",
    description:
      "Step-by-step tutorials for learning Kiro, from beginner to advanced.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: tutorials.length,
    itemListElement: tutorials.map((tutorial, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/tutorials/${tutorial.slug}`,
      name: tutorial.title,
      description: tutorial.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TutorialsContent />
    </>
  );
}
