import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "No watches found",
  description = "There are no watches available in the collection yet.",
}: EmptyStateProps) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center gap-4 py-20 px-6 rounded-lg"
      style={{
        backgroundColor: "var(--color-surface-container-lowest)",
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-primary) 15%, transparent)",
          color: "var(--color-primary)",
        }}
      >
        <SearchX size={26} />
      </div>

      <div className="space-y-1.5 max-w-sm">
        <h3
          className="text-lg"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-on-surface)",
          }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
