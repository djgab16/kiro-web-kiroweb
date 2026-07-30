import Link from "next/link";
import { createPageMeta } from "./lib/metadata";

export const metadata = createPageMeta({
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist or has been moved.",
});

export default function NotFound() {
  return (
    <section
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center animate-fade-in"
      aria-labelledby="not-found-heading"
    >
      <h1 className="text-8xl font-bold text-accent sm:text-9xl">404</h1>
      <h2
        id="not-found-heading"
        className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl"
      >
        Page not found
      </h2>
      <p className="mt-2 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  );
}
