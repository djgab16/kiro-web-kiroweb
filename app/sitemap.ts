import type { MetadataRoute } from "next";

const buildDate = new Date().toISOString().split("T")[0];

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
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
