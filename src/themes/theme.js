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
      50: "#fafafa",
    },
  },
  typography: {
    fontFamily: "'Bree Serif', serif;",
    fontSize: 16,
    h1: {
      fontFamily: "'Hagrid'",
      fontSize: "3.75rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Hagrid'",
      fontSize: "2.25rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Hagrid'",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "p",
          body2: "p",
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
