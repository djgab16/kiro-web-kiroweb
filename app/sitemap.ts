import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kirohub.dev";

  const routes = [
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2025-01-01",
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
