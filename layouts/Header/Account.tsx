import React from "react";
import { useTranslation } from "next-i18next";

import {
  Menu,
  MenuItem,
  Divider,
  Stack,
  MenuProps,
  styled,
} from "@mui/material";
import CardButton from "@/components/CardButton";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    minWidth: 250,
    borderRadius: 10,
    boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
  },
}));

const Account = () => {
  const { t } = useTranslation("header");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
      <StyledMenu
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
        <MenuItem onClick={handleClose} sx={{ fontWeight: 600 }}>
          {t("signUp")}
        </MenuItem>
        <MenuItem onClick={handleClose}>{t("login")}</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>{t("airbnbSetup")}</MenuItem>
        <MenuItem onClick={handleClose}>{t("hostAnExperience")}</MenuItem>
        <MenuItem onClick={handleClose}>{t("help")}</MenuItem>
      </StyledMenu>
    </>
  );
};

export default Account;
