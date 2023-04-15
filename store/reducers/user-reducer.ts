import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/types";
import { fetchUserInfoThunk } from "../actions/thunk/gql-async-thunk";

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
    builder.addCase(fetchUserInfoThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.userInfo;
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
  },
});

export default userInfoSlice.reducer;
