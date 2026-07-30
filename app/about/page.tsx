import { createPageMeta } from "../lib/metadata";
import { AboutContent } from "../components/AboutContent";

export const metadata = createPageMeta({
  title: "About Kiro",
  description:
    "Learn about Kiro, the AI-powered development assistant that brings specification-driven development to every developer. Discover our vision and philosophy.",
});

export default function AboutPage() {
  return <AboutContent />;
}
