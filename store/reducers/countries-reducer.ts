import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { IPagination, ICountry, defaultPagination } from "@/types";
import {
  fetchCountriesThunk,
  fetchMoreCountriesThunk,
} from "../actions/thunk/gql-async-thunk";

export interface ICountriesStore {
  loading: boolean;
  data: ICountry[] | null;
  meta: IPagination | null;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialCountriesStore: ICountriesStore = {
  loading: true,
  data: null,
  meta: null,
  rejected: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialCountriesStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Initial fetch countries
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

    // Fetch more countries if any
    builder.addCase(fetchMoreCountriesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMoreCountriesThunk.fulfilled, (state, action) => {
      state.loading = false;
      const newData = action.payload.data.countries;
      if (newData) {
        if (state.data && newData.data)
          state.data = [...state.data, ...newData.data];
        else if (newData.data) state.data = newData.data;
        state.meta = action.payload.data.countries.meta;
      }

      state.error = action.payload.error
        ? action.payload.error.message
        : undefined;
    });
    builder.addCase(fetchMoreCountriesThunk.rejected, (state) => {
      state.loading = false;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export default countriesSlice.reducer;
