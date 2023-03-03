import { CardActionArea, CardContent } from "@mui/material";
import { CardProps } from "@mui/material/Card";
import Card from "./Card";

export interface CardButtonProps extends CardProps {}

export const CardButton = ({ children, ...cardProps }: CardButtonProps) => {
  return (
    <Card elevation={0} {...cardProps}>
      <CardActionArea
        sx={{
          p: 1,
          borderRadius: "50px",
        }}
      >
        <CardContent
          sx={{
            p: 0,
            m: 0,
            "&:last-child": {
              paddingBottom: "0 !important",
            },
          }}
        >
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardButton;
