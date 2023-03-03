import { useTheme } from "@mui/material/styles";
import MuiCard, { CardProps } from "@mui/material/Card";

export const Card = ({ sx, ...props }: CardProps) => {
  const theme = useTheme();

  return (
    <MuiCard
      sx={{
        borderRadius: "50px",
        border: 1,
        borderColor: theme.palette.primary["100"],
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.2)",
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default Card;
