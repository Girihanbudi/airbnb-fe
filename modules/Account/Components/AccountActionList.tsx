import Link from "next/link";
import { useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { getCookie } from "cookies-next";
import { useAppDispatch } from "@/store";

import { MenuItem, Divider, Stack } from "@mui/material";
import { CardButton, CardMenu, PlainLink } from "@/components";

import { SignForm } from "@/modules/Auth/Components";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { IsLoggedIn } from "@/types";
import { signOutThunk } from "@/store/actions/thunk";

const AccountView = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLoggedIn = getCookie(IsLoggedIn);

  const signOut = () => {
    dispatch(signOutThunk());
  };

  // sign form
  const [isSignFormOpen, setIsSignFormOpen] = useState<boolean>(false);
  const openSignForm = () => {
    setIsSignFormOpen(true);
    handleClose();
  };
  const closeSignForm = () => {
    setIsSignFormOpen(false);
  };

  const unloggedActionContent = [
    <MenuItem
      key={t("txtSignUp")}
      onClick={openSignForm}
      sx={{ fontWeight: 600 }}
    >
      {t("txtSignUp")}
    </MenuItem>,
    <MenuItem key={t("txtLogIn")} onClick={openSignForm}>
      {t("txtLogIn")}
    </MenuItem>,
    <Divider key={"divider-1"} />,
    <MenuItem key={t("txtAirbnbSetup")} onClick={handleClose}>
      {t("txtAirbnbSetup")}
    </MenuItem>,
    <MenuItem key={t("txtHostAnExperience")} onClick={handleClose}>
      {t("txtHostAnExperience")}
    </MenuItem>,
    <MenuItem key={t("txtHelp")} onClick={handleClose}>
      {t("txtHelp")}
    </MenuItem>,
  ];

  const loggedActionContent = [
    <MenuItem
      key={t("txtMessages")}
      onClick={openSignForm}
      sx={{ fontWeight: 600 }}
    >
      {t("txtMessages")}
    </MenuItem>,
    <MenuItem
      key={t("txtTrips")}
      onClick={openSignForm}
      sx={{ fontWeight: 600 }}
    >
      {t("txtTrips")}
    </MenuItem>,
    <MenuItem
      key={t("txtWishlists")}
      onClick={openSignForm}
      sx={{ fontWeight: 600 }}
    >
      {t("txtWishlists")}
    </MenuItem>,
    <Divider key={"divider-2"} />,
    <MenuItem key={t("txtAirbnbSetup")} onClick={handleClose}>
      {t("txtAirbnbSetup")}
    </MenuItem>,
    <MenuItem key={t("txtHostAnExperience")} onClick={handleClose}>
      {t("txtHostAnExperience")}
    </MenuItem>,
    <MenuItem key={t("txtReferAHost")} onClick={handleClose}>
      {t("txtReferAHost")}
    </MenuItem>,
    <MenuItem key={t("v")} onClick={handleClose}>
      <Link href="/account-settings">{t("txtAccount")}</Link>
    </MenuItem>,
    <Divider key={"divider-3"} />,
    <MenuItem key={t("txtHelp")} onClick={handleClose}>
      {t("txtHelp")}
    </MenuItem>,
    <MenuItem
      key={t("txtLogOut")}
      onClick={() => {
        handleClose();
        signOut();
      }}
    >
      {t("txtLogOut")}
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
        {isLoggedIn ? loggedActionContent : unloggedActionContent}
      </CardMenu>

      <SignForm open={isSignFormOpen} onClose={closeSignForm} />
    </>
  );
};

export default AccountView;
