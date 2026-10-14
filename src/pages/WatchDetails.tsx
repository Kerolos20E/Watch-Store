import {
  ShieldCheck,
  Lock,
  RotateCw,
  CircleAlert,
  SearchX,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getWatchById } from "../lib/getWatches";
import { useAppDispatch } from "../store/hook";
import { addToCart } from "../store/cartSlice";

export default function WatchDetails() {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    data: watch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["watch", id],
    queryFn: () => getWatchById(id!),
    enabled: Boolean(id),
  });
  console.log(watch);
  if (isLoading) {
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
            Loading...
          </p>
        </div>
      </main>
    );
  }
  if (isError) {
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
              color: "var(--color-heading)",
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
            We couldn't retrieve this timepiece's dossier. Please try again in a
            moment.
          </p>
          <Link
            to="/watches"
            className="mt-2 px-5 py-2.5 rounded text-xs uppercase tracking-widest"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-vault-button-text)",
              fontFamily: "var(--font-body)",
            }}
          >
            Back to Collection
          </Link>
        </div>
      </main>
    );
  }
  if (!watch) {
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
                "color-mix(in srgb, var(--color-primary) 10%, transparent)",
            }}
          >
            <SearchX size={28} style={{ color: "var(--color-primary)" }} />
          </div>
          <h2
            className="text-xl"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-heading)",
            }}
          >
            Timepiece Not Found
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-body)",
            }}
          >
            This piece may have been allocated or the reference no longer exists
            in our atelier.
          </p>
          <Link
            to="/watches"
            className="mt-2 px-5 py-2.5 rounded text-xs uppercase tracking-widest"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-vault-button-text)",
              fontFamily: "var(--font-body)",
            }}
          >
            Browse the Collection
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main
      className="w-full  pt-20 min-h-screen"
      style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
    >
      <section className="w-full pt-16 px-4 md:px-16 pb-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Main stage image */}
            <div
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl flex items-center justify-center p-8"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, var(--color-surface-container), var(--color-surface-container-lowest))",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at center, color-mix(in srgb, var(--color-primary) 10%, transparent) 0%, color-mix(in srgb, var(--color-surface-container-low) 40%, transparent) 60%, transparent 100%)",
                }}
              />
              <img
                src={watch.imageUrl}
                alt={watch.name}
                className="relative z-10 w-full h-full object-contain"
                style={{ filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.85))" }}
              />

              {/* Floating badges */}
              <div
                className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded backdrop-blur-md"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-surface-container-lowest) 80%, transparent)",
                }}
              >
                <ShieldCheck
                  size={16}
                  style={{ color: "var(--color-primary)" }}
                />
                <span
                  className="text-[10px] uppercase tracking-wider"
                  style={{
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Vallée de Joux Masterwork
                </span>
              </div>
              <div
                className="absolute bottom-5 right-5 z-20 px-3 py-1.5 rounded backdrop-blur-md"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-surface-container-lowest) 80%, transparent)",
                }}
              >
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  REF. VH-892-RG
                </span>
              </div>
            </div>

            {/* Manufacture seal banner */}
            <div
              className="w-full p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary) 10%, transparent)",
                  }}
                >
                  <ShieldCheck
                    size={22}
                    style={{ color: "var(--color-primary)" }}
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: "var(--color-on-surface)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Poinçon de Genève & COSC Provenance
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: "var(--color-outline)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Each component hand-inspected in Geneva. Fully
                    chronometer-certified under ISO 3159.
                  </p>
                </div>
              </div>
              <span
                className="text-[10px] uppercase tracking-widest flex items-center gap-1 shrink-0"
                style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Audit Standard →
              </span>
            </div>
          </div>

          {/* Right Column: Details & Acquisition */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-4">
            {/* Header metadata */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-1 rounded text-[10px] uppercase tracking-widest"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-secondary) 25%, transparent)",
                    color: "var(--color-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Grand Complication
                </span>
                <span
                  className="text-[10px] uppercase tracking-widest"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Edition 25
                </span>
              </div>

              <h1
                className="text-3xl md:text-4xl tracking-tight"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "var(--color-heading)",
                }}
              >
                {watch.name}
              </h1>

              <div className="space-y-1 pt-1">
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span style={{ color: "var(--color-outline)" }}>Case: </span>
                  {watch.caseMaterial}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span style={{ color: "var(--color-outline)" }}>
                    Crystal:
                  </span>
                  {watch.crystal}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span style={{ color: "var(--color-outline)" }}>
                    Movement:
                  </span>
                  {watch.movement}
                </p>
                {watch.dial && (
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span style={{ color: "var(--color-outline)" }}>
                      Dial:{" "}
                    </span>
                    {watch.dial}
                  </p>
                )}
              </div>
            </div>

            {/* Price display */}
            <div
              className="p-5 rounded-lg space-y-1 shadow-inner"
              style={{ backgroundColor: "var(--color-surface-container-low)" }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="text-[15px] uppercase tracking-widest"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Price
                </span>
                <span
                  className="text-3xl tracking-tight"
                  style={{
                    fontFamily: "var(--font-headline)",
                    color: "var(--color-primary)",
                  }}
                >
                  ${Number(watch.priceUSD).toLocaleString()}
                  <span
                    className="text-sm p-2"
                    style={{
                      color:
                        "color-mix(in srgb, var(--color-primary) 80%, transparent)",
                    }}
                  >
                    USD
                  </span>
                </span>
              </div>
              <p
                className="text-xs"
                style={{
                  color: "var(--color-outline)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Includes white-glove armored insured transport, private salon
                delivery, & 5-year manufacture warranty.
              </p>
            </div>

            {/* Acquisition action */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-4 px-6 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] font-semibold shadow-lg cursor-pointer"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-vault-button-text)",
                  fontFamily: "var(--font-body)",
                }}
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: watch.id,
                      name: watch.name,
                      price: watch.priceUSD,
                      imageUrl: watch.imageUrl,
                      quantity: 1,
                    })
                  )
                }
              >
                <Lock size={18} />
                Add To Cart • ${Number(watch.priceUSD).toLocaleString()}
               
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
