type FooterProps = {
  logoSrc?: string;
};

const BOUTIQUES: string[] = [
  "Genève • Rue du Rhône 42",
  "London • New Bond Street",
  "New York • Madison Avenue",
  "Tokyo • Ginza District 6",
];

const CLIENT_CARE: string[] = [
  "Archive Extract Request",
  "Complication Restoration",
  "Provenance Authentication",
  "Private Viewing Salon",
];

export default function Footer({ logoSrc }: FooterProps) {
  return (
    <footer
      className="w-full border-t pt-12 pb-6"
      style={{
        backgroundColor: "var(--color-bg)",
        borderColor:
          "color-mix(in srgb, var(--color-primary) 15%, transparent)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="Vance & Heir"
                  className="h-7 w-auto object-contain"
                />
              ) : (
                <div
                  className="h-7 w-7 flex items-center justify-center rounded text-xs"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--color-on-primary)",
                    fontFamily: "var(--font-headline)",
                  }}
                >
                  V
                </div>
              )}
              <span
                className="text-lg uppercase tracking-wider"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-on-surface)",
                }}
              >
                Vance &amp; Heir
              </span>
            </div>
            <p
              className="text-xs leading-relaxed max-w-sm"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Independent Haute Horlogerie preserving micro-mechanical
              excellence and master finishing since 1892. Handcrafted in Geneva
              and Vallée de Joux.
            </p>
            <div className="pt-2 flex items-center gap-2 flex-wrap">
              <span
                className="text-[10px] uppercase tracking-widest border px-2.5 py-1 rounded"
                style={{
                  color: "var(--color-primary)",
                  borderColor:
                    "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                  backgroundColor: "var(--color-surface-container-low)",
                }}
              >
                Poinçon de Genève
              </span>
              <span
                className="text-[10px] uppercase tracking-widest border px-2.5 py-1 rounded"
                style={{
                  color: "var(--color-secondary)",
                  borderColor:
                    "color-mix(in srgb, var(--color-secondary) 30%, transparent)",
                  backgroundColor: "var(--color-surface-container-low)",
                }}
              >
                COSC Certified
              </span>
            </div>
          </div>

          {/* Boutiques */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-xs uppercase tracking-widest"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Salons &amp; Boutiques
            </h4>
            <ul
              className="space-y-2 text-xs"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              {BOUTIQUES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Client care */}
          <div className="lg:col-span-2 space-y-3">
            <h4
              className="text-xs uppercase tracking-widest"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Client Care &amp; Atelier
            </h4>
            <ul
              className="space-y-2 text-xs"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              {CLIENT_CARE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4
              className="text-xs uppercase tracking-widest"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              The Atelier Gazette
            </h4>
            <p
              className="text-xs leading-relaxed"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Receive private allocation previews, metallurgical treatise
              releases, and exclusive salon invitations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="patron@collection.ch"
                className="flex-1 px-4 py-2.5 rounded border text-xs focus:outline-none"
                style={{
                  backgroundColor: "var(--color-surface-container-low)",
                  borderColor:
                    "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                  color: "var(--color-on-surface)",
                  fontFamily: "var(--font-body)",
                }}
              />
              <button
                className="px-5 py-2.5 text-xs uppercase tracking-widest"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Inscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]"
          style={{
            borderColor:
              "color-mix(in srgb, var(--color-primary) 10%, transparent)",
            color: "var(--color-outline)",
            fontFamily: "var(--font-body)",
          }}
        >
          <p>
            © 1892–2025 Vance &amp; Heir S.A. Manufacture de Haute Horlogerie.
            Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <span>Swiss Federal Hallmark Certified</span>
            <span>Confidentiality Charte</span>
            <span>Allocation Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
