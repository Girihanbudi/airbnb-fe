import "@/styles/globals.css";
import "@/styles/components/swiper.css";

import lightTheme from "@/styles/themes/lightTheme";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
