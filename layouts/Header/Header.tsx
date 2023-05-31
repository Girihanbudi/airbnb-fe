import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import Category, { CategoryTumbnail } from "./Category";
import {
  AppBar,
  Stack,
  Box,
  Button,
  Divider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { BestWidth, ElevationScroll } from "@/components";

import AccountActionList from "@/modules/Account/Components/AccountActionList";
import Setting from "@/modules/Setting/Components/Setting";
import SearchBar from "./SearchBar";

export interface HeaderProps {
  showCategories?: boolean;
}

export const Header = ({ showCategories = true }: HeaderProps) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar color="primary" position="sticky">
          <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
            <BestWidth>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={
                    greaterThanMid
                      ? {
                          width: "33.3%",
                          display: "flex",
                          justifyContent: "left",
                        }
                      : {}
                  }
                >
                  <Image
                    src="/airbnb-logo.png"
                    alt="Picture of the author"
                    width={500 / 4}
                    height={180 / 4}
                  />
                </Box>
                <Box
                  sx={
                    greaterThanMid
                      ? {
                          width: "33.3%",
                          display: "flex",
                          justifyContent: "center",
                        }
                      : {}
                  }
                >
                  <SearchBar />
                </Box>
                <Box
                  sx={
                    greaterThanMid
                      ? {
                          width: "33.3%",
                          display: "flex",
                          justifyContent: "right",
                        }
                      : {}
                  }
                >
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button
                      variant="text"
                      href="/host/homes"
                      sx={{
                        minHeight: 0,
                        minWidth: 0,
                        px: 1,
                        textTransform: "none",
                        borderRadius: "50px",
                        fontWeight: "500",
                      }}
                    >
                      {t("txtAirbnbSetup")}
                    </Button>
                    <Box>
                      <Setting />
                    </Box>
                    <Box>
                      <AccountActionList />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </BestWidth>
          </Box>
          {showCategories && (
            <>
              <Divider />
              <Box
                sx={{
                  p: 1,
                  mt: 2,
                  mb: -1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <BestWidth>
                  <Category />
                </BestWidth>
              </Box>
            </>
          )}
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
