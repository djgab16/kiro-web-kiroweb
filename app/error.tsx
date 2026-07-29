"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // TODO: Integrate a production error reporting service (e.g., Sentry, Datadog)
    // so client-side errors are captured beyond console output.
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-muted">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => unstable_retry()}
        className="mt-8 inline-flex items-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
      >
        Try again
      </button>
    </section>
  );
}
