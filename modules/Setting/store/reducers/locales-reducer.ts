import ILocale from "../../types/ilocale";
import { DefaultError } from "@/common/error-code";
import { createSlice } from "@reduxjs/toolkit";
import { fetchLocalesThunk } from "../actions/gql-async-thunk";

export interface ILocalesStore {
  loading: boolean;
  data: ILocale[] | null;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialLocalesStore: ILocalesStore = {
  loading: true,
  data: null,
  rejected: false,
};

export const localesSlice = createSlice({
  name: "locales",
  initialState: initialLocalesStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchLocalesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLocalesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.locales;
      state.error = action.payload.error
        ? action.payload.error.message
        : undefined;
    });
    builder.addCase(fetchLocalesThunk.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export default localesSlice.reducer;
