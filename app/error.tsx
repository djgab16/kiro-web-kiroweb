"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center animate-fade-in">
      <h1 className="text-6xl font-bold text-accent sm:text-8xl">Oops</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">
        Something went wrong
      </h2>
      <p className="mt-2 max-w-md text-muted">
        An unexpected error occurred. Please try again or return to the home
        page.
      </p>
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-4 max-w-lg overflow-auto rounded-lg bg-surface p-4 text-left text-sm text-muted">
          {error.message}
        </pre>
      )}
      <button
        onClick={reset}
        className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Try Again
      </button>
      <Link
        href="/"
        className="mt-4 inline-block text-sm font-medium text-accent transition-opacity hover:opacity-90"
      >
        Back to Home
      </Link>
    </section>
  );
}
