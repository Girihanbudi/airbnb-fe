import Box, { BoxProps } from "@mui/material/Box";
import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface DefaultErrorProps extends BoxProps {
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export const DefaultError = ({
  Icon,
  children,
  sx,
  ...props
}: DefaultErrorProps) => {
  return (
    <Box
      sx={{
        p: 2,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...props}
    >
      <Stack alignItems="center" spacing={2}>
        {Icon ? (
          <Icon />
        ) : (
          <ReportProblemIcon sx={{ fontSize: "120px" }} color="secondary" />
        )}

        {typeof children === "string" ? (
          <Typography variant="h5">{children}</Typography>
        ) : (
          children
        )}
      </Stack>
    </Box>
  );
};

export default DefaultError;
