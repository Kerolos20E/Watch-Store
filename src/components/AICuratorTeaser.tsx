import { Sparkles, MessageCircle } from "lucide-react";

export default function AICuratorTeaser() {
  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div
          className="rounded-2xl shadow-xl p-8 md:p-14 relative overflow-hidden"
          style={{ backgroundColor: "var(--color-surface-container-low)" }}
        >
          <div
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--color-primary) 10%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm"
                style={{ backgroundColor: "var(--color-surface-container)" }}
              >
                <Sparkles size={16} style={{ color: "var(--color-primary)" }} />
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Genève AI Atelier Curator
                </span>
              </div>
              <h2
                className="text-3xl tracking-tight"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                Bespoke Selection, Guided by Heritage
              </h2>
              <p
                className="text-base font-light leading-relaxed max-w-xl"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Trained on 133 years of Vance &amp; Heir archival ledgers and
                movement calibres. Converse privately to evaluate complication
                allocations, bespoke dial engravings, or provenance
                verification.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded text-sm shadow-sm text-left"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  "Recommend me a 39mm Honey Gold Calibre"
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded text-sm shadow-sm text-left"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  "Check tourbillon allocation waiting list"
                </button>
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  className="px-8 py-4 text-xs uppercase tracking-[0.2em] shadow-md flex items-center gap-3"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-on-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Open Curator Salon</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-xl shadow-2xl p-6 space-y-4"
                style={{ backgroundColor: "var(--color-surface-container)" }}
              >
                <div className="flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{
                        color: "var(--color-on-surface)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Curator Live Session
                    </span>
                  </div>
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Confidential
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div
                    className="p-3.5 rounded leading-relaxed"
                    style={{
                      backgroundColor: "var(--color-surface-container-low)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    "I am seeking an understated dress watch with hand-finished
                    guilloché for evening galas."
                  </div>
                  <div
                    className="p-4 rounded space-y-2"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                      color: "var(--color-on-surface)",
                    }}
                  >
                    <div
                      className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <Sparkles size={14} />
                      Curator Recommendation
                    </div>
                    <p className="leading-relaxed">
                      The{" "}
                      <strong
                        className="font-medium"
                        style={{ color: "var(--color-primary)" }}
                      >
                        Vespera Slim Ref. 104 in 950 Platinum
                      </strong>
                      . At 5.8mm, it slides seamlessly under tailored cuffs
                      while the charcoal sunburst dial catches subtle ambient
                      candlelight.
                    </p>
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <span
                    className="text-[10px] uppercase tracking-widest"
                    style={{
                      color: "var(--color-outline)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Click anywhere to engage directly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
