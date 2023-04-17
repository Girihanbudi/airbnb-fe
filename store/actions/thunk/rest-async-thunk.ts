import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "../rest";

export const signOutThunk = createAsyncThunk("user/signOut", signOut);
