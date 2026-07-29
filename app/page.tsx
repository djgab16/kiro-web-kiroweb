import type { Metadata } from "next";
import { HomeContent } from "./components/HomeContent";

export const metadata: Metadata = {
  title: "AI-Powered Specification-Driven Development",
  description:
    "Transform how you build software with Kiro. From natural language specs to production-ready code, experience the full lifecycle of AI-assisted development.",
  openGraph: {
    title: "Kiro Hub - AI-Powered Specification-Driven Development",
    description:
      "Transform how you build software with Kiro. From natural language specs to production-ready code, experience the full lifecycle of AI-assisted development.",
  },
};

export default function Home() {
  return <HomeContent />;
}
