import { ShieldCheck, Lock, Banknote, Minus, Plus, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function CartSummary() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside
      className="p-12 md:p-8 shadow-xl"
      style={{ backgroundColor: "var(--color-surface-container-low)" }}
    >
      {/* Price breakdown */}
      <div className="space-y-4 pt-18">
        <div className="flex mb-6 flex-1 justify-between items-center">
          <h3
            className="text-xl"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-heading)",
            }}
          >
            Cart Summary
          </h3>
          <button
            className="text-xl underline flex items-center gap-1.5"
            type="button"
            style={{
              fontFamily: "var(--font-headline)",
              color: "var(--color-heading)",
            }}
            onClick={() => dispatch(clearCart())}
            disabled={cartItems.length === 0}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className="text-sm text-center py-6">
            <p
              className="text-sm text-center py-6"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              Empty
            </p>
            <Link
              to="/watches"
              className="underline"
              style={{
                color: "var(--color-outline)",
                fontFamily: "var(--font-body)",
              }}
            >
              Go to All Watches
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className="w-40 h-40 rounded flex items-center justify-center shrink-0 overflow-hidden"
                style={{
                  backgroundColor: "var(--color-surface-container-lowest)",
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-sm"
                  style={{
                    color: "var(--color-on-surface)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    className="w-5 h-5 flex items-center justify-center rounded cursor-pointer"
                    style={{
                      backgroundColor: "var(--color-surface-container-lowest)",
                    }}
                    aria-label="Decrease quantity"
                  >
                    <Minus
                      size={11}
                      style={{ color: "var(--color-outline)" }}
                    />
                  </button>
                  <span
                    className="text-xs w-4 text-center"
                    style={{
                      color: "var(--color-on-surface-variant)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                    className="w-5 h-5 flex items-center justify-center rounded cursor-pointer"
                    style={{
                      backgroundColor: "var(--color-surface-container-lowest)",
                    }}
                    aria-label="Increase quantity"
                  >
                    <Plus size={11} style={{ color: "var(--color-outline)" }} />
                  </button>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span
                  className="text-xl block"
                  style={{
                    color: "var(--color-primary)",
                    fontFamily: "var(--font-headline)",
                  }}
                >
                  ${(item.price * item.quantity).toLocaleString()}
                </span>
                <button
                  type="button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-1 cursor-pointer"
                  aria-label="Remove item"
                >
                  <X size={16} style={{ color: "var(--color-outline)" }} />
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <button
            type="button"
            onClick={() => dispatch(clearCart())}
            className="text-[10px] uppercase tracking-wider cursor-pointer"
            style={{
              color: "var(--color-outline)",
              fontFamily: "var(--font-body)",
            }}
          >
            Clear all
          </button>
        )}
      </div>

      {/* Divider */}
      <div
        className="h-px my-6"
        style={{ backgroundColor: "var(--color-outline)", opacity: 0.2 }}
      />

      {/* Privilege / Patron code */}
      <div className="mb-6">
        <label
          className="block text-[10px] uppercase tracking-wider mb-2"
          style={{
            color: "var(--color-outline)",
            fontFamily: "var(--font-body)",
          }}
        >
          Privilege / Patron Token
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: "var(--color-input-bg)",
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-body)",
              border: "1px solid var(--color-outline)",
            }}
          />
          <span
            className="px-4 py-2 rounded text-xs uppercase tracking-wider flex items-center justify-center"
            style={{
              backgroundColor: "var(--color-button-secondary-bg)",
              color: "var(--color-on-surface)",
              fontFamily: "var(--font-body)",
              border: "1px solid var(--color-outline)",
            }}
          >
            Apply
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px my-6"
        style={{ backgroundColor: "var(--color-outline)", opacity: 0.2 }}
      />

      {/* Total */}
      <div className="flex items-end justify-between mb-8">
        <span
          className="text-sm uppercase tracking-wider"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          {totalItems} {totalItems === 1 ? "Item" : "Items"}
        </span>
        <span
          className="text-3xl"
          style={{
            fontFamily: "var(--font-headline)",
            color: "var(--color-primary)",
          }}
        >
          ${subtotal.toLocaleString()}
        </span>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <span
          className="block text-center rounded px-4 py-3 text-sm uppercase tracking-wider cursor-pointer"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-vault-button-text)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
          }}
        >
          Proceed to Private Checkout
        </span>
        <span
          className="block text-center rounded px-4 py-3 text-sm uppercase tracking-wider cursor-pointer"
          style={{
            backgroundColor: "var(--color-button-secondary-bg)",
            color: "var(--color-on-surface)",
            fontFamily: "var(--font-body)",
            border: "1px solid var(--color-outline)",
          }}
        >
          Arrange Wire / Escrow Consultation
        </span>
      </div>

      {/* Guarantees / security strip */}
      <div
        className="mt-8 pt-6 space-y-3"
        style={{
          borderTop:
            "1px solid color-mix(in srgb, var(--color-outline) 20%, transparent)",
        }}
      >
        <div
          className="flex items-center gap-2 text-xs"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          <ShieldCheck size={16} style={{ color: "var(--color-primary)" }} />
          Fully Insured Armored Transit
        </div>
        <div
          className="flex items-center gap-2 text-xs"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          <Lock size={16} style={{ color: "var(--color-primary)" }} />
          Encrypted Settlement Channel
        </div>
        <div
          className="flex items-center gap-2 text-xs"
          style={{
            color: "var(--color-on-surface-variant)",
            fontFamily: "var(--font-body)",
          }}
        >
          <Banknote size={16} style={{ color: "var(--color-primary)" }} />
          Wire, Card & Escrow Accepted
        </div>
      </div>
    </aside>
  );
}
