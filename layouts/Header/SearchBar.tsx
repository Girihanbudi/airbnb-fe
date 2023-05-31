import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

import { Box, Stack, Typography, Button } from "@mui/material";

import CardButton, { Card } from "@/components/CardButton";

import SearchIcon from "@mui/icons-material/Search";
import { TextButton, UnderlinedButton } from "@/components";

export const SearchFilter = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <UnderlinedButton active>Stays</UnderlinedButton>
        <UnderlinedButton>Experiences</UnderlinedButton>
        <UnderlinedButton>Online Experiences</UnderlinedButton>
      </Stack>
      <Card>
        <Stack direction="row">
          <CardButton>
            <Typography>Where</Typography>
            <Typography>Map area</Typography>
          </CardButton>
          <CardButton>
            <Typography>Where</Typography>
            <Typography>Map area</Typography>
          </CardButton>
          <CardButton>
            <Typography>Where</Typography>
            <Typography>Map area</Typography>
          </CardButton>
        </Stack>
      </Card>
    </>
  );
};

export const SearchBar = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Card sx={{ p: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <TextButton
              sx={{
                py: 1,
                pl: 1,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
              }}
            >
              {t("btnWhere")}
            </TextButton>
            <Typography color={theme.palette.primary[100]}>|</Typography>
            <TextButton
              sx={{
                py: 1,
                pl: 1,
              }}
            >
              {t("btnWhen")}
            </TextButton>
            <Typography color={theme.palette.primary[100]}>|</Typography>
            <TextButton
              sx={{
                py: 1,
                pl: 1,
                color: theme.palette.primary[100],
              }}
            >
              {t("btnGuest")}
            </TextButton>
            <Button
              color="secondary"
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 1,
                minHeight: 0,
                minWidth: 0,
                borderRadius: 50,
              }}
            >
              <SearchIcon />
            </Button>
          </Stack>
        </Card>
      </Box>

      {/* <Box>
        <SearchFilter />
      </Box> */}
    </Box>
  );
};

export default SearchBar;
