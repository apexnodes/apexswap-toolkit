import { Colors } from "./types";

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#B2B2B2",
  white: "#FFF",
  dark: "#000",
  bronze: "#E7974D",
  apexLight: "#017f98",
  apexDark: "#013b61",
};

export const baseColors = {
  failure: "#c2002a",
  primary: "#1d244b",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#F3841E",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: additionalColors.apexLight,
  cardBackground: additionalColors.apexLight,
  backgroundDisabled: "#444f6c",
  backgroundAlt: additionalColors.apexLight,
  backgroundAlt2: additionalColors.apexLight,
  cardBorder: additionalColors.apexDark,
  contrast: "#191326",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: additionalColors.apexDark,
  tertiary: "#EFF4F5",
  text: additionalColors.white,
  textDisabled: "#BDC2C4",
  textSubtle: additionalColors.apexDark,
  disabled: "#E9EAEB",
  panelBorder : "rgba(133,133,133,0.1)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
    city: "linear-gradient(139.73deg,#ff546f 0%,#152bff 100%)"
  },
};

export const darkColors: Colors = {
  ...lightColors,
};
