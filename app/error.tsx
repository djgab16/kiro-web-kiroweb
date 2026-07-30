"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <h1 className="text-4xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
