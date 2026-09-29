import { Search, ChevronDown } from "lucide-react";

const COLLECTIONS = [
  "All Collection",
  "Signature Lineages",
  "Manufacture Reserve",
];

export default function FilterBar() {
  return (
    <div
      className="mb-6 p-4 rounded-lg flex flex-col gap-4"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2"
            style={{ color: "var(--color-outline)" }}
          />
          <input
            type="text"
            placeholder="Search by name or reference..."
            className="w-full pl-10 pr-4 py-2.5 rounded text-sm outline-none"
            style={{
              backgroundColor: "var(--color-surface-container)",
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-body)",
            }}
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          <label
            className="text-[10px] uppercase tracking-wider"
            style={{
              color: "var(--color-outline)",
              fontFamily: "var(--font-body)",
            }}
          >
            Sort By
          </label>
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-2 rounded text-sm outline-none cursor-pointer"
              style={{
                backgroundColor: "var(--color-surface-container)",
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-body)",
              }}
            >
              <option>Curated Selection</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
              <option>Name: A to Z</option>
            </select>
            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
              style={{ color: "var(--color-on-surface-variant)" }}
            />
          </div>
        </div>
      </div>

      {/* Collection filter buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {COLLECTIONS.map((name, index) => (
          <span
            key={name}
            className="px-3.5 py-1.5 rounded text-[10px] uppercase tracking-wider"
            style={
              index === 0
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
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
