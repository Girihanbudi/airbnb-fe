import { DefaultError } from "@/common";
import { createSlice } from "@reduxjs/toolkit";
import { CookieValueTypes, getCookie } from "cookies-next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { RootState } from "..";
import { changeLocaleThunk } from "../actions/thunk/rest-async-thunk";

import EnTranslations from "@/public/locales/en/translation";
import IdTranslations from "@/public/locales/id/translation";

export const languageCodes = ["en", "id"] as const;
export const languageDisplay = ["English", "Indonesia"] as const;

export interface ICookieLocaleStore {
  loading: boolean;
  current: CookieValueTypes;
  error?: string;
  errorCode?: string;
  rejected: boolean;
}

// A resources that contain key and the translation to display in frontend
export const resources = {
  en: {
    translation: {
      ...EnTranslations,
    },
  },
  id: {
    translation: {
      ...IdTranslations,
    },
  },
};

// Using i18n to handle multilanguage purpose in future
i18n.use(initReactI18next).init({
  resources,
  supportedLngs: languageCodes,
  fallbackLng: languageCodes[0], //default language
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export const getLocale = (): string => {
  const cookieVal = getCookie("locale");
  const strLocale = cookieVal ? cookieVal.toString() : languageCodes[0];
  return strLocale;
};

const initialCookieLocaleStore: ICookieLocaleStore = {
  loading: true,
  current: getLocale(),
  rejected: false,
};

export const cookieLocaleSlice = createSlice({
  name: "cookieLocale",
  initialState: initialCookieLocaleStore,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(changeLocaleThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(changeLocaleThunk.fulfilled, (state, action) => {
      const cookieLocale = getLocale();

      state.loading = false;
      state.current = cookieLocale;
      i18n.changeLanguage(cookieLocale);
      state.error = action.payload.data.error
        ? action.payload.data.error.message
        : undefined;
    });
    builder.addCase(changeLocaleThunk.rejected, (state) => {
      state.loading = false;
      state.error = DefaultError.DEFAULT_SYS_500.key;
      state.rejected = true;
    });
  },
});

export { i18n };
export const cookieLocaleSelector = (state: RootState) => state.cookieLocale;
export default cookieLocaleSlice.reducer;
