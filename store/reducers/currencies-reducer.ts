import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { ICurrency } from "@/types";
import { fetchCurrenciesThunk } from "../actions/thunk/gql-async-thunk";

export interface ICurrenciesStore {
  loading: boolean;
  data: ICurrency[] | null;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialCurrenciesStore: ICurrenciesStore = {
  loading: true,
  data: null,
  rejected: false,
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState: initialCurrenciesStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCurrenciesThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrenciesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.currencies;
      state.error = action.payload.error
        ? action.payload.error.message
        : undefined;
    });
    builder.addCase(fetchCurrenciesThunk.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export default currenciesSlice.reducer;
