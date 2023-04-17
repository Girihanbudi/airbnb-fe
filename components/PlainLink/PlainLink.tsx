import Link, { LinkProps } from "next/link";
import { ReactNode, CSSProperties } from "react";
import { useTheme } from "@mui/material/styles";

export interface PlainLinkProps extends LinkProps {
  style?: CSSProperties;
  children?: ReactNode;
}

export const PlainLink = ({ style, ...props }: PlainLinkProps) => {
  const theme = useTheme();

  return (
    <Link
      style={{
        textDecoration: "none",
        color: theme.palette.primary.main,
        ...style,
      }}
      {...props}
    />
  );
};

export default PlainLink;
