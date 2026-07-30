import { createPageMeta } from "../lib/metadata";
import { FeaturesContent } from "../components/FeaturesContent";

export const metadata = createPageMeta({
  title: "Features",
  description:
    "Explore Kiro's nine core capabilities: specification-driven development, automated task planning, AI-powered code generation, intelligent testing, PR automation, and more.",
});

export default function FeaturesPage() {
  return <FeaturesContent />;
}
