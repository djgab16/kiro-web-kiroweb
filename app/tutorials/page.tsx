import { createPageMeta } from "../lib/metadata";
import { TutorialsContent } from "../components/TutorialsContent";

export const metadata = createPageMeta({
  title: "Tutorials",
  description:
    "Follow the recommended learning path to master Kiro. From installation to advanced workflows, each tutorial builds on the previous one.",
});

export default function TutorialsPage() {
  return <TutorialsContent />;
}
