import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Box } from "@mui/material";

export interface AlignedButtonIconProps extends ButtonProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Aligned Button Icon
 * Button that contain icon in the left side and text | other react node in the middle
 * e.g. Login with facebook | Login with google
 */
export const AlignedButtonIcon = ({
  sx,
  icon,
  children,
  ...props
}: AlignedButtonIconProps) => {
  return (
    <Button
      fullWidth
      variant="outlined"
      sx={{
        textTransform: "none",
        borderRadius: "10px",
        ...sx,
      }}
      {...props}
      // lableStyle={{ position: 'absolute', top: 0, left: -10 }}
    >
      <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
        <Box
          sx={{
            mx: 1,
            marginRight: "auto",
            marginLeft: 0,
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
          }}
        >
          {icon}
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Button>
  );
};

export default AlignedButtonIcon;
