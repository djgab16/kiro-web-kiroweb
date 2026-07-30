import type { MetadataRoute } from "next";
import { BASE_URL, getSitemapRoutes } from "@/app/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getSitemapRoutes();

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
