import { useState, MouseEvent } from "react";
import { useTranslation } from "next-i18next";
import { getCookie } from "cookies-next";

import { MenuItem, Divider, Stack } from "@mui/material";
import CardButton from "@/components/CardButton";
import CardMenu from "@/components/CardMenu";
import { SignForm } from "@/modules/Auth/Components";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IsLoggedIn } from "@/types";

const AccountView = () => {
  const { t } = useTranslation("header");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLoggedIn = getCookie(IsLoggedIn);

  // sign form
  const [isSignFormOpen, setIsSignFormOpen] = useState<boolean>(false);
  const openSignForm = () => {
    setIsSignFormOpen(true);
    handleClose();
  };
  const closeSignForm = () => {
    setIsSignFormOpen(false);
  };

  const loggedActionContent = [
    <MenuItem key={t("signUp")} onClick={openSignForm} sx={{ fontWeight: 600 }}>
      {t("signUp")}
    </MenuItem>,
    <MenuItem key={t("logIn")} onClick={openSignForm}>
      {t("logIn")}
    </MenuItem>,
    <Divider key={"divider-1"} />,
    <MenuItem key={t("airbnbSetup")} onClick={handleClose}>
      {t("airbnbSetup")}
    </MenuItem>,
    <MenuItem key={t("hostAnExperience")} onClick={handleClose}>
      {t("hostAnExperience")}
    </MenuItem>,
    <MenuItem key={t("help")} onClick={handleClose}>
      {t("help")}
    </MenuItem>,
  ];

  const unloggedActionContent = [
    <MenuItem
      key={t("messages")}
      onClick={openSignForm}
      sx={{ fontWeight: 600 }}
    >
      {t("messages")}
    </MenuItem>,
    <MenuItem key={t("trips")} onClick={openSignForm} sx={{ fontWeight: 600 }}>
      {t("trips")}
    </MenuItem>,
    <MenuItem
      key={t("wishlists")}
      onClick={openSignForm}
      sx={{ fontWeight: 600 }}
    >
      {t("wishlists")}
    </MenuItem>,
    <Divider key={"divider-2"} />,
    <MenuItem key={t("airbnbSetup")} onClick={handleClose}>
      {t("airbnbSetup")}
    </MenuItem>,
    <MenuItem key={t("hostAnExperience")} onClick={handleClose}>
      {t("hostAnExperience")}
    </MenuItem>,
    <MenuItem key={t("referAHost")} onClick={handleClose}>
      {t("referAHost")}
    </MenuItem>,
    <MenuItem key={t("account")} onClick={handleClose}>
      {t("account")}
    </MenuItem>,
    <Divider key={"divider-3"} />,
    <MenuItem key={t("help")} onClick={handleClose}>
      {t("help")}
    </MenuItem>,
    <MenuItem key={t("logOut")} onClick={handleClose}>
      {t("logOut")}
    </MenuItem>,
  ];

  return (
    <>
      <CardButton
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack direction="row">
          <MenuIcon />
          <AccountCircleIcon />
        </Stack>
      </CardButton>
      <CardMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: 1 }}
      >
        {!isLoggedIn ? loggedActionContent : unloggedActionContent}
      </CardMenu>

      <SignForm open={isSignFormOpen} onClose={closeSignForm} />
    </>
  );
};

export default AccountView;
