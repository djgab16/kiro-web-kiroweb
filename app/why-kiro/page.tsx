import type { Metadata } from "next";
import { WhyKiroContent } from "../components/WhyKiroContent";

export const metadata: Metadata = {
  title: "Why Kiro",
  description:
    "See how Kiro compares to traditional coding, AI chatbots, and other AI-powered IDEs. Discover the spec-driven workflow difference.",
  openGraph: {
    title: "Why Kiro - Compare AI Development Approaches",
    description:
      "See how Kiro compares to traditional coding, AI chatbots, and other AI-powered IDEs.",
  },
};

export default function WhyKiroPage() {
  return <WhyKiroContent />;
}
