import { KeyRound } from "lucide-react";

export default function Newsletter() {
  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-full shadow-sm mx-auto"
            style={{
              backgroundColor: "var(--color-surface-container)",
              color: "var(--color-primary)",
            }}
          >
            <KeyRound size={24} />
          </div>
          <h2
            className="text-3xl tracking-tight"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-on-surface)",
            }}
          >
            Join the Vance &amp; Heir Society
          </h2>
          <p
            className="text-base font-light leading-relaxed"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            Membership by invitation and archival inscription. Receive private
            previews of rare horological allocations, invitations to Geneva
            salon vernissages, and quarterly metallurgical monographs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto pt-4">
            <input
              type="email"
              placeholder="patron@estate.com"
              className="flex-1 px-5 py-4 text-sm rounded outline-none shadow-inner"
              style={{
                backgroundColor: "var(--color-surface-container)",
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-body)",
              }}
            />
            <button
              type="button"
              className="px-8 py-4 text-xs uppercase tracking-[0.2em] shadow-md shrink-0"
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-on-primary)",
                fontFamily: "var(--font-body)",
              }}
            >
              Apply For Access
            </button>
          </div>
          <p
            className="text-[10px] tracking-wider pt-2"
            style={{
              color: "var(--color-outline)",
              fontFamily: "var(--font-body)",
            }}
          >
            Discretion guaranteed. No solicitation. Unsubscribe at collector
            prerogative.
          </p>
        </div>
      </div>
    </section>
  );
}
