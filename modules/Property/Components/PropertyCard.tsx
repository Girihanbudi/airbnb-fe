import { useTheme } from "@mui/material/styles";

import { Box, Stack, Typography } from "@mui/material";
import { Carousel } from "@/components";

import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const PropertyCard = () => {
  const theme = useTheme();

  const images = [
    "https://image-tc.galaxy.tf/wijpeg-5fj3s48cv2nf9rs8mv5amtpab/select-room-one-bedroom-3.jpg?width=1920",
    "https://image-tc.galaxy.tf/wijpeg-2jawsp7ojbtyt0s2t9mthrt3l/presidential-suite-privatepool.jpg?width=560",
    "https://image-tc.galaxy.tf/wijpeg-5fj3s48cv2nf9rs8mv5amtpab/select-room-one-bedroom-3.jpg?width=1920",
    "https://image-tc.galaxy.tf/wijpeg-2jawsp7ojbtyt0s2t9mthrt3l/presidential-suite-privatepool.jpg?width=560",
    "https://image-tc.galaxy.tf/wijpeg-5fj3s48cv2nf9rs8mv5amtpab/select-room-one-bedroom-3.jpg?width=1920",
  ];

  return (
    <Box>
      <Carousel images={images}>
        <Box sx={{ position: "absolute", top: 10, right: 7, zIndex: 1 }}>
          <FavoriteIcon
            sx={{
              stroke: theme.palette.primary.contrastText,
              strokeWidth: 2,
              fill: theme.palette.background.dark[500],
            }}
          />
        </Box>
      </Carousel>

      <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
        <Typography>Cavinti, Philippines</Typography>
        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="center"
          alignItems="center"
        >
          <StarIcon />
          <Typography>4.88</Typography>
        </Stack>
      </Stack>
      <Typography color={theme.palette.primary[100]}>
        On Lake Caliraya
      </Typography>
      <Typography color={theme.palette.primary[100]}>Mar 7-12</Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography>$593</Typography>
        <Typography>night</Typography>
      </Stack>
    </Box>
  );
};

export default PropertyCard;
