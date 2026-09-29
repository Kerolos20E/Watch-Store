import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationBar() {
  return (
    <div
      className="p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <span
        className="text-xs"
        style={{
          color: "var(--color-outline)",
          fontFamily: "var(--font-body)",
        }}
      >
        Page 1 • 6 timepieces shown
      </span>
      <div className="flex items-center gap-1.5">
        <div
          className="p-2 rounded"
          style={{
            backgroundColor: "var(--color-surface-container)",
            color: "var(--color-outline)",
            opacity: 0.4,
          }}
        >
          <ChevronLeft size={18} />
        </div>
        <span
          className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-on-primary)",
          }}
        >
          1
        </span>
        <div
          className="p-2 rounded"
          style={{
            backgroundColor: "var(--color-surface-container)",
            color: "var(--color-on-surface)",
          }}
        >
          <ChevronRight size={18} />
        </div>
      </div>
    </div>
  );
}
