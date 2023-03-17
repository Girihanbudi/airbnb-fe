import { Card, CardActionArea, CardContent, Skeleton } from "@mui/material";
import { CardProps } from "@mui/material/Card";

export interface OptionButtonLoaderProps extends CardProps {
  active?: boolean;
  renderMain?: boolean;
  renderSub?: boolean;
}

export const OptionButtonLoader = ({
  active = false,
  renderMain = true,
  renderSub = true,
  ...cardProps
}: OptionButtonLoaderProps) => {
  return (
    <Card
      elevation={0}
      sx={
        active ? { border: 1, borderRadius: "10px" } : { borderRadius: "10px" }
      }
      {...cardProps}
    >
      <CardActionArea>
        <CardContent sx={{ py: 2 }}>
          {renderMain && <Skeleton variant="text" width="50%" />}
          {renderSub && <Skeleton variant="text" width="100%" />}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default OptionButtonLoader;
