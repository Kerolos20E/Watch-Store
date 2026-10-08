import { LoaderCircle } from "lucide-react";

export default function FetchingIndicator() {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em]"
      style={{
        color: "var(--color-on-surface-variant)",
        fontFamily: "var(--font-body)",
      }}
    >
      <LoaderCircle
        size={14}
        className="animate-spin"
      />

      <span>Updating...</span>
    </div>
  );
}