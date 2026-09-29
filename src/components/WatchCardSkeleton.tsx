export default function WatchCardSkeleton() {
  return (
    <div
      className="rounded-lg p-5 animate-pulse"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className="h-4 w-24 rounded"
          style={{ backgroundColor: "var(--color-surface-container-high)" }}
        />
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: "var(--color-surface-container-high)" }}
        />
      </div>

      <div
        className="w-full aspect-square rounded mb-4"
        style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
      />

      <div
        className="h-3 w-20 rounded mb-2"
        style={{ backgroundColor: "var(--color-surface-container-high)" }}
      />
      <div
        className="h-5 w-3/4 rounded mb-2"
        style={{ backgroundColor: "var(--color-surface-container-high)" }}
      />
      <div
        className="h-3 w-2/3 rounded"
        style={{ backgroundColor: "var(--color-surface-container-high)" }}
      />

      <div className="pt-4 mt-4 flex items-center justify-between">
        <div className="space-y-1.5">
          <div
            className="h-3 w-10 rounded"
            style={{ backgroundColor: "var(--color-surface-container-high)" }}
          />
          <div
            className="h-5 w-16 rounded"
            style={{ backgroundColor: "var(--color-surface-container-high)" }}
          />
        </div>
        <div
          className="h-8 w-20 rounded"
          style={{ backgroundColor: "var(--color-surface-container-high)" }}
        />
      </div>
    </div>
  );
}
