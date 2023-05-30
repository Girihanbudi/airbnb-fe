import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { CookieValueTypes, getCookie } from "cookies-next";
import { changeLocaleThunk } from "../actions/thunk/rest-async-thunk";

export interface ICookieLocaleStore {
  loading: boolean;
  current: CookieValueTypes;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialCookieLocaleStore: ICookieLocaleStore = {
  loading: true,
  current: getCookie("locale"),
  rejected: false,
};

export const cookieLocaleSlice = createSlice({
  name: "cookieLocale",
  initialState: initialCookieLocaleStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(changeLocaleThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeLocaleThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.current = getCookie("locale");
      state.error = action.payload.data.error
        ? action.payload.data.error.message
        : undefined;
    });
    builder.addCase(changeLocaleThunk.rejected, (state) => {
      state.loading = false;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export default cookieLocaleSlice.reducer;
