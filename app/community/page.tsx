import type { Metadata } from "next";
import { CommunityContent } from "../components/CommunityContent";

export const metadata: Metadata = {
  title: "Community - Connect with Kiro Developers",
  description:
    "Join the Kiro community. Participate in Build Nights, attend workshops, connect on Discord, and collaborate with developers building the future of software.",
  openGraph: {
    title: "Community - Connect with Kiro Developers",
    description:
      "Join the Kiro community. Participate in Build Nights, attend workshops, and connect with developers.",
  },
};

export default function CommunityPage() {
  return <CommunityContent />;
}
