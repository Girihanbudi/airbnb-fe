// Module augmentation for MUI
import MuiStyle from "@mui/material/styles";
import {
  Theme as _Theme,
  ThemeOptions as _ThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  // Palette
  interface CustomPalette {
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}

  // Theme
  interface Theme extends _Theme {
    mode: ThemeTypes;
    palette: _Theme["palette"] & {
      white: {
        light: string;
        main: string;
        dark: string;
      };
      background: _Theme["palette"]["background"] & {
        light: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
        dark: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends _ThemeOptions {
    mode: string;
    palette: _ThemeOptions["palette"] & {
      white: {
        light: string;
        main: string;
        dark: string;
      };
      background: _ThemeOptions["palette"]["background"] & {
        light: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
        dark: {
          50: string;
          100: string;
          200: string;
          300: string;
          400: string;
          500: string;
          600: string;
          700: string;
          800: string;
          900: string;
        };
      };
    };
  }
  // allow configuration new background
  interface TypeBackground {
    default?: string;
    paper?: string;
    light?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    dark?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}
