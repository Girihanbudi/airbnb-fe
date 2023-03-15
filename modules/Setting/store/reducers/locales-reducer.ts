import ILocale from "../../types/ilocale";
import { DefaultError } from "@/common/error-code";
import { createSlice } from "@reduxjs/toolkit";
import { fetchLocalesThunk } from "../actions/gql-async-thunk";

export interface ILocalesStore {
  loading: boolean;
  errors?: Error;
  data: ILocale[] | null;
}

const initialLocalesStore: ILocalesStore = {
  loading: true,
  data: null,
};

export const localesSlice = createSlice({
  name: "locales",
  initialState: initialLocalesStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // Fetch Locale Reducer
    builder.addCase(fetchLocalesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLocalesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.locales;
      // state.errors = action.payload.error;
    });
    builder.addCase(fetchLocalesThunk.rejected, (state) => {
      state.loading = false;
      state.data = null;
      // state.errors = DefaultError.DEFAULT_SYS_500.errorEn;
    });
  },
});

export default localesSlice.reducer;
