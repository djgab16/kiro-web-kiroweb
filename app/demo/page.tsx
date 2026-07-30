import { createPageMeta } from "../lib/metadata";
import { DemoContent } from "../components/DemoContent";

export const metadata = createPageMeta({
  title: "Interactive Demo",
  description:
    "Walk through a complete Kiro workflow from idea to deployment. Experience how Kiro generates specifications, plans tasks, writes code, and creates pull requests.",
});

export default function DemoPage() {
  return <DemoContent />;
}
