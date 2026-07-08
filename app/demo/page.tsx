import type { Metadata } from "next";
import { DemoContent } from "../components/DemoContent";

export const metadata: Metadata = {
  title: "Interactive Demo - See Kiro in Action",
  description:
    "Walk through a complete Kiro workflow from idea to deployment. Experience how Kiro generates specifications, plans tasks, writes code, and creates pull requests.",
  openGraph: {
    title: "Interactive Demo - See Kiro in Action",
    description:
      "Walk through a complete Kiro workflow from idea to deployment.",
  },
};

export default function DemoPage() {
  return <DemoContent />;
}
