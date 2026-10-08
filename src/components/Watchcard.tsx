import { ArrowRight } from "lucide-react";
import type { Watch } from "../types/watch";

export default function WatchCard({
  id,
  crystal,
  dial,
  name,
  caseMaterial,
  movement,
  priceUSD,
  imageUrl,
}: Watch) {
  return (
    <article
      id={id}
      className="group relative flex flex-col justify-between rounded-lg p-5 shadow-sm transition-all duration-300 cursor-pointer"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider"
            style={{
              backgroundColor: "var(--color-surface-container-high)",
              color: "var(--color-secondary)",
            }}
          >
            {crystal}
          </span>
        </div>
        <div
          className="relative w-full aspect-square flex items-center justify-center rounded overflow-hidden mb-4"
          style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
        >
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              className="bg-white w-5/5 h-5/5 object-contain drop-shadow-2xl"
            />
          )}
        </div>

        <span
          className="text-[10px] tracking-widest uppercase block mb-1"
          style={{
            color: "var(--color-outline)",
            fontFamily: "var(--font-body)",
          }}
        >
          {dial}
        </span>
        <h3
          className="text-xl"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-on-surface)",
          }}
        >
          {name}
        </h3>
        <p
          className="text-xs mt-1"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          {caseMaterial} • {movement}
        </p>
      </div>

      <div className="pt-4 mt-4 flex items-center justify-between">
        <div>
          <span
            className="text-[10px] tracking-wider block"
            style={{
              color: "var(--color-outline)",
              fontFamily: "var(--font-body)",
            }}
          >
            PRICE
          </span>
          <span
            className="text-xl tracking-wide"
            style={{
              color: "var(--color-primary)",
              fontFamily: "var(--font-body)",
            }}
          >
            ${priceUSD.toLocaleString()}
          </span>
        </div>
        <div
          className="px-3.5 py-1.5 rounded text-[10px] uppercase tracking-wider flex items-center gap-1"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-on-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Acquire
          <ArrowRight size={14} />
        </div>
      </div>
    </article>
  );
}
