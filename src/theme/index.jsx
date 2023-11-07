const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background: "#0D1514",
  background_subtle: "#111C1B",
  border: "#1C6961",
  solidSecondary: "#12A594",
  solidPrimary: "#0EB39E",
  textPrimary: "#0BD8B6",
  textSecondary: "#ADF0DD",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginLine: "#f56a2c",
}

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
}

const fonts = {
  size: {
    XXXS: "8px",
    XXS: "10px",
    XS: "12px",
    SM: "15px",
    P0: "16px",
    P1: "18px",
    P2: "20px",
    P3: "24px",
    P4: "36px",
    P5: "48px",
    P6: "60px",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
}
const gridUnit = 8
const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
}
const fontsFamily = {
  poppins: " 'Poppins', sans-serif",
  open: "'Open Sans', sans-serif",
}

const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  subtleSecondary: "0px -6px 8px -2px rgba(255, 255, 255, 0.05)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  basket: " -4px 4px 15px 0px #00000033;",
}

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
  fontsFamily,
}