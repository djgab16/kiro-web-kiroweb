import { createPageMeta } from "../lib/metadata";
import { HowItWorksContent } from "../components/HowItWorksContent";

export const metadata = createPageMeta({
  title: "How It Works",
  description:
    "Discover how Kiro works in seven steps: from initial idea to production deployment. Learn about specification-driven development and automated task planning.",
});

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
