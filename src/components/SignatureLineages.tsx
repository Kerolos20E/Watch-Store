import { ChevronRight } from "lucide-react";

const LINEAGES = [
  {
    tag: "Complication Series",
    size: "Unisex 39mm",
    ref: "Ref. ROY-8920",
    price: "From $48,000 USD",
    name: "The Calibre Royale",
    description:
      "Open-worked skeletonized tourbillon cage with 42 hand-chamfered internal angles and an anthracite frosted mainplate.",
    movement: "In-House Manual VH-892",
    materialLabel: "Case Material",
    materialValue: "18k Honey Gold & Titanium",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-DnCGfEqlrjIH2ht6m39yrLxwae2wzNtsUWeQvwuVS7jPzaqoM8MOqNgWtzgFZlAoJDjfbFtTGTHl_Y5qYjb8diTv1Nz1h-G7JvQgmxK9oRvrg5jxrHUS1iZU6ryV0yqDTI1n5aZ4xeZQMxN0HPfUohibFVmrA8N1WDKpdK4sZEFafPTnQ20psZt-9bFjRvSMLy01gao4hI7RzYU8OGOoqqxEUYOymk7NhubKQxQI5EBcC9bmAI",
  },
  {
    tag: "Ultra-Thin 5.8mm",
    size: "36mm & 40mm",
    ref: "Ref. VESP-104",
    price: "From $24,500 USD",
    name: "The Vespera Slim",
    description:
      "Pure horological restraint. Sub-six-millimeter profile displaying a hand-turned sunburst charcoal guilloché dial with feuille hands.",
    movement: "Extra-Plat Calibre VH-400",
    materialLabel: "Case Material",
    materialValue: "950 Platinum / Rose Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB17udYRfl1ObqBZMb93rOHjU2ZRi-y18PMv8Bau8S-ZP1HwtyiaFtfwz-yiXKkomEmiEcqxqUNPpCV8fIueEN1rrcbX-TumEdpAaaS9V4YG8tp5FuIfVAh2vaICywZL8OmiNqKU2vs4vh9H3x44HYJ9dnS2ijECYu4qTCOfbQxQ0Yl16-bvZPSNSRvaxyxhLNPj10taZjRBdFLTiN_Q5hyoEstNScZC85mxmnw0U5HKT5oH9Qdlsw",
  },
  {
    tag: "Haute Sport",
    size: "Unisex 41mm",
    ref: "Ref. NAUT-550",
    price: "From $32,000 USD",
    name: "The Nautique Chronographe",
    description:
      "Column-wheel vertical clutch chronograph sculpted from lightweight Grade 5 titanium with an integrated 18k Rose Gold bezel.",
    movement: "Automatic Flyback VH-55",
    materialLabel: "Water Resistance",
    materialValue: "150 Metres / 15 Bar",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLdChRWtAcAU7DdDODYzc16QZKQ4zgcKnqHjSU0xHXe3mgYVf_rCiZHP1RFfAW1Lq4DMcHch0kODUPNJmON4O3Y7dhcWgiesZzRtCowUPmUNNkzbrKlI_DBk8wsDzDQD3O0yJX1IRlCK3taOYb1OAssavY0VymueefYJ2ejKL5g0VEsoz8pn5uUai1snmUsNs0gUjO5Rzq23O6cxYCxp68hwXwWAlZQADqWXIxzul0uDkD2WE9yUY",
  },
];

export default function SignatureLineages() {
  return (
    <section
      className="w-full py-12"
      id="signature-lineages"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span
              className="text-[10px] uppercase tracking-[0.25em]"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Curated Masterpieces
            </span>
            <h2
              className="text-3xl tracking-tight"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              Signature Lineages
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Conceived as architectural sculptures for the wrist, distinct in
              purpose yet united by bespoke Swiss craftsmanship.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] uppercase tracking-wider"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              Archival Series 2025
            </span>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--color-surface-container-high)" }}
            />
            <span
              className="text-[10px]"
              style={{ color: "var(--color-primary)" }}
            >
              Edition 03/03
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {LINEAGES.map((watch) => (
            <article
              key={watch.ref}
              className="rounded-xl shadow-md flex flex-col overflow-hidden"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <div
                className="relative w-full aspect-4/5 overflow-hidden"
                style={{
                  backgroundColor: "var(--color-surface-container-lowest)",
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  alt={watch.name}
                  src={watch.image}
                />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 backdrop-blur-md rounded text-[10px] uppercase tracking-widest shadow-sm"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-surface-container-lowest) 85%, transparent)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {watch.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className="px-2.5 py-1 rounded text-[10px] uppercase tracking-wider"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      color: "var(--color-on-surface)",
                    }}
                  >
                    {watch.size}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{
                        color: "var(--color-outline)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {watch.ref}
                    </span>
                    <span
                      className="text-xs font-semibold"
                      style={{
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {watch.price}
                    </span>
                  </div>
                  <h3
                    className="text-2xl"
                    style={{
                      fontFamily: "var(--font-headline)",
                      color: "var(--color-on-surface)",
                    }}
                  >
                    {watch.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {watch.description}
                  </p>
                </div>
                <div className="pt-4 space-y-3">
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span>Movement</span>
                    <span
                      className="font-medium"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {watch.movement}
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-between text-xs"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span>{watch.materialLabel}</span>
                    <span
                      className="font-medium"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {watch.materialValue}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="mt-4 w-full py-3 px-4 rounded text-center flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest"
                    style={{
                      backgroundColor: "var(--color-surface-container)",
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span>Configure Specification</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
