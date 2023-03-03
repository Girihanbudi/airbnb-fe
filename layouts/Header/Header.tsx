import React from "react";
import { useTranslation } from "next-i18next";
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
import BestWidth from "@/components/BestWidth";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Account from "./Account";
import Setting from "./Setting";
import SearchBar from "./SearchBar";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
  const { t } = useTranslation("header");
  const theme = useTheme();
  const greaterThanMid = useMediaQuery(theme.breakpoints.up("md"));
  const categories: CategoryTumbnail[] = [
    { src: "/icons/firebase.svg", title: "Firebase", active: true },
    { src: "/icons/firebase.svg", title: "Firebase 2", active: false },
    { src: "/icons/firebase.svg", title: "Firebase 3", active: false },
  ];

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
                      {t("airbnbSetup")}
                    </Button>
                    <Box>
                      <Setting />
                    </Box>
                    <Box>
                      <Account />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </BestWidth>
          </Box>
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
              <Category categories={categories} />
            </BestWidth>
          </Box>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
