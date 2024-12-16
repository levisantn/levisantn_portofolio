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
    signLogoHeader: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--signature-font)'],
      fontWeight: '500',
      fontSize: '5rem',
    },
    headerHeader: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '500',
      fontSize: '4.25rem',
    },
    mainHeader: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '500',
      fontSize: '4.25rem',
    },
    headerSection: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '500',
      fontSize: '3.5rem',
      // fontSize: { xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' },
    },
    headerSectionMono: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
      fontWeight: '600',
      fontSize: '3.5rem',
      // fontSize={{ xs: '1.48rem', sm: '1.8rem', md: '2.14rem', lg: '2.47rem', xl: '2.8rem' }}
    },

    subHeaderSection: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '400',
      fontSize: '1.875rem',
      // fontSize: { xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }
    },
    subHeaderSectionMono: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
      fontWeight: '500',
      fontSize: '1.875rem',
      // fontSize: { xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }
    },
    bodySection: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '400',
      fontSize: '1.75rem',
      // fontSize: { xs: '0.93rem', sm: '1.13rem', md: '1.34rem', lg: '1.54rem', xl: '1.75rem' },
    },
    h6: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
    },
    headerProjectCard: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '500',
      fontSize: '2rem',
      // fontSize={{ xs: '1.53rem', md: '1.7rem', lg: '2rem' }}
    },
    bodyProjectCard: {
      fontFamily: ['var(--sans-serif-font-stack)', 'var(--headers-font)'],
      fontWeight: '400',
      fontSize: '1.6rem',
      // fontSize={{ xs: '1.22rem', md: '1.35rem', lg: '1.6rem' }}
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
    footer: {
      fontFamily: ['var(--mono-font-stack)', 'var(--mono-font)'],
      fontWeight: 500,
      fontSize: '1.75rem',
      // fontSize: { xs: '0.93rem', sm: '1.13rem', md: '1.34rem', lg: '1.54rem', xl: '1.75rem' }
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default myTheme;
