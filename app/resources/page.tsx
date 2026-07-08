import type { Metadata } from "next";
import { ResourcesContent } from "../components/ResourcesContent";

export const metadata: Metadata = {
  title: "Resources - Kiro Documentation, Videos & Templates",
  description:
    "Curated collection of Kiro resources including official documentation, video tutorials, starter templates, GitHub repositories, and quick reference cheat sheets.",
  openGraph: {
    title: "Resources - Kiro Documentation, Videos & Templates",
    description:
      "Curated collection of Kiro resources including documentation, tutorials, templates, and references.",
  },
};

export default function ResourcesPage() {
  return <ResourcesContent />;
}
