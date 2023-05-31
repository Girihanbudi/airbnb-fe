import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
  cookieLocaleSelector,
  localesSelector,
} from "@/store";

import { Typography, Box, Grid } from "@mui/material";
import { OptionButton, OptionButtonLoader, DefaultError } from "@/components";

import { fetchLocalesThunk, changeLocaleThunk } from "@/store/actions/thunk";

export const Locale = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // Redux
  const cookieLocale = useAppSelector(cookieLocaleSelector);
  const locales = useAppSelector(localesSelector);
  useEffect(() => {
    dispatch(fetchLocalesThunk({ keys: ["name", "local", "code"] }));
  }, [dispatch]);

  const onSelectLocale = async (code: string) => {
    dispatch(changeLocaleThunk(code));
  };

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
                active={locale.code === cookieLocale.current}
                mainText={locale.local}
                subText={locale.name}
                onClick={() => onSelectLocale(locale.code)}
              />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return <DefaultError sx={{ py: 12 }}>{t(locales.error!)}</DefaultError>;
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("txtChooseLanguageAndRegion")}
      </Typography>
      <Box sx={{ pt: 2, height: "100%" }}>{<RenderContent />}</Box>
    </Box>
  );
};

export default Locale;
