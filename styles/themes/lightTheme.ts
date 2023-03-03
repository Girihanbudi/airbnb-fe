import { createTheme } from "@mui/material/styles";

// Color generated from
// http://mcg.mbitson.com/
export const LIGHT = "light";

export const lightTheme = createTheme({
  mode: LIGHT,
  typography: {
    allVariants: {
      color: "#121212",
    },
  },
  palette: {
    white: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#e0e0e0",
    },
    primary: {
      light: "#4d4d4d",
      main: "#000000",
      dark: "#000000",
      "50": "#e0e0e0",
      "100": "#b3b3b3",
      "200": "#808080",
      "300": "#4d4d4d",
      "400": "#262626",
      "500": "#000000",
      "600": "#000000",
      "700": "#000000",
      "800": "#000000",
      "900": "#000000",
      A100: "#a6a6a6",
      A200: "#8c8c8c",
      A400: "#737373",
      A700: "#666666",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff748d",
      main: "#ff385c",
      dark: "#ff2b4a",
      "50": "#ffe7eb",
      "100": "#ffc3ce",
      "200": "#ff9cae",
      "300": "#ff748d",
      "400": "#ff5674",
      "500": "#ff385c",
      "600": "#ff3254",
      "700": "#ff2b4a",
      "800": "#ff2441",
      "900": "#ff1730",
      A100: "#ffffff",
      A200: "#fffcfd",
      A400: "#ffc9ce",
      A700: "#ffb0b7",
      contrastText: "#ffffff",
    },
    // error: {
    //   light: '#ab003c',
    //   main: '#F50057',
    //   dark: '#f73378',
    //   contrastText: '#ffffff',
    // },
    // info: {
    //   light: '#aba18f',
    //   main: '#F5E7CD',
    //   dark: '#f7ebd7',
    //   contrastText: '#ffffff',
    // },
    // warning: {
    //   light: '#b08f03',
    //   main: '#FCCD05',
    //   dark: '#fcd737',
    //   contrastText: '#ffffff',
    // },
    // success: {
    //   light: '#5d067e',
    //   main: '#8609b5',
    //   dark: '#9e3ac3',
    //   contrastText: '#ffffff',
    // },
    background: {
      // default: '#FFFFFF',
      // paper: '#f5f5f5',
      light: {
        50: "rgba(255, 255, 255, 0.1)",
        100: "rgba(255, 255, 255, 0.2)",
        200: "rgba(255, 255, 255, 0.3)",
        300: "rgba(255, 255, 255, 0.4)",
        400: "rgba(255, 255, 255, 0.5)",
        500: "rgba(255, 255, 255, 0.6)",
        600: "rgba(255, 255, 255, 0.7)",
        700: "rgba(255, 255, 255, 0.8)",
        800: "rgba(255, 255, 255, 0.9)",
        900: "rgba(255, 255, 255, 1.0)",
      },
      dark: {
        50: "rgba(0, 0, 0, 0.1)",
        100: "rgba(0, 0, 0, 0.2)",
        200: "rgba(0, 0, 0, 0.3)",
        300: "rgba(0, 0, 0, 0.4)",
        400: "rgba(0, 0, 0, 0.5)",
        500: "rgba(0, 0, 0, 0.6)",
        600: "rgba(0, 0, 0, 0.7)",
        700: "rgba(0, 0, 0, 0.8)",
        800: "rgba(0, 0, 0, 0.9)",
        900: "rgba(0, 0, 0, 1.0)",
      },
    },
    // divider: '#01508c',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderColor: "#9e3ac3",
          border: 1,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
        },
      },
    },
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 10,
    //       boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.2)",
    //     },
    //   },
    // },
  },
});

export default lightTheme;
