export default function CartItemSkeleton() {
  return (
    <div className="flex items-center gap-3 animate-pulse">
      <div
        className="w-40 h-40 rounded shrink-0"
        style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
      />

      <div className="flex-1 min-w-0 space-y-2">
        <div
          className="h-4 rounded w-3/4"
          style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
        />

        <div className="flex items-center gap-2 mt-1">
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
          />
          <div
            className="w-4 h-3 rounded"
            style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
          />
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        <div
          className="h-5 w-16 rounded"
          style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
        />
        <div
          className="h-4 w-4 rounded"
          style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
        />
      </div>
    </div>
  );
}
