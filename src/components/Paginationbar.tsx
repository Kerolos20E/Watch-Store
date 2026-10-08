import { ChevronLeft, ChevronRight } from "lucide-react";
interface PaginationBarProps {
  page: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}
export default function PaginationBar({
  page,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
}: PaginationBarProps) {
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
        Page {page} • {Math.min(pageSize, totalItems - (page - 1) * pageSize)}{" "}
        timepieces shown
      </span>
      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === totalPages}
          className="p-2 rounded"
          style={{
            backgroundColor: "var(--color-surface-container)",
            color: "var(--color-on-surface)",
            opacity: page === 1 ? 0.4 : 1,
          }}
        >
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() => onPageChange(pageNumber)}
              className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
              style={
                page === pageNumber
                  ? {
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-on-primary)",
                    }
                  : {
                      backgroundColor: "var(--color-surface-container)",
                      color: "var(--color-on-surface)",
                    }
              }
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === 1}
          className="p-2 rounded"
          style={{
            backgroundColor: "var(--color-surface-container)",
            color: "var(--color-on-surface)",
            opacity: page === 1 ? 0.4 : 1,
          }}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
