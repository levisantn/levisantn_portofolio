import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

// css variables in main.css
const myTheme = createTheme({
  colorSchemes: {
    cssVariables: true,
    light: {
      palette: {
        primary: {
          main: '#c0392b',
          hover1: alpha('#c0392b', 0.2),
          hover2: alpha('#c0392b', 0.075),
        },
        secondary: {
          main: '#2980b9',
          hover1: alpha('#2980b9', 0.2),
          hover2: alpha('#2980b9', 0.075),
        },
        background: {
          default: '#eaecee',
          paper: '#d5d8dc',
        },
        text: {
          primary: '#212f3d',
        },
        divider: '#abb2b9',
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#1a5276',
          hover1: alpha('#1a5276', 0.4),
          hover2: alpha('#1a5276', 0.15),
        },
        secondary: {
          main: '#7b241c',
          hover1: alpha('#7b241c', 0.4),
          hover2: alpha('#7b241c', 0.15),
        },
        background: {
          default: '#17202a',
          paper: '#273746',
        },
        text: {
          primary: '#eaecee',
        },
        divider: '#566573',
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--mui-palette-background-default)',
          color: 'var(--mui-palette-text-primary)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--mui-palette-background-default)',
          color: 'inherit',
          backgroundImage: 'var(--mui-palette-background-default)',
        },
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
  shape: {
    borderRadius: 8,
  },
});

export default myTheme;
