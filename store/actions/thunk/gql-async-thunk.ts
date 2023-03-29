import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLocales, fetchCurrencies, fetchCountries } from "../gql";

export const fetchLocalesThunk = createAsyncThunk(
  "locale/fetchLocales",
  fetchLocales
);

export const fetchCurrenciesThunk = createAsyncThunk(
  "currency/fetchCurrencies",
  fetchCurrencies
);

export const fetchCountriesThunk = createAsyncThunk(
  "currency/fetchCountries",
  fetchCountries
);
