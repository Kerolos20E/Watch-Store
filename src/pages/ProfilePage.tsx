import { useState } from "react";
import {
  Pencil,
  ShoppingBag,
  LogOut,
  RotateCw,
  CircleAlert,
  Check,
  X,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { updateProfile, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user?.displayName ?? "");
  const displayName = user?.displayName?.trim() || "Collector";
  const initials = displayName
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  async function handleSaveProfile() {
    const name = editedName.trim();
    if (!name || !user) return;
    await updateProfile(user, { displayName: name });
    setIsEditing(false);
  }
  async function handleSignOut() {
    await signOut(auth);
    navigate("/signin");
  }
  if (loading) {
    return <ProfileLoading />;
  }
  return (
    <main
      className="w-full pt-20 min-h-screen"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <section className="w-full px-4 md:px-16 py-16">
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-xl shadow-md p-8 flex flex-col items-center text-center gap-6"
            style={{ backgroundColor: "var(--color-surface-container-low)" }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center border"
              style={{
                backgroundColor: "var(--color-surface-container)",
                borderColor:
                  "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                color: "var(--color-primary)",
              }}
            >
              <span
                className="text-3xl font-medium"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {initials}
              </span>
            </div>

            {isEditing ? (
              <div className="w-full flex flex-col items-center gap-3">
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Your name"
                  className="w-full max-w-xs text-center px-4 py-2.5 rounded border text-sm"
                  style={{
                    backgroundColor: "var(--color-surface-container-lowest)",
                    borderColor:
                      "color-mix(in srgb, var(--color-primary) 30%, transparent)",
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                  autoFocus
                />
                {/* TODO: show real validation / save error message here */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSaveProfile}
                    className="px-4 py-2 rounded text-xs uppercase tracking-widest flex items-center gap-1.5"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-on-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <Check size={14} />
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded text-xs uppercase tracking-widest flex items-center gap-1.5 border"
                    style={{
                      borderColor: "var(--color-outline)",
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <X size={14} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <h1
                  className="text-2xl"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-on-surface)",
                  }}
                >
                  {displayName}
                </h1>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {user?.email ?? "No email available"}
                </p>
              </div>
            )}

            {/* Actions */}
            {!isEditing && (
              <div className="w-full flex flex-col gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="w-full py-3 px-4 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2 border"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-primary) 40%, transparent)",
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <Pencil size={15} />
                  Edit Profile
                </button>

                <Link
                  to="/cart"
                  className="w-full py-3 px-4 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <ShoppingBag size={15} />
                  My Shopping Bag
                </Link>

                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full py-3 px-4 rounded text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-error) 12%, transparent)",
                    color: "var(--color-error)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <LogOut size={15} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
export function ProfileLoading() {
  return (
    <main
      className="w-full pt-20 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col items-center gap-4 text-center px-4">
        <RotateCw
          size={32}
          className="animate-spin"
          style={{ color: "var(--color-primary)" }}
        />
        <p
          className="text-sm uppercase tracking-widest"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          Retrieving Your Profile...
        </p>
      </div>
    </main>
  );
}

export function ProfileError() {
  return (
    <main
      className="w-full pt-20 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <div className="flex flex-col items-center gap-4 text-center px-4 max-w-md">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-error) 12%, transparent)",
          }}
        >
          <CircleAlert size={28} style={{ color: "var(--color-error)" }} />
        </div>
        <h2
          className="text-xl"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-on-surface)",
          }}
        >
          Something Went Wrong
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          We couldn't load your profile. Please try again in a moment.
        </p>
        <a
          href="#"
          className="mt-2 px-5 py-2.5 rounded text-xs uppercase tracking-widest"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-on-primary)",
            fontFamily: "var(--font-body)",
          }}
        >
          Try Again
        </a>
      </div>
    </main>
  );
}
