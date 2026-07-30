import { createPageMeta } from "../lib/metadata";
import { CommunityContent } from "../components/CommunityContent";

export const metadata = createPageMeta({
  title: "Community",
  description:
    "Join the Kiro community. Participate in Build Nights, attend workshops, connect on Discord, and collaborate with developers building the future of software.",
});

export default function CommunityPage() {
  return <CommunityContent />;
}
