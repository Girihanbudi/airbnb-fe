import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchLocales from "./gql/fetch-locales";

export const fetchLocalesThunk = createAsyncThunk(
  "locale/fetchLocales",
  fetchLocales
);
