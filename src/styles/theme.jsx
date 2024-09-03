import { createTheme } from '@mui/material/styles';

// css variables in main.css
const myTheme = createTheme({
  colorSchemes: {
    cssVariables: true,
    light: {
      palette: {
        primary: {
          main: 'var(--primary-color-light)',
        },
        secondary: {
          main: 'var(--secondary-color-light)',
        },
        background: {
          default: 'var(--bg-default-color-light)',
          paper: 'var(--bg-paper-color-light)',
        },
        text: {
          primary: 'var(--text-color-light)',
        },
        divider: 'var(--divider-color-light)',
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: 'var(--primary-color-dark)',
        },
        secondary: {
          main: 'var(--secondary-color-dark)',
        },
        background: {
          default: 'var(--bg-default-color-dark)',
          paper: 'var(--bg-paper-color-dark)',
        },
        text: {
          primary: 'var(--text-color-dark)',
        },
        divider: 'var(--divider-color-dark)',
      },
    },
  },
  typography: {
    fontFamily: 'var(--sans-serif-font)',
    h1: {
      fontFamily: 'var(--headers-font)',
    },
    h2: {
      fontFamily: 'var(--headers-font)',
    },
    h3: {
      fontFamily: 'var(--headers-font)',
    },
    h4: {
      fontFamily: 'var(--headers-font)',
    },
    h5: {
      fontFamily: 'var(--headers-font)',
    },
    h6: {
      fontFamily: 'var(--headers-font)',
    },
    code: {
      fontFamily: 'var(--mono-font)',
    },
    button: {
      fontWeight: 400,
      fontFamily: 'var(--mono-font)',
    },
    subtitle1: {
      fontFamily: 'var(--headers-font)',
    },
    subtitle2: {
      fontFamily: 'var(--headers-font)',
    },
    caption: {
      fontFamily: 'var(--mono-font)',
      fontSize: '0.7rem',
    },
    overline: {
      fontFamily: 'var(--mono-font)',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default myTheme;
