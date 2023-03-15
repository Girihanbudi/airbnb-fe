import { Menu, MenuProps, styled } from "@mui/material";

const CardMenu = styled((props: MenuProps) => (
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

export default CardMenu;
