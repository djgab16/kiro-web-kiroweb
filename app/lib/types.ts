/**
 * Shared TypeScript types used across the application.
 */

/** Navigation link used in the navbar and footer. */
export interface NavLink {
  href: string;
  label: string;
}

/**
 * Page component props for Next.js dynamic routes.
 * Use this type for pages that receive URL params.
 *
 * @example
 * ```ts
 * export default async function Page({ params }: PageProps<{ slug: string }>) {
 *   const { slug } = await params;
 *   // ...
 * }
 * ```
 */
export interface PageProps<T extends Record<string, string> = Record<string, string>> {
  params: Promise<T>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}
