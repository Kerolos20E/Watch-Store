import { useState } from "react";
import {
  IdCard,
  Mail,
  KeyRound,
  Eye,
  EyeOff,
  ArrowRight,
  LoaderCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../lib/firebase";
import {
  SignUpSchema,
  type RegisterFormData,
} from "../schemaVaildation/RegisterSchema";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // React hook form
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  // send user to firebase
  const onSubmit = async (data: RegisterFormData) => {
    let userCredential;
    try {
      userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          setError("email", {
            type: "server",
            message: "This email has been used before",
          });
          return;
        }
      }
      if (!userCredential) {
        setError("root", {
          type: "server",
          message: "An error occurred, try again",
        });
        return;
      }
    }
    try {
      await updateProfile(userCredential.user, { displayName: data.username });
    } catch {
      console.warn("Account created but failed to set display name.");
    }
    console.log("user created:", userCredential.user.uid);
    navigate("/");
  };

  return (
    <main
      className="w-full min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col w-full max-w-xl items-center justify-center py-10 px-4">
        <div
          className="w-full rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl"
          style={{ backgroundColor: "var(--color-surface-container-low)" }}
        >
          <div className="flex flex-col items-center text-center space-y-3">
            <div
              className="h-8 w-8 flex items-center justify-center rounded"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
              }}
            >
              V
            </div>

            <h1
              className="text-3xl pt-1"
              style={{
                fontFamily: "var(--font-headline)",
                color: "var(--color-on-surface)",
              }}
            >
              Request Atelier Membership
            </h1>

            <p
              className="text-xs max-w-md leading-relaxed"
              style={{
                color: "var(--color-on-surface-variant)",
                fontFamily: "var(--font-body)",
              }}
            >
              Enter a private realm of limited horological allocations, private
              salon invitations, and personal curator advisory.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-8 space-y-5"
          >
            {/* Username */}
            <div className="space-y-1.5">
              <label
                htmlFor="username"
                className="block text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Username
              </label>

              <div className="relative">
                <IdCard
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--color-primary)" }}
                />

                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full text-sm pl-11 pr-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    color: "var(--color-on-surface)",
                  }}
                  {...register("username")}
                />
              </div>

              {errors.username && (
                <p className="text-xs text-red-400">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--color-primary)" }}
                />

                <input
                  id="email"
                  type="email"
                  placeholder="example@residence-vance.ch"
                  className="w-full text-sm pl-11 pr-4 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    color: "var(--color-on-surface)",
                  }}
                  {...register("email")}
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Password
              </label>

              <div className="relative">
                <KeyRound
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--color-primary)" }}
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 12 chars, upper & lower case, number, symbol"
                  className="w-full text-sm pl-11 pr-10 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    color: "var(--color-on-surface)",
                  }}
                  {...register("password", {
                    onChange: () => trigger("confirmPassword"),
                  })}
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
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

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="confirmPassword"
                className="block text-[10px] uppercase tracking-wider"
                style={{
                  color: "var(--color-on-surface-variant)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Confirm Password
              </label>

              <div className="relative">
                <KeyRound
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "var(--color-primary)" }}
                />

                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full text-sm pl-11 pr-10 py-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    color: "var(--color-on-surface)",
                  }}
                  {...register("confirmPassword")}
                />

                <button
                  type="button"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-xs text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 cursor-pointer rounded-lg flex items-center justify-center gap-3 text-xs uppercase tracking-widest disabled:opacity-50"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
              }}
            >
              <span className="flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <LoaderCircle size={18} className="animate-spin" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Register now</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </span>
            </button>
            {errors.root && (
              <p className="text-xs text-red-400">{errors.root.message}</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
