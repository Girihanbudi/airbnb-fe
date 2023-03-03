import { useTheme } from "@mui/material/styles";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { CardProps } from "@mui/material/Card";
import { TypographyProps } from "@mui/material/Typography";

export interface OptionButtonProps extends CardProps {
  active?: boolean;
  mainText?: string;
  mainProps?: TypographyProps;
  subText?: string;
  subProps?: TypographyProps;
}

export const OptionButton = ({
  active = false,
  mainText,
  mainProps,
  subText,
  subProps,
  children,
  ...cardProps
}: OptionButtonProps) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={
        active ? { border: 1, borderRadius: "10px" } : { borderRadius: "10px" }
      }
      {...cardProps}
    >
      <CardActionArea>
        <CardContent sx={{ py: 1 }}>
          <Typography {...mainProps}>{mainText}</Typography>
          <Typography color={theme.palette.primary[100]} {...subProps}>
            {subText}
          </Typography>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OptionButton;
