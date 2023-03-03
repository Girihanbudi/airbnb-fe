import { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";

import { Stack } from "@mui/material";

import Box, { BoxProps } from "@mui/material/Box";
import Typography, { TypographyProps } from "@mui/material/Typography";
import AnimatedUnderline from "../AnimatedUnderline";

export interface UnderlinedTextProps extends TypographyProps {
  hovered?: boolean;
  active?: boolean;
  underlineProp?: BoxProps;
}

export const UnderlinedText = ({
  hovered,
  active = false,
  children,
  underlineProp,
  sx,
  ...props
}: UnderlinedTextProps) => {
  const theme = useTheme();
  const [hover, setHover] = useState(hovered !== undefined ? hovered : false);

  return (
    <Stack
      alignItems={"center"}
      onMouseEnter={hovered === undefined ? () => setHover(true) : undefined}
      onMouseLeave={hovered === undefined ? () => setHover(false) : undefined}
    >
      <Typography
        sx={{
          color: active
            ? theme.palette.primary.main
            : theme.palette.primary[100],
          ...sx,
        }}
        {...props}
      >
        {children}
      </Typography>
      {hovered === undefined ? (
        <AnimatedUnderline active={active} triggered={hover} />
      ) : (
        <AnimatedUnderline active={active} triggered={hovered} />
      )}
    </Stack>
  );
};

export default UnderlinedText;
