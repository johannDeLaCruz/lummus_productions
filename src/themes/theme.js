import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8C0FC7",
    },
    black: {
      main: "#000000",
    }
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  shape: {
    borderRadius: "1.5rem",
  },
});

export default theme;
