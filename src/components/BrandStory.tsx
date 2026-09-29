import { ArrowRight, Ruler, Sparkle, Timer, Award } from "lucide-react";

const CRAFT_POINTS = [
  {
    icon: Ruler,
    title: "Anglage & Berceau Polishing",
    description:
      "Chamfering sharp interior angles by hand using boxwood pegging tools, generating unbroken razor-thin light reflections.",
  },
  {
    icon: Sparkle,
    title: "Côtes de Genève & Perlage",
    description:
      "Geometric wave damaskeening applied to German silver bridges, accompanied by dense overlapping circular graining along the mainplate.",
  },
  {
    icon: Timer,
    title: "Individual Chronometric Certification",
    description:
      "Regulated across 5 spatial positions and 3 distinct thermal stages over a 21-day observatory testing regiment.",
  },
];

export default function BrandStory() {
  return (
    <section className="w-full py-12" style={{ backgroundColor: "var(--color-surface-container-low)" }}>
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>
                Vallée de Joux Workshop
              </span>
              <h2 className="text-3xl tracking-tight" style={{ fontFamily: "var(--font-headline)", color: "var(--color-on-surface)" }}>
                The Patient Art of <span className="italic font-normal" style={{ color: "var(--color-primary-fixed)" }}>Haute Finition</span>
              </h2>
              <p className="text-base leading-relaxed font-light" style={{ color: "var(--color-on-surface-variant)", fontFamily: "var(--font-body)" }}>
                In an age of automated precision, Vance &amp; Heir preserves the sacred cadence of artisanal watchmaking. Every bridge is hand-sawn, every bevel smoothed by gentian wood paste, and every screw black-polished to a flawless mirror reflection.
              </p>
            </div>

            <div className="space-y-4">
              {CRAFT_POINTS.map((point) => (
                <div key={point.title} className="p-5 rounded-lg shadow-sm flex items-start gap-4" style={{ backgroundColor: "var(--color-surface-container)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-surface-container-low)", color: "var(--color-primary)" }}>
                    <point.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold" style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-body)" }}>{point.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)", fontFamily: "var(--font-body)" }}>
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest" style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>
              <span>Read the Horological Treatise</span>
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl" style={{ backgroundColor: "var(--color-surface-container-lowest)" }}>
              <img
                className="w-full h-full object-cover"
                alt="Master watchmaker at the bench"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuComqYZzqG-VHsvkdhBm1A8fuHuWB2xWVNxcIeFMA3hYh4mY_klC1cFyIV369yEz8olAlhVf15ik-p-01glX4gTQCxEhnSo1MEAXG0iqpGZ4uSA61__QwPunn759HKUD3z_HxyL83_6as6Xh1lOe7PbIZoeR3xUsGtpjeCegarSbo8I-ATpzq-TEhHthy9Fsv6OepUXXjyd0gtO0cydlp1gSyg0jOkGk9g2uy4H3ZE789SlYO4nfCc"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-5" style={{ backgroundColor: "color-mix(in srgb, var(--color-surface-container-lowest) 90%, transparent)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "color-mix(in srgb, var(--color-primary) 20%, transparent)", color: "var(--color-primary)" }}>
                  <Award size={28} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>100% Swiss Hand Finished</span>
                  <p className="text-base italic" style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-headline)" }}>
                    "Over 420 hours dedicated to a single movement."
                  </p>
                  <span className="text-sm" style={{ color: "var(--color-outline)", fontFamily: "var(--font-body)" }}>Jean-Luc Vance • Maitre Horloger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}