import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { IPagination, IPropertyType } from "@/types";
import { fetchPropertyTypesInfoThunk } from "../actions/thunk/gql-async-thunk";

export interface IPropertyTypesStore {
  loading: boolean;
  data: IPropertyType[] | null;
  meta: IPagination | null;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialPropertyTypesStore: IPropertyTypesStore = {
  loading: true,
  data: null,
  meta: null,
  rejected: false,
};

export const propertyTypesSlice = createSlice({
  name: "propertyTypes",
  initialState: initialPropertyTypesStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Initial fetch propertyTypes
    builder.addCase(fetchPropertyTypesInfoThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPropertyTypesInfoThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.propertyTypes.data;
      state.meta = action.payload.data.propertyTypes.meta;
      state.error = action.payload.error
        ? action.payload.error.message
        : undefined;
    });
    builder.addCase(fetchPropertyTypesInfoThunk.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export default propertyTypesSlice.reducer;
