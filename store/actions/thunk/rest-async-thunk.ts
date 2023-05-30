import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut, changeLocale, changeCurrency } from "../rest";

export const signOutThunk = createAsyncThunk("user/signOut", signOut);

export const changeLocaleThunk = createAsyncThunk(
  "user/changeLocale",
  changeLocale
);

export const changeCurrencyThunk = createAsyncThunk(
  "user/changeCurrency",
  changeCurrency
);
