import { createTheme, Theme } from '@mui/material/styles';

const FONT_PRIMARY = 'alike';
const FONT_SECONDARY = 'Poppins';

declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme {}
}
declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  typography: {
    fontFamily: [FONT_SECONDARY, 'sans-serif'].join(','),
    fontWeightRegular: 200,
    h1: {
      fontWeight: 600,
      fontSize: 56,
      color: '#0A0908',
      zIndex: 1,
      fontFamily: FONT_PRIMARY,
    },
    h2: {
      fontWeight: 400,
      fontSize: 40,
      color: '#0A0908',
      zIndex: 1,
      fontFamily: FONT_PRIMARY,
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
      color: '#0A0908',
      zIndex: 1,
      fontFamily: FONT_PRIMARY,
    },
    h4: {
      fontWeight: 500,
      fontSize: 30,
      color: '#0A0908',
      zIndex: 1,
    },
    h5: {
      fontWeight: 600,
      fontSize: 22,
      color: '#0A0908',
      zIndex: 1,
    },
    h6: {
      fontWeight: 600,
      fontSize: 18,
      // color: '#0A0908',
      zIndex: 1,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: 15,
      color: '#0A0908',
      zIndex: 1,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: 13,
      color: '#0A0908',
      zIndex: 1,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
      color: '#0A0908',
      zIndex: 1,
    },
    body2: {
      fontWeight: 400,
      fontSize: 13,
      color: '#0A0908',
      zIndex: 1,
    },
    button: {
      fontFamily: FONT_SECONDARY,
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#DAEBFF',
      main: '#0A0908',
      dark: '#00165C',
    },
    secondary: {
      light: '#404040',
      main: '#0A0908',
      dark: '#222222',
    },
    common: {
      white: '#ffffff',
      black: '#0A0908',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 3,
          borderWidth: 1.5,
          borderColor: '#0A0908',
          padding: '6px 20px',
          width: 'fit-content',
          '&:hover': {
            borderWidth: 1.5,
            color: '#F4F3EE',
            borderColor: '#0A0908',
            backgroundColor: '#0A0908',
          },
          '& > span > div:nth-of-type(1)': {
            fontSize: '14px',
          },
        },
        text: {
          borderRadius: 3,
          padding: '6px 20px',
          width: 'fit-content',
        },
        contained: {
          borderRadius: 3,
          padding: '6px 20px',
          width: 'fit-content',
          '&:hover': {
            backgroundColor: '#0A0908',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
    MuiIcon: {
      styleOverrides: {
        colorPrimary: '#0A0908',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0.5px 1px 0px',
        },
      },
    },
  },
});

export default theme;
