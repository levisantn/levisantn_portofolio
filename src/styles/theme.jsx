import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// css variables in main.css
let myTheme = createTheme({
  colorSchemes: {
    cssVariables: { cssVarPrefix: '' },
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
    htmlFontSize: 10,
    fontFamily: ['var(--sans-serif-font-stack)', 'var(--sans-serif-font)'],
    h1: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    h2: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    h3: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    h4: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    h5: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    h6: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    code: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
    },
    button: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
    },
    subtitle1: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    subtitle2: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    caption: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
      fontSize: '0.7rem',
    },
    overline: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
    },
  },
  breakpoints: {
    values: {
      mobile: 'var(--breakpoint-mobile)',
      tablet: 'var(--breakpoint-tablet)',
      laptop: 'var(--breakpoint-laptop)',
      desktop: 'var(--breakpoint-desktop)',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

myTheme = responsiveFontSizes(myTheme);

export default myTheme;
