import "@/styles/globals.css";
import "@/styles/components/swiper.css";

import lightTheme from "@/styles/themes/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import { store, i18n, getLocale } from "@/store";

function MyApp({ Component, pageProps }: AppProps) {
  i18n.changeLanguage(getLocale());

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
