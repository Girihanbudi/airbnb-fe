import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import { RootState, useAppSelector, useAppDispatch } from "@/store";

import { Typography, Box, Grid } from "@mui/material";
import OptionButton, { OptionButtonLoader } from "@/components/OptionButton";
import { DefaultError } from "@/components/Error";

import { fetchLocalesThunk } from "@/store/actions/thunk";

export const LanguageAndRegion = () => {
  const { t } = useTranslation(["header", "default-error"]);
  const dispatch = useAppDispatch();

  const currentLocale = getCookie("locale");

  // Redux
  const locales = useAppSelector((state: RootState) => state.locales);
  useEffect(() => {
    dispatch(fetchLocalesThunk({ keys: ["name", "local", "code"] }));
  }, [dispatch]);

  const RenderContent = () => {
    if (locales.loading) {
      const skeletonCount = 20;
      return (
        <Grid container spacing={2}>
          {[...Array(skeletonCount)].map((e, i) => (
            <Grid key={`${e}-${i}`} item md={2.4} sm={4} xs={6}>
              <OptionButtonLoader active={i === 0} />
            </Grid>
          ))}
        </Grid>
      );
    } else if (locales.data) {
      return (
        <Grid container spacing={2}>
          {locales.data.map((locale, i) => (
            <Grid key={i} item md={2.4} sm={4} xs={6}>
              <OptionButton
                active={locale.code === currentLocale}
                mainText={locale.local}
                subText={locale.name}
              />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <DefaultError sx={{ py: 12 }}>
          {t(`default-error:${locales.error!}`)}
        </DefaultError>
      );
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("header:chooseLanguageAndRegion")}
      </Typography>
      <Box sx={{ pt: 2, height: "100%" }}>{<RenderContent />}</Box>
    </Box>
  );
};

export default LanguageAndRegion;
