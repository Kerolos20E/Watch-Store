import {
  Fingerprint,
  KeyRound,
  Eye,
  ShieldCheck,
  Lock,
  ArrowRight,
  Shield,
} from "lucide-react";

export default function Login() {
  return (
    <main
      className="w-full min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col w-full items-center justify-center relative overflow-hidden">
        {/* Ambient glows */}
        <div
          className="absolute w-[620px] h-[620px] rounded-full blur-3xl pointer-events-none -top-24 left-1/2 -translate-x-1/2"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-primary) 5%, transparent)",
          }}
        />
        <div
          className="absolute w-[440px] h-[440px] rounded-full blur-3xl pointer-events-none bottom-0 left-1/2 -translate-x-1/2"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-secondary) 10%, transparent)",
          }}
        />

        <div className="w-full max-w-[540px] relative z-10">
          {/* Top strip */}
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <span
                className="text-[10px] uppercase tracking-[0.24em]"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                GENÈVE SALON PORTAL
              </span>
            </div>
            <span
              className="text-[10px] uppercase tracking-widest"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              REF. VH-SEC-1892
            </span>
          </div>

          {/* Card */}
          <div
            className="rounded-2xl p-8 sm:p-11"
            style={{
              backgroundColor: "var(--color-card-bg)",
              boxShadow:
                "0 24px 70px rgba(0,0,0,0.85), 0 0 36px rgba(201,166,107,0.06)",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-auto mb-6 flex items-center justify-center">
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
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: "var(--color-chip-bg)" }}
              >
                <ShieldCheck
                  size={14}
                  style={{ color: "var(--color-primary)" }}
                />
                <span
                  className="text-[10px] uppercase tracking-[0.22em]"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  PRIVILEGED VERIFICATION
                </span>
              </div>

              <h1
                className="text-3xl font-normal tracking-tight mb-2"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-heading)",
                }}
              >
                Collector Vault Sign In
              </h1>
              <p
                className="text-sm max-w-sm font-light leading-relaxed"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Access your registered allocations, service monographs, and
                personal horological advisor.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
              <div className="space-y-2">
                <label
                  className="flex justify-between items-center"
                  htmlFor="identifier"
                >
                  <span
                    className="text-xs uppercase tracking-[0.16em]"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    PATRON IDENTIFIER OR EMAIL
                  </span>
                  <span
                    className="text-[10px]"
                    style={{
                      color: "var(--color-outline)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ATELIER ID
                  </span>
                </label>
                <div className="relative">
                  <input
                    id="identifier"
                    type="text"
                    placeholder="vance.heir@patron.ch or VH-88204"
                    className="w-full px-4 py-3.5 pl-11 rounded-lg text-sm outline-none shadow-inner"
                    style={{
                      backgroundColor: "var(--color-input-bg)",
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                  <Fingerprint
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{
                      color:
                        "color-mix(in srgb, var(--color-primary) 70%, transparent)",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label
                    className="text-xs uppercase tracking-[0.16em]"
                    htmlFor="passkey"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    ENCRYPTED PASSKEY
                  </label>
                  <a
                    href="#"
                    className="text-xs italic underline underline-offset-4"
                    style={{
                      color:
                        "color-mix(in srgb, var(--color-primary) 90%, transparent)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Forgot your passkey?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="passkey"
                    type="password"
                    placeholder="••••••••••••••••"
                    className="w-full px-4 py-3.5 pl-11 pr-11 rounded-lg text-sm outline-none shadow-inner"
                    style={{
                      backgroundColor: "var(--color-input-bg)",
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                  />
                  <KeyRound
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{
                      color:
                        "color-mix(in srgb, var(--color-primary) 70%, transparent)",
                    }}
                  />
                  <button
                    type="button"
                    aria-label="Toggle passkey reveal"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1"
                    style={{ color: "var(--color-outline)" }}
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 pb-2">
                <label className="inline-flex items-center gap-3 cursor-pointer select-none">
                  <div
                    className="relative flex items-center justify-center w-4 h-4 rounded"
                    style={{ backgroundColor: "var(--color-input-bg)" }}
                  >
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      id="rememberMe"
                    />
                    <div
                      className="w-2.5 h-2.5 rounded-sm peer-checked:opacity-100 opacity-0 transition-opacity"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    />
                  </div>
                  <span
                    className="text-sm"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Keep me authenticated for 30 days
                  </span>
                </label>
                <div
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded"
                  style={{ backgroundColor: "var(--color-toggle-bg)" }}
                >
                  <Lock size={13} style={{ color: "var(--color-primary)" }} />
                  <span
                    className="text-[10px] tracking-wider uppercase"
                    style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    256-BIT
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-vault-button-text)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 24px rgba(201,166,107,0.22)",
                }}
              >
                <span>Sign In</span>
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-7">
              <div
                className="w-full h-px"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-outline-variant, var(--color-outline)) 30%, transparent)",
                }}
              />
              <span
                className="absolute px-3 text-[10px] uppercase tracking-[0.24em]"
                style={{
                  backgroundColor: "var(--color-card-bg)",
                  color: "var(--color-outline)",
                  fontFamily: "var(--font-body)",
                }}
              >
                ALTERNATE ESCAPEMENT
              </span>
            </div>

            {/* Footer panel + sign up */}
            <div
              className="mt-8 pt-6 -mx-8 -mb-8 sm:-mx-11 sm:-mb-11 p-6 text-center rounded-b-2xl"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--color-footer-bg) 60%, transparent)",
              }}
            >
              <p
                className="text-sm"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                You not have a Account ?
                <a
                  href="#"
                  className="font-medium ml-1 underline underline-offset-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  Resigster now
                </a>
              </p>
              <div
                className="flex items-center justify-center gap-2 mt-4 text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-outline)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <Shield
                  size={13}
                  style={{
                    color:
                      "color-mix(in srgb, var(--color-primary) 60%, transparent)",
                  }}
                />
                <span>
                  Vault Protocol v4.12 • Genève Salons • Zurich • Tokyo
                </span>
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7 text-center">
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              Certificate Registry
            </a>
            <span style={{ color: "var(--color-outline)" }}>•</span>
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              Horological Standards
            </a>
            <span style={{ color: "var(--color-outline)" }}>•</span>
            <a
              href="#"
              className="text-[10px] uppercase tracking-widest"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              Direct Atelier Telegraph
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
