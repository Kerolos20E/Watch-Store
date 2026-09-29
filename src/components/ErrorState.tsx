import { CircleAlert, RotateCw } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry: () => void;
  isRetrying?: boolean;
}

export default function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load the collection. Please check your connection and try again.",
  onRetry,
  isRetrying = false,
}: ErrorStateProps) {
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
            "color-mix(in srgb, var(--color-error) 15%, transparent)",
          color: "var(--color-error)",
        }}
      >
        <CircleAlert size={26} />
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

      <button
        type="button"
        onClick={onRetry}
        disabled={isRetrying}
        className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded text-xs uppercase tracking-[0.18em] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-on-primary)",
          fontFamily: "var(--font-body)",
        }}
      >
        <RotateCw size={14} className={isRetrying ? "animate-spin" : ""} />

        <span>{isRetrying ? "Retrying..." : "Try Again"}</span>
      </button>
    </div>
  );
}
