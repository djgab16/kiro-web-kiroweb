import type { Metadata } from "next";
import { FeaturesContent } from "../components/FeaturesContent";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Kiro's nine core capabilities: specification-driven development, automated task planning, AI-powered code generation, intelligent testing, PR automation, and more.",
  openGraph: {
    title: "Features - Kiro's Nine Powerful Capabilities",
    description:
      "Explore Kiro's nine core capabilities that transform how you build software.",
  },
};

export default function FeaturesPage() {
  return <FeaturesContent />;
}
