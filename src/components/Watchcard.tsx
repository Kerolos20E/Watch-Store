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
              className="w-4/5 h-4/5 object-contain drop-shadow-2xl"
            />
          )}
        </div>

        <span>{caseMaterial}</span>

        <h3>{name}</h3>

        <p>
          {caseMaterial} • {movement} • {dial}
        </p>
      </div>

      <div>
        <span>PRICE</span>
        <span>${priceUSD.toLocaleString()}</span>
      </div>
    </article>
  );
}
