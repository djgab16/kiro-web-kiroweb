import type { Metadata } from "next";
import { SITE_NAME } from "./constants";

/**
 * Creates a standardized Metadata object for a page with pre-populated
 * openGraph and twitter card fields.
 */
export function createPageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title: `${title} - ${SITE_NAME}`,
    description,
    openGraph: {
      title: `${title} - ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${SITE_NAME}`,
      description,
    },
  };
}
