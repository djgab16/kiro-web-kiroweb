import { createPageMeta } from "../lib/metadata";
import { FAQContent } from "../components/FAQContent";
import { faqItems } from "../lib/faq";

export const metadata = createPageMeta({
  title: "FAQ",
  description:
    "Find answers to common questions about Kiro, spec-driven development, supported languages, IDE integration, privacy, and how to get started.",
});

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQContent />
    </>
  );
}
