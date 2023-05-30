import { useState } from "react";
import { useTranslation } from "next-i18next";

import { IconButton } from "@mui/material";
import { Tabs, SlideDialog } from "@/components";
import Currency from "./Currency";
import Locale from "./Locale";

import LanguageIcon from "@mui/icons-material/Language";

export const Setting = () => {
  const { t } = useTranslation("header");

  const [open, setOpen] = useState(false);

  const handleOpenSetting = () => {
    setOpen(true);
  };

  const handleCloseSetting = () => {
    setOpen(false);
  };

  const tabHeaders = [t("tabLocale"), t("tabCurrency")];
  const tabContents = [<Locale key={0} />, <Currency key={1} />];

  return (
    <>
      <IconButton onClick={handleOpenSetting}>
        <LanguageIcon />
      </IconButton>
      <SlideDialog
        open={open}
        handleClose={handleCloseSetting}
        maxWidth="lg"
        PaperProps={{
          sx: { height: "85%", borderRadius: "10px" },
        }}
      >
        <Tabs headers={tabHeaders} contents={tabContents}></Tabs>
      </SlideDialog>
    </>
  );
};

export default Setting;
