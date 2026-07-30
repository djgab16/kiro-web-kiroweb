import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kirohub.dev";
  const lastModified = new Date();

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
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
