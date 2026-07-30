import { createPageMeta } from "../lib/metadata";
import { ContactContent } from "../components/ContactContent";

export const metadata = createPageMeta({
  title: "Contact",
  description:
    "Connect with the Kiro team through GitHub, Discord, Twitter, LinkedIn, YouTube, or send us a message directly.",
});

export default function ContactPage() {
  return <ContactContent />;
}
