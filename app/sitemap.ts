import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const staticRoutes = [
    "/",
    "/about",
    "/features",
    "/why-kiro",
    "/how-it-works",
    "/demo",
    "/tutorials",
    "/community",
    "/resources",
    "/faq",
    "/contact",
  ];

  const tutorialSlugs = [
    "installing-kiro",
    "your-first-kiro-project",
    "writing-specifications",
    "working-with-agents",
    "advanced-workflows",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const tutorialEntries: MetadataRoute.Sitemap = tutorialSlugs.map((slug) => ({
    url: `${baseUrl}/tutorials/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...tutorialEntries];
}
