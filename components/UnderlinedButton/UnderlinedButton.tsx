import { ButtonProps } from "@mui/material/Button";
import { TypographyProps } from "@mui/material/Typography";
import PlainButton from "../PlainButton";
import UnderlinedText from "../UnderlinedText";

export interface UnderlinedButtonProps extends ButtonProps {
  active?: boolean;
  typographyProps?: TypographyProps;
}

export const UnderlinedButton = ({
  active,
  children,
  typographyProps,
  ...props
}: UnderlinedButtonProps) => {
  return (
    <PlainButton {...props}>
      <UnderlinedText active={active} {...typographyProps}>
        {children}
      </UnderlinedText>
    </PlainButton>
  );
};

export default UnderlinedButton;
