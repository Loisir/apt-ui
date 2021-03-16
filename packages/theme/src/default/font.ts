export const fontSizes = {
  100: 10,
  200: 12,
  300: 14,
  400: 16,
  500: 20,
  600: 24,
  700: 28,
  800: 32,
  900: 40,
  1000: 68,
};

export type FontSizes = typeof fontSizes;

export const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

export type FontWeight = typeof fontWeights;

export const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
};

export type LetterSpacing = typeof letterSpacings;

export const lineHeight = {
  shorter: 1.25,
  short: 1.375,
  normal: "normal",
  base: 1.5,
  tall: 1.625,
  taller: 2,
};

export type LineHeight = typeof lineHeight;