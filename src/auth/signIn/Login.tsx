import {
  KeyRound,
  Eye,
  ShieldCheck,
  ArrowRight,
  Shield,
  EyeOff,
  Mail,
  LoaderCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  LoginSchema,
  type LoginFormData,
} from "../schemaVaildation/LoginSchema";
import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  //
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });
  const onSubmit = async (data: LoginFormData) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/invalid-credential") {
          setError("root", {
            type: "server",
            message: "Incorrect email or password",
          });
          return;
        }
        if (error.code === "auth/too-many-requests") {
          setError("root", {
            type: "server",
            message: "Too many attempts. Try again later.",
          });
          return;
        }
      }
      setError("root", {
        type: "server",
        message: "An error occurred, try again",
      });
      return;
    }
    navigate("/");
  };
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
            <form
              className="mt-8 space-y-5"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label
                  className="flex justify-between items-center"
                  htmlFor="email"
                >
                  <span
                    className="text-xs uppercase tracking-[0.16em]"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    EMAIL
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
                    id="email"
                    type="email"
                    placeholder="example@residence-vance.ch"
                    className="w-full px-4 py-3.5 pl-11 rounded-lg text-sm outline-none shadow-inner"
                    style={{
                      backgroundColor: "var(--color-input-bg)",
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                    {...register("email")}
                  />
                  <Mail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    className="w-full px-4 py-3.5 pl-11 pr-11 rounded-lg text-sm outline-none shadow-inner"
                    style={{
                      backgroundColor: "var(--color-input-bg)",
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                    {...register("password")}
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
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-lg flex cursor-pointer items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase disabled:opacity-50"
                style={{
                  backgroundColor: "var(--color-primary-container)",
                  color: "var(--color-vault-button-text)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 4px 24px rgba(201,166,107,0.22)",
                }}
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      <span>Login...</span>
                    </>
                  ) : (
                    <>
                      <span>Login</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </span>
              </button>
              {errors.root && (
                <p className="text-xs text-red-400 text-center">
                  {errors.root.message}
                </p>
              )}
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
                Don&apos;t have an account?
                <Link
                  to="/signup"
                  className="font-medium ml-1 underline underline-offset-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  Register now
                </Link>
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
