import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer, { type CartItem } from "./cartSlice";

function loadSavedCart(): CartItem[] | undefined {
  try {
    const raw = localStorage.getItem("cart");
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}
const savedCart = loadSavedCart();
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: savedCart
    ? {
        cart: {
          items: savedCart,
        },
      }
    : undefined,
});
let previousCartItems = store.getState().cart.items;

store.subscribe(() => {
  const currentCartItems = store.getState().cart.items;
  if (currentCartItems !== previousCartItems) {
    previousCartItems = currentCartItems;
    localStorage.setItem("cart", JSON.stringify(currentCartItems));
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
