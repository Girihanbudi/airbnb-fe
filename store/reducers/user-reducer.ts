import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/types";
import { fetchUserInfoThunk, signOutThunk } from "../actions/thunk";

export interface IUserInfoStore {
  loading: boolean;
  data: IUser | null;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

const initialUserInfoStore: IUserInfoStore = {
  loading: true,
  data: null,
  rejected: false,
};

export const userInfoSlice = createSlice({
  name: "user",
  initialState: initialUserInfoStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // fetch info
    builder.addCase(fetchUserInfoThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.user;
      state.error = action.payload.error
        ? action.payload.error.message
        : undefined;
    });
    builder.addCase(fetchUserInfoThunk.rejected, (state) => {
      state.loading = false;
      state.data = null;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });

    // signout
    builder.addCase(signOutThunk.fulfilled, (state, action) => {
      state.loading = false;
      const { error } = action.payload.data;
      state.data = null;
      state.error = error ? error.message : undefined;
    });
  },
});

export default userInfoSlice.reducer;
