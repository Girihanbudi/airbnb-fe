import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

export interface AnimatedUnderlineProps extends BoxProps {
  active?: boolean;
  triggered?: boolean;
}

export const AnimatedUnderline = ({
  active = false,
  triggered = true,
  ...props
}: AnimatedUnderlineProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 1,
        height: "2px",
        borderRadius: 50,
        backgroundColor: active
          ? theme.palette.primary.main
          : theme.palette.primary[100],
        transition: "0.3s",
        ...(active ? { width: "100%" } : { width: triggered ? "100%" : "0%" }),
      }}
      {...props}
    />
  );
};

export default AnimatedUnderline;
