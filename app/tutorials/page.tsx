import type { Metadata } from "next";
import { TutorialsContent } from "../components/TutorialsContent";

export const metadata: Metadata = {
  title: "Tutorials - Learn Kiro Step by Step",
  description:
    "Follow the recommended learning path to master Kiro. From installation to advanced workflows, each tutorial builds on the previous one.",
  openGraph: {
    title: "Tutorials - Learn Kiro Step by Step",
    description:
      "Follow the recommended learning path to master Kiro. From installation to advanced workflows.",
  },
};

export default function TutorialsPage() {
  return <TutorialsContent />;
}
