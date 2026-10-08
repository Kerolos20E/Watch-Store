import { Minus, Plus, Edit3, Archive, Trash2 } from "lucide-react";

interface CartItemProps {
  tag: string;
  name: string;
  refAndCalibre: string;
  imageUrl: string;
  specs: { label: string; value: string }[];
  quantity: number;
  quantityLabel?: string; // "Allocation" or "Quantity"
  quantityLocked?: boolean; // unique pieces can't be incremented
  noteLabel?: string; // e.g. "Specify Caseback Inscription"
}

export default function Cart({
  tag,
  name,
  refAndCalibre,
  imageUrl,
  specs,
  quantity,
  quantityLabel = "Quantity",
  quantityLocked = false,
  noteLabel = "Add a Note",
}: CartItemProps) {
  return (
    <article
      className="rounded-lg p-6 md:p-8 shadow-xl relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-primary) 5%, transparent)",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
        {/* Thumbnail */}
        <div
          className="md:col-span-4 relative flex items-center justify-center p-4 rounded-md aspect-square"
          style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
        >
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain"
            style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.8))" }}
          />
          <span
            className="absolute top-3 left-3 text-[10px] uppercase px-2 py-0.5 rounded tracking-wider backdrop-blur-sm"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-surface-container-lowest) 70%, transparent)",
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-body)",
            }}
          >
            {tag}
          </span>
        </div>

        {/* Details */}
        <div className="md:col-span-8 flex flex-col justify-between h-full space-y-4">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {quantityLabel === "Allocation"
                    ? "Haute Complication"
                    : "Signature Piece"}
                </span>
                <h2
                  className="text-2xl mt-1"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-on-surface)",
                  }}
                >
                  {name}
                </h2>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    color: "var(--color-outline)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {refAndCalibre}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span
                  className="text-2xl font-medium tracking-tight"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-headline)",
                  }}
                ></span>
                <p
                  className="text-[10px] uppercase tracking-wider"
                  style={{
                    color: "var(--color-outline)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  USD Net
                </p>
              </div>
            </div>

            {/* Spec chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 pt-3 text-sm">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="p-2 rounded"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-surface-container-lowest) 60%, transparent)",
                  }}
                >
                  <span
                    className="block text-[10px] uppercase"
                    style={{
                      color: "var(--color-outline)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className="text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-outline)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {quantityLabel}
              </span>
              <div
                className="flex items-center rounded px-2 py-1 gap-3"
                style={{
                  backgroundColor: "var(--color-surface-container-lowest)",
                }}
              >
                <Minus
                  size={16}
                  style={{
                    color: "var(--color-outline)",
                    opacity: quantityLocked ? 0.3 : 1,
                  }}
                />
                <span
                  className="px-1 text-sm font-medium"
                  style={{
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {quantity}
                </span>
                <Plus
                  size={16}
                  style={{
                    color: "var(--color-outline)",
                    opacity: quantityLocked ? 0.3 : 1,
                  }}
                />
              </div>
              {quantityLocked && (
                <span
                  className="text-[11px] italic"
                  style={{
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Unique piece
                </span>
              )}
            </div>

            <div
              className="flex items-center gap-4 text-[10px] uppercase tracking-wider"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="flex items-center gap-1">
                <Edit3 size={13} />
                {noteLabel}
              </span>
              <span style={{ color: "var(--color-outline)", opacity: 0.4 }}>
                •
              </span>
              <span className="flex items-center gap-1">
                <Archive size={13} />
                Save for Later
              </span>
              <span style={{ color: "var(--color-outline)", opacity: 0.4 }}>
                •
              </span>
              <span
                className="flex items-center gap-1"
                style={{ color: "var(--color-outline)" }}
              >
                <Trash2 size={13} />
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
