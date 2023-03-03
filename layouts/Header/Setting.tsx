import { useState } from "react";
import { useTranslation } from "next-i18next";

import {
  IconButton,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  Box,
  Grid,
} from "@mui/material";

import { Slide } from "@/components/Transition";
import OptionButton from "@/components/OptionButton";
import Tabs from "@/components/Tabs";

import LanguageIcon from "@mui/icons-material/Language";
import CloseIcon from "@mui/icons-material/Close";

const LanguageAndRegion = () => {
  const { t } = useTranslation("header");

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("chooseLanguageAndRegion")}
      </Typography>
      <Box sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={2.4} sm={4} xs={6}>
            <OptionButton active mainText="English" subText="United State" />
          </Grid>
          <Grid item md={2.4} sm={4} xs={6}>
            <OptionButton mainText="English" subText="United State" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Currency = () => {
  const { t } = useTranslation("header");

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 500 }}>
        {t("chooseCurrency")}
      </Typography>
      <Box sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          <Grid item md={2.4} sm={4} xs={6}>
            <OptionButton
              active
              mainText="United State Dollar"
              subText="USD – $"
            />
          </Grid>
          <Grid item md={2.4} sm={4} xs={6}>
            <OptionButton mainText="United State Dollar" subText="USD – $" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Setting = () => {
  const { t } = useTranslation("header");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const tabHeaders = [t("tabLocale"), t("tabCurrency")];
  const tabContents = [<LanguageAndRegion key={0} />, <Currency key={1} />];

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <LanguageIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Slide}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="lg"
        PaperProps={{ sx: { height: "90%", borderRadius: "10px" } }}
      >
        <DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Tabs headers={tabHeaders} contents={tabContents}></Tabs>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Setting;
