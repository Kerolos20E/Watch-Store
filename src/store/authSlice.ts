import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
};
type AuthState = {
  user: AuthUser | null;
  loading: boolean;
};
const initialState: AuthState = {
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",// slice name 
  initialState,// initial state value
  reducers: { // reducer funtion to define how the state can be updated
    setUser: (state, action: PayloadAction<AuthUser | null>) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
