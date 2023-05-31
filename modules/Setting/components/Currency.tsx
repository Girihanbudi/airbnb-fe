import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  useAppDispatch,
  useAppSelector,
  cookieCurrencySelector,
  currenciesSelector,
} from "@/store";
import { Typography, Box, Grid } from "@mui/material";
import { OptionButton, OptionButtonLoader, DefaultError } from "@/components";

import {
  fetchCurrenciesThunk,
  changeCurrencyThunk,
} from "@/store/actions/thunk";

export const Currency = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // Redux
  const cookieCurrency = useAppSelector(cookieCurrencySelector);
  const currencies = useAppSelector(currenciesSelector);
  useEffect(() => {
    dispatch(fetchCurrenciesThunk({ keys: ["name", "symbol", "code"] }));
  }, [dispatch]);

  const onSelectCurrency = async (code: string) => {
    dispatch(changeCurrencyThunk(code));
  };

  const RenderContent = () => {
    if (currencies.loading) {
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
    } else if (currencies.data) {
      return (
        <Grid container spacing={2}>
          {currencies.data.map((currency, i) => (
            <Grid key={i} item md={2.4} sm={4} xs={6}>
              <OptionButton
                active={currency.code === cookieCurrency.current}
                mainText={currency.name}
                subText={`${currency.code} - ${currency.symbol}`}
                onClick={() => onSelectCurrency(currency.code)}
              />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <DefaultError sx={{ py: 12 }}>{t(currencies.error!)}</DefaultError>
      );
    }
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("txtChooseCurrency")}
      </Typography>
      <Box sx={{ pt: 2, height: "100%" }}>{<RenderContent />}</Box>
    </Box>
  );
};

export default Currency;
