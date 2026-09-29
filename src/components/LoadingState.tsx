import { LoaderCircle } from "lucide-react";

interface LoadingStateProps {
  label?: string;
}

export default function LoadingState({
  label = "Loading the collection...",
}: LoadingStateProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-24">
      <LoaderCircle
        size={28}
        className="animate-spin"
        style={{ color: "var(--color-primary)" }}
      />
      <span
        className="text-[10px] uppercase tracking-[0.24em]"
        style={{
          color: "var(--color-outline)",
          fontFamily: "var(--font-body)",
        }}
      >
        {label}
      </span>
    </div>
  );
}
