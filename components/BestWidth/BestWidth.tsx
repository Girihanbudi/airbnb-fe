import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

export const BestWidth = styled(Box)<BoxProps>(({ theme }) => ({
  maxWidth: "1280px",
  width: "100%",
}));

export default BestWidth;
