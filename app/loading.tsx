export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-6">
        <div className="h-10 w-3/4 animate-pulse rounded-lg bg-surface-elevated" />
        <div className="h-5 w-full animate-pulse rounded-lg bg-surface-elevated" />
        <div className="h-5 w-5/6 animate-pulse rounded-lg bg-surface-elevated" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="h-32 animate-pulse rounded-xl bg-surface-elevated" />
          <div className="h-32 animate-pulse rounded-xl bg-surface-elevated" />
        </div>
      </div>
    </div>
  );
}
