import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useTranslation } from "next-i18next";
import { RootState, useAppSelector, useAppDispatch } from "@/store";

import { Typography, Box, Grid } from "@mui/material";
import OptionButton, { OptionButtonLoader } from "@/components/OptionButton";
import { DefaultError } from "@/components/Error";

import { fetchCurrenciesThunk } from "../store/actions/gql-async-thunk";

export const Currency = () => {
  const { t } = useTranslation(["header", "default-error"]);
  const dispatch = useAppDispatch();

  const currentCurrency = getCookie("currency");

  // Redux
  const curencies = useAppSelector((state: RootState) => state.currencies);
  useEffect(() => {
    dispatch(fetchCurrenciesThunk(["name", "symbol", "code"]));
  }, [dispatch]);

  const RenderContent = () => {
    if (curencies.loading) {
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
    } else if (curencies.data) {
      return (
        <Grid container spacing={2}>
          {curencies.data.map((currency, i) => (
            <Grid key={i} item md={2.4} sm={4} xs={6}>
              <OptionButton
                active={currency.code === currentCurrency}
                mainText={currency.name}
                subText={`${currency.code} - ${currency.symbol}`}
              />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <DefaultError sx={{ py: 12 }}>
          {t(`default-error:${curencies.error!}`)}
        </DefaultError>
      );
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("header:chooseCurrency")}
      </Typography>
      <Box sx={{ pt: 2, height: "100%" }}>{<RenderContent />}</Box>
    </Box>
  );
};

export default Currency;
