import type { Metadata } from "next";
import { FAQContent } from "../components/FAQContent";
import { faqItems } from "../lib/faq";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About Kiro",
  description:
    "Find answers to common questions about Kiro, spec-driven development, supported languages, IDE integration, privacy, and how to get started.",
  openGraph: {
    title: "FAQ - Frequently Asked Questions About Kiro",
    description:
      "Find answers to common questions about Kiro, spec-driven development, and getting started.",
  },
};

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
