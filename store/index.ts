import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  localesReducer,
  currenciesReducer,
  countriesReducer,
  userReducer,
  propertyTypesReducer,
  cookieLocaleReducer,
  cookieCurrencyReducer,
} from "./reducers";

export const store = configureStore({
  reducer: {
    cookieLocale: cookieLocaleReducer,
    cookieCurrency: cookieCurrencyReducer,

    locales: localesReducer,
    currencies: currenciesReducer,
    countries: countriesReducer,
    user: userReducer,
    propertyTypes: propertyTypesReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// app/hooks.ts

export * from "./reducers";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// assigning store to next wrapper
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
