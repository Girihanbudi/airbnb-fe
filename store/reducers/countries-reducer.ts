import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { IPagination, ICountry } from "@/types";
import { fetchCountriesThunk } from "../actions/thunk/gql-async-thunk";

export interface ICountriesStore {
  loading: boolean;
  data: ICountry[] | null;
  meta?: IPagination | null;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialCountriesStore: ICountriesStore = {
  loading: true,
  data: null,
  rejected: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialCountriesStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.countries.data;
      state.meta = action.payload.data.countries.meta;
      state.error = action.payload.error
        ? action.payload.error.message
        : undefined;
    });
    builder.addCase(fetchCountriesThunk.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export default countriesSlice.reducer;
