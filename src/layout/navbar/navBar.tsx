import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
// Types Start
interface NavItem {
  label: string;
  path: string;
  badge?: string;
}
type NavbarProps = {
  logoSrc?: string;
};

// Types End
const NAV_LINKS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Watches", path: "/watches" },
  { label: "Atelier Craft", path: "#BRANDSTORY" },
  { label: "Contact", path: "#footer" },
  // { label: "AI Advisor", path: "/ai-advisor", badge: "GENEVE AI" },
];

export default function Navbar({ logoSrc }: NavbarProps) {
  const totalQuantity = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="relative h-20 w-full max-w-7xl mx-auto px-4 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3.5 group shrink-0">
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
        </NavLink>

        <nav className="hidden lg:flex items-center gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) =>
            link.path.startsWith("#") ? (
              <a
                key={link.label}
                href={link.path}
                className="text-xs uppercase tracking-widest flex items-center gap-3 pb-1 font-normal"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-on-surface-variant)",
                }}
              >
                <span>{link.label}</span>
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-widest flex items-center gap-3 pb-1 ${
                    isActive ? "border-b font-medium" : "font-normal"
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: "var(--font-body)",
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-on-surface-variant)",
                  borderColor: isActive
                    ? "var(--color-primary)"
                    : "transparent",
                })}
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
              </NavLink>
            )
          )}
        </nav>

        {/* Right actions: Cart + Profile */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <NavLink
            to="/cart"
            className="relative"
            style={{ color: "var(--color-on-surface-variant)" }}
            aria-label="Shopping cart"
          >
            <ShoppingBag size={22} strokeWidth={1.75} />
            {totalQuantity > 0 && (
              <span
                className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-on-primary)",
                }}
              >
                {" "}
                {totalQuantity}
              </span>
            )}
          </NavLink>

          {/* Profile — visible on every screen size, including mobile */}
          <div
            className="block rounded-full border p-0.5 shrink-0"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-primary) 30%, transparent)",
            }}
          >
            <Link
              to="/profile"
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium"
              style={{
                backgroundColor: "var(--color-surface-container)",
                color: "var(--color-primary)",
              }}
              aria-label="Profile"
            >
              JV
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden cursor-pointer "
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={22} style={{ color: "var(--color-on-surface)" }} />
            ) : (
              <Menu size={22} style={{ color: "var(--color-on-surface)" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <nav
          className="lg:hidden border-t px-4 md:px-16 py-6 flex flex-col gap-1"
          style={{
            backgroundColor: "var(--color-surface-container-lowest)",
            borderColor:
              "color-mix(in srgb, var(--color-primary) 20%, transparent)",
          }}
        >
          {NAV_LINKS.map((link) =>
            link.path.startsWith("#") ? (
              <a
                key={link.label}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest py-3 flex items-center justify-between border-b"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-on-surface-variant)",
                  borderColor:
                    "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                }}
              >
                <span>{link.label}</span>
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest py-3 flex items-center justify-between border-b"
                style={({ isActive }) => ({
                  fontFamily: "var(--font-body)",
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-on-surface-variant)",
                  borderColor:
                    "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                })}
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
              </NavLink>
            )
          )}
        </nav>
      )}
    </header>
  );
}
