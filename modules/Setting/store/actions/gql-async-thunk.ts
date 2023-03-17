import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLocales, fetchCurrencies } from "./gql";

export const fetchLocalesThunk = createAsyncThunk(
  "locale/fetchLocales",
  fetchLocales
);

export const fetchCurrenciesThunk = createAsyncThunk(
  "currency/fetchCurrencies",
  fetchCurrencies
);
