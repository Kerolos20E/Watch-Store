import { ArrowRight, Calendar, BadgeCheck } from "lucide-react";

const PILLARS = [
  {
    label: "Regulated Escapement",
    value: "4 Hz / 28,800 VPH",
    note: "Co-Axial Glucydur Variable Balance",
  },
  {
    label: "Kinetic Autonomy",
    value: "72-Hour Reserve",
    note: "Twin-Barrel Chronometer Constant",
    percent: "100%",
    bar: true,
  },
  {
    label: "Haute Metallics",
    value: "18k Honey Gold & 950 Pt",
    note: "Hand-polished Mirror Bevels & Anglage",
  },
  {
    label: "Geneva Standard",
    value: "Poinçon de Genève",
    note: "Certified Vallée de Joux Manufacture",
  },
];

export default function Hero() {
  return (
    <section
      className="relative w-full -mt-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, color-mix(in srgb, var(--color-primary) 12%, transparent), rgba(13,13,13,0.95) 75%)",
        }}
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-primary) 5%, transparent)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-16 pt-36 md:pt-44 pb-20 flex flex-col justify-between min-h-[92vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
          {/* Text Hierarchy Left */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            <div
              className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full shadow-sm"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <span
                className="text-[10px] uppercase tracking-[0.28em]"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Genève • Atelier Fondé en 1892
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl tracking-tight leading-[1.08] max-w-xl"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              The Architecture{" "}
              <span
                className="italic font-normal"
                style={{ color: "var(--color-primary-fixed)" }}
              >
                of Midnight
              </span>{" "}
              Time
            </h1>

            <p
              className="text-base max-w-lg leading-relaxed font-light"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Horological mastery crafted for generations. Hand-chamfered
              bridges, regulated to chronometer tolerances, sculpted in rare
              alloys and deep titanium.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#signature-lineages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.2em]"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span>Explore The Collection</span>
                <ArrowRight size={16} />
              </a>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs uppercase tracking-[0.18em] shadow-sm"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  color: "var(--color-on-surface)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Calendar size={18} style={{ color: "var(--color-primary)" }} />
                <span>Salon Consultation</span>
              </button>
            </div>

            <div
              className="pt-6 flex items-center gap-4 text-[10px] tracking-wider"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              <div
                className="flex items-center gap-1.5"
                style={{ color: "var(--color-primary)" }}
              >
                <BadgeCheck size={16} />
                <span>Hallmark of Geneva Calibre 892</span>
              </div>
              <span style={{ color: "var(--color-surface-variant)" }}>•</span>
              <span>Vallée de Joux Workshop</span>
            </div>
          </div>

          {/* Watch Macro Visual Right */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-12 lg:mt-0">
            <div
              className="absolute w-[440px] h-[440px] md:w-[540px] md:h-[540px] rounded-full blur-[2px] animate-pulse"
              style={{
                background:
                  "linear-gradient(to top right, color-mix(in srgb, var(--color-primary) 10%, transparent), transparent, color-mix(in srgb, var(--color-primary) 5%, transparent))",
              }}
            />
            <div
              className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-6"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-surface-container-low) 40%, transparent)",
              }}
            >
              <img
                className="w-full h-full object-cover rounded-xl"
                alt="Skeleton tourbillon wristwatch"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbfTWPq_AI0kK88eao8SGe8O02ONjn8pDz9ksLwv1_VbKyzWLwxTWVOZkwHJjCdvzIplj4JDVlDuQBS1rf-OhbOvLnnc3gynv8rY18FNTtnxezBlco6YRLW2d5l5bLRGAFxAJeYRhSYIUjUUdFoc7_bcMfOMQbgOp8nAppr7CMVmLmGYaMpEZYGpo0PAXzR2KLA3VfXSiss9THjZ8nO5e_NjsBexQs3PntehQDk7pqMwu8zj36GC8"
              />
              <div
                className="absolute bottom-6 left-6 right-6 p-4 rounded-lg backdrop-blur-md shadow-lg flex items-center justify-between"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-surface-container-lowest) 80%, transparent)",
                }}
              >
                <div className="flex flex-col">
                  <span
                    className="text-[10px] uppercase tracking-widest"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Featured Calibre
                  </span>
                  <span
                    className="text-base"
                    style={{
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Calibre Royale 892 Squelette
                  </span>
                </div>
                <span
                  className="px-3 py-1 text-[10px] uppercase tracking-widest rounded"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Limited N° 08/25
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Pillars */}
        <div className="pt-16 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="p-4 rounded flex flex-col space-y-1"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-surface-container-low) 40%, transparent)",
              }}
            >
              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {pillar.label}
              </span>
              {pillar.percent ? (
                <div className="flex items-center justify-between">
                  <span
                    className="text-base"
                    style={{
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {pillar.value}
                  </span>
                  <span
                    className="text-[10px]"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {pillar.percent}
                  </span>
                </div>
              ) : (
                <span
                  className="text-base"
                  style={{
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {pillar.value}
                </span>
              )}
              {pillar.bar && (
                <div
                  className="w-full h-1 rounded-full overflow-hidden mt-1"
                  style={{ backgroundColor: "var(--color-surface-container)" }}
                >
                  <div
                    className="w-[85%] h-full"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  />
                </div>
              )}
              <span
                className="text-xs pt-0.5"
                style={{
                  color: "var(--color-outline)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {pillar.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
