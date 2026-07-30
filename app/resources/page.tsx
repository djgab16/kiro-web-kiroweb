import { createPageMeta } from "../lib/metadata";
import { ResourcesContent } from "../components/ResourcesContent";

export const metadata = createPageMeta({
  title: "Resources",
  description:
    "Curated collection of Kiro resources including official documentation, video tutorials, starter templates, GitHub repositories, and quick reference cheat sheets.",
});

export default function ResourcesPage() {
  return <ResourcesContent />;
}
