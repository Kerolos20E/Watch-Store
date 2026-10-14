import { ChevronRight, RotateCw, CircleAlert } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getWatches } from "../lib/getWatches";

export default function SignatureLineages() {
  const {
    data: watches = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["watches"],
    queryFn: getWatches,
  });

  const featuredWatches = watches.slice(0, 3);

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

        {/* ----------Handle Loading  state---------- */}
        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl shadow-md overflow-hidden animate-pulse"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                }}
              >
                <div
                  className="w-full aspect-4/5"
                  style={{
                    backgroundColor: "var(--color-surface-container-high)",
                  }}
                />
                <div className="p-8 space-y-4">
                  <div
                    className="h-3 w-1/3 rounded"
                    style={{
                      backgroundColor: "var(--color-surface-container-high)",
                    }}
                  />
                  <div
                    className="h-6 w-2/3 rounded"
                    style={{
                      backgroundColor: "var(--color-surface-container-high)",
                    }}
                  />
                  <div
                    className="h-3 w-full rounded"
                    style={{
                      backgroundColor: "var(--color-surface-container-high)",
                    }}
                  />
                  <div
                    className="h-3 w-5/6 rounded"
                    style={{
                      backgroundColor: "var(--color-surface-container-high)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ----------Handle Error state ---------- */}
        {!isLoading && isError && (
          <div className="flex flex-col items-center gap-4 text-center py-16">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-error) 12%, transparent)",
              }}
            >
              <CircleAlert size={28} style={{ color: "var(--color-error)" }} />
            </div>
            <h3
              className="text-xl"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              Something Went Wrong
            </h3>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              We couldn't retrieve the Signature Lineages collection. Please try
              again in a moment.
            </p>
          </div>
        )}

        {/* ---------- Handle Empty State ---------- */}
        {!isLoading && !isError && featuredWatches.length === 0 && (
          <div className="flex flex-col items-center gap-3 text-center py-16">
            <RotateCw size={24} style={{ color: "var(--color-outline)" }} />
            <p
              className="text-sm"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              No timepieces available right now.
            </p>
          </div>
        )}

        {/* ---------- Handle Loaded state ---------- */}
        {!isLoading && !isError && featuredWatches.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredWatches.map((watch) => (
              <article
                key={watch.id}
                className="lineage-card rounded-xl shadow-md flex flex-col overflow-hidden"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                }}
              >
                <div
                  className="relative w-full aspect-4/5 overflow-hidden"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                  }}
                >
                  {watch.imageUrl && (
                    <img
                      className="w-full h-full object-cover"
                      alt={watch.name}
                      src={watch.imageUrl}
                    />
                  )}
                  {watch.crystal && (
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 backdrop-blur-md rounded text-[10px] uppercase tracking-widest shadow-sm"
                        style={{
                          backgroundColor:
                            "color-mix(in srgb, var(--color-surface-container-lowest) 85%, transparent)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {watch.crystal}
                      </span>
                    </div>
                  )}
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
                        {watch.dial}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{
                          color: "var(--color-primary)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        ${watch.priceUSD.toLocaleString()} USD
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
                      {watch.caseMaterial} • {watch.movement}
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
                      <span>Case Material</span>
                      <span
                        className="font-medium"
                        style={{ color: "var(--color-on-surface)" }}
                      >
                        {watch.caseMaterial}
                      </span>
                    </div>
                    <Link
                      to={`/watches/${watch.id}`}
                      className="mt-4 w-full py-3 px-4 rounded text-center flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest"
                      style={{
                        backgroundColor: "var(--color-surface-container)",
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      <span>Configure Specification</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
