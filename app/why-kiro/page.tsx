import { createPageMeta } from "../lib/metadata";
import { WhyKiroContent } from "../components/WhyKiroContent";

export const metadata = createPageMeta({
  title: "Why Kiro",
  description:
    "See how Kiro compares to traditional coding, AI chatbots, and other AI-powered IDEs. Discover the spec-driven workflow difference.",
});

export default function WhyKiroPage() {
  return <WhyKiroContent />;
}
