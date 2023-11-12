import { createTheme } from "@mui/material/styles";
import HagridRegular from "../assets/fonts/hagrid-regular-trial-webfont.woff2";
import HagridBold from "../assets/fonts/HagridTextTrial-Bold.woff2";
import HagridExtraBold from "../assets/fonts/HagridTrial-Extrabold.woff2";
import HagridMedium from "../assets/fonts/HagridTrial-Medium.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8C0FC7",
      contrastText: "#ffffff",
    },
    grey: {
      50: "#F0F0F0",
    },
  },
  typography: {
    fontFamily: "'Bree Serif', serif;",
    fontSize: 16,
    h1: {
      fontFamily: "'Hagrid'",
      fontSize: "3.75rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h2: {
      fontFamily: "'Hagrid'",
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "3.25rem",
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: "-0.2rem",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      fontWeight: 300,
      lineHeight: 1.3,
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "1.25rem",
      fontWeight: 300,
      lineHeight: 1.3,
    },
    button: {
      fontFamily: "Bree Serif",
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
    },
    subtitle1: {
      fontFamily: "Montserrat",
      fontSize: "0.875rem",
      fontWeight: 300,
    },
    caption: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontWeight: 300,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#8C0FC7",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "p",
          body2: "p",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Hagrid';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('HagridRegular'), local('HagridRegular'), url(${HagridRegular}) format('woff2');
      }    
      @font-face {
        font-family: 'Hagrid';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: local('HagridMedium'), local('HagridMedium'), url(${HagridMedium}) format('woff2');
      }         
    @font-face {
      font-family: 'Hagrid';
      font-style: normal;
      font-display: swap;
      font-weight: 700;
      src: local('HagridBold'), local('HagridBold'), url(${HagridBold}) format('woff2');
    }   
    @font-face {
      font-family: 'Hagrid';
      font-style: normal;
      font-display: swap;
      font-weight: 800;
      src: local('HagridExtraBold'), local('HagridExtraBold'), url(${HagridExtraBold}) format('woff2');
    }         
  `,
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
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
