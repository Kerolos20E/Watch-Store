import { ShoppingBag, Sparkles, Menu } from "lucide-react";
// Types Start
interface NavLink {
  label: string;
  current?: boolean;
  badge?: string;
}
type NavbarProps = {
  logoSrc?: string;
};

// Types End
const NAV_LINKS: NavLink[] = [
  { label: "Home", current: true },
  { label: "Watches" },
  { label: "Atelier Craft" },
  { label: "AI Advisor", badge: "GENEVE AI" },
  { label: "Contact" },
];

export default function Navbar({ logoSrc }: NavbarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--color-surface-container-lowest) 85%, transparent)",
        borderColor:
          "color-mix(in srgb, var(--color-primary) 20%, transparent)",
      }}
    >
      <div className="h-20 w-full max-w-7xl mx-auto px-4 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="Vance & Heir"
              className="h-8 w-auto object-contain"
            />
          ) : (
            <div
              className="h-8 w-8 flex items-center justify-center rounded"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
                fontFamily: "var(--font-headline)",
              }}
            >
              V
            </div>
          )}
          <div className="flex flex-col">
            <span
              className="text-xl uppercase tracking-wide"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
                fontWeight: 500,
              }}
            >
              Vance &amp; Heir
            </span>
            <span
              className="text-[10px] tracking-widest uppercase -mt-1"
              style={{
                color: "var(--color-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Genève • 1892
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              aria-current={link.current ? "page" : undefined}
              className={`text-xs uppercase tracking-widest flex items-center gap-3 pb-1 ${
                link.current ? "border-b font-medium" : "font-normal"
              }`}
              style={{
                fontFamily: "var(--font-body)",
                color: link.current
                  ? "var(--color-primary)"
                  : "var(--color-on-surface-variant)",
                borderColor: link.current
                  ? "var(--color-primary)"
                  : "transparent",
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span
                  className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-semibold border tracking-normal"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                    color: "var(--color-primary)",
                    borderColor:
                      "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                  }}
                >
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right actions Cart + Profile + AI */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded border"
            style={{
              backgroundColor: "var(--color-surface-container-low)",
              borderColor:
                "color-mix(in srgb, var(--color-primary) 30%, transparent)",
              color: "var(--color-primary)",
            }}
          >
            <Sparkles size={16} />
            <span
              className="text-[10px] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Concierge
            </span>
          </div>

          <div
            className="relative"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            <ShoppingBag size={22} strokeWidth={1.75} />
            <span
              className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
              }}
            >
              2
            </span>
          </div>

          <div
            className="hidden sm:block rounded-full border p-0.5"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-primary) 30%, transparent)",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
              style={{
                backgroundColor: "var(--color-surface-container)",
                color: "var(--color-primary)",
              }}
            >
              JV
            </div>
          </div>

          <Menu
            size={22}
            className="lg:hidden"
            style={{ color: "var(--color-on-surface)" }}
          />
        </div>
      </div>
    </header>
  );
}
