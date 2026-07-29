import type { Metadata } from "next";
import { HowItWorksContent } from "../components/HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover how Kiro works in seven steps: from initial idea to production deployment. Learn about specification-driven development and automated task planning.",
  openGraph: {
    title: "How It Works - The Kiro Development Lifecycle",
    description:
      "Discover how Kiro works in seven steps: from initial idea to production deployment.",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
