export const BASE_URL = "https://kirohub.dev";

export type RouteCategory = "Product" | "Community" | "Company";

export interface RouteDefinition {
  href: string;
  label: string;
  category?: RouteCategory;
  includeInNav: boolean;
  includeInSitemap: boolean;
}

export const ROUTES: RouteDefinition[] = [
  { href: "/", label: "Home", includeInNav: true, includeInSitemap: true },
  {
    href: "/about",
    label: "About",
    category: "Company",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/features",
    label: "Features",
    category: "Product",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/why-kiro",
    label: "Why Kiro",
    category: "Company",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/how-it-works",
    label: "How it Works",
    category: "Product",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/demo",
    label: "Demo",
    category: "Product",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/tutorials",
    label: "Tutorials",
    category: "Product",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/community",
    label: "Community",
    category: "Community",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/resources",
    label: "Resources",
    category: "Community",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/faq",
    label: "FAQ",
    category: "Community",
    includeInNav: true,
    includeInSitemap: true,
  },
  {
    href: "/contact",
    label: "Contact",
    category: "Community",
    includeInNav: true,
    includeInSitemap: true,
  },
];

/** Returns route objects for the main navigation bar. */
export function getNavRoutes(): { href: string; label: string }[] {
  return ROUTES.filter((route) => route.includeInNav).map(({ href, label }) => ({
    href,
    label,
  }));
}

/** Returns footer routes grouped by category. */
export function getFooterRoutes(): Record<
  RouteCategory,
  { href: string; label: string }[]
> {
  const grouped: Record<RouteCategory, { href: string; label: string }[]> = {
    Product: [],
    Community: [],
    Company: [],
  };

  for (const route of ROUTES) {
    if (route.category) {
      grouped[route.category].push({ href: route.href, label: route.label });
    }
  }

  return grouped;
}

/** Returns href strings for sitemap generation. */
export function getSitemapRoutes(): string[] {
  return ROUTES.filter((route) => route.includeInSitemap).map(
    (route) => route.href,
  );
}
