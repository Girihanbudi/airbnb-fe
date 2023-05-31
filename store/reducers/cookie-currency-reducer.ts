import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { CookieValueTypes, getCookie } from "cookies-next";
import { RootState } from "..";
import { changeCurrencyThunk } from "../actions/thunk/rest-async-thunk";

export interface ICookieCurrencyStore {
  loading: boolean;
  current: CookieValueTypes;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialCookieCurrencyStore: ICookieCurrencyStore = {
  loading: true,
  current: getCookie("currency"),
  rejected: false,
};

export const cookieCurrencySlice = createSlice({
  name: "cookieCurrency",
  initialState: initialCookieCurrencyStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(changeCurrencyThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeCurrencyThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.current = getCookie("currency");
      state.error = action.payload.data.error
        ? action.payload.data.error.message
        : undefined;
    });
    builder.addCase(changeCurrencyThunk.rejected, (state) => {
      state.loading = false;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export const cookieCurrencySelector = (state: RootState) =>
  state.cookieCurrency;
export default cookieCurrencySlice.reducer;
