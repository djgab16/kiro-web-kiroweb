export default function Loading() {
  return (
    <section
      className="w-full px-4 py-12 sm:px-6 lg:px-8"
      aria-label="Loading content"
    >
      {/* Heading skeleton */}
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="h-10 w-3/4 animate-pulse rounded-lg bg-surface sm:h-12" />
        <div className="h-5 w-1/2 animate-pulse rounded bg-surface" />
      </div>

      {/* Paragraph lines skeleton */}
      <div className="mx-auto mt-10 max-w-4xl space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-surface" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-surface" />
        <div className="h-4 w-4/6 animate-pulse rounded bg-surface" />
      </div>

      {/* Card grid skeleton */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-xl bg-surface" />
        ))}
      </div>
    </section>
  );
}
