import type { Metadata } from "next";
import { AboutContent } from "../components/AboutContent";

export const metadata: Metadata = {
  title: "About Kiro - AI-Powered Development Assistant",
  description:
    "Learn about Kiro, the AI-powered development assistant that brings specification-driven development to every developer. Discover our vision and philosophy.",
  openGraph: {
    title: "About Kiro - AI-Powered Development Assistant",
    description:
      "Learn about Kiro, the AI-powered development assistant that brings specification-driven development to every developer.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
