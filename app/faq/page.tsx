import type { Metadata } from "next";
import { FAQContent } from "../components/FAQContent";

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
  return <FAQContent />;
}
