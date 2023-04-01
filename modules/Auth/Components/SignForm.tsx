import { useState, useEffect, UIEvent } from "react";
import Link from "next/link";
import { RootState, useAppSelector, useAppDispatch } from "@/store";

import {
  Typography,
  Box,
  Stack,
  MenuItem,
  Divider,
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import AlignedButtonIcon from "@/components/AlignedButtonIcon";
import { OutlinedTextField } from "@/components/OutlinedTextField";
import SlideDialog from "@/components/SlideDialog";
import AnimatedGradientButton from "@/components/AnimatedGradientButton";
import OutlinedSelectField from "@/components/OutlinedSelectField";

import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import {
  fetchCountriesThunk,
  fetchMoreCountriesThunk,
} from "@/store/actions/thunk";

export interface SignFormProps {
  open: boolean;
  onClose: () => void;
}

export const SignForm = ({ open, onClose }: SignFormProps) => {
  const { t } = useTranslation("auth");
  const dispatch = useAppDispatch();

  const [selectedPhoneCode, setSelectedPhoneCode] = useState<string>("");

  const onPhoneCodeChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedPhoneCode(event.target.value as string);
  };

  // Redux
  const countries = useAppSelector((state: RootState) => state.countries);
  useEffect(() => {
    dispatch(fetchCountriesThunk({ keys: ["name", "phoneCode"] }));
  }, [dispatch]);

  const fetchMoreCountries = (event: UIEvent<HTMLElement>) => {
    const element = event.currentTarget;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      if (countries.meta) {
        if (countries.meta.page >= countries.meta.pageSize) return;
        const page = countries.meta.page + 1;
        dispatch(
          fetchMoreCountriesThunk({ keys: ["name", "phoneCode"], page: page })
        );
      }
    }
  };

  const Title = () => {
    return (
      <Typography sx={{ fontWeight: "bold" }}>{t("loginSignup")}</Typography>
    );
  };

  return (
    <SlideDialog
      open={open}
      dialogTitle={<Title />}
      showDivider
      maxWidth="sm"
      handleClose={onClose}
    >
      <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
        {t("welcomeToAirbnb")}
      </Typography>
      <Stack sx={{ my: 1 }}>
        <OutlinedSelectField
          label="Country/Region"
          value={selectedPhoneCode}
          onValueChange={onPhoneCodeChange}
          selectProps={{
            sx: { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
          }}
          menuProps={{
            PaperProps: {
              onScroll: fetchMoreCountries,
            },
          }}
        >
          {countries.data &&
            countries.data.map((country, i) => (
              <MenuItem key={i} value={country.phoneCode}>
                {`${country.name} (+${country.phoneCode})`}
              </MenuItem>
            ))}
        </OutlinedSelectField>
        <OutlinedTextField
          label="Phone number"
          inputProps={{
            startAdornment: selectedPhoneCode && (
              <InputAdornment position="start">
                +{selectedPhoneCode}
              </InputAdornment>
            ),
            sx: { borderBottomLeftRadius: 5, borderBottomRightRadius: 5 },
          }}
        />
        <Typography sx={{ fontSize: 12.5, my: 1 }}>
          {t("rateWarningPhone")}.{" "}
          <Box component="span" sx={{ fontWeight: "bold" }}>
            <Link href="/help/privacy-policy" target="_blank">
              {t("privacyPolicy")}
            </Link>
          </Box>
        </Typography>
        <AnimatedGradientButton sx={{ my: 1 }}>
          {t("continueWithPhone")}
        </AnimatedGradientButton>
      </Stack>
      <Divider sx={{ my: 1 }}>{t("continueOr")}</Divider>
      <Stack spacing={1} sx={{ my: 1, pt: 1.5 }}>
        <a
          onClick={() => {
            window.open(
              `${process.env.NEXT_PUBLIC_BACKEND}/sessions/google`,
              "Popup",
              "location,status,scrollbars,resizable,width=600, height=600"
            );
            onClose();
          }}
        >
          <AlignedButtonIcon
            fullWidth
            icon={<GoogleIcon sx={{ color: "#ff4000" }} />}
            sx={{ py: 1.5 }}
          >
            {" "}
            {t("continueWithGoogle")}
          </AlignedButtonIcon>
        </a>

        <AlignedButtonIcon
          fullWidth
          icon={<MailOutlineOutlinedIcon sx={{ color: "#000000" }} />}
          sx={{ py: 1.5 }}
        >
          {t("continueWithEmail")}
        </AlignedButtonIcon>
      </Stack>
    </SlideDialog>
  );
};

export default SignForm;
