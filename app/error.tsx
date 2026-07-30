"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center animate-fade-in"
      aria-labelledby="error-heading"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
        <AlertTriangle className="h-10 w-10 text-red-500" aria-hidden="true" />
      </div>
      <h1
        id="error-heading"
        className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl"
      >
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-muted">
        An unexpected error occurred. Please try again or return to the home
        page.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-muted">
          Error ID: {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-border-hover hover:bg-surface"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
