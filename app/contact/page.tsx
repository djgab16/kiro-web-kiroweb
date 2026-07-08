import type { Metadata } from "next";
import { ContactContent } from "../components/ContactContent";

export const metadata: Metadata = {
  title: "Contact - Get in Touch with Kiro",
  description:
    "Connect with the Kiro team through GitHub, Discord, Twitter, LinkedIn, YouTube, or send us a message directly.",
  openGraph: {
    title: "Contact - Get in Touch with Kiro",
    description:
      "Connect with the Kiro team through social channels or send a message directly.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
