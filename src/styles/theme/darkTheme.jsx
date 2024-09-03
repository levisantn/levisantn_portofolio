import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#1a5276',
    },
    secondary: {
      main: '#7b241c',
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
  typography: {
    h1: {
      fontFamily: 'Rubik',
    },
    h2: {
      fontFamily: 'Rubik',
    },
    h3: {
      fontFamily: 'Rubik',
    },
    fontFamily: 'Google Sans',
    h4: {
      fontFamily: 'Rubik',
    },
    h5: {
      fontFamily: 'Rubik',
    },
    h6: {
      fontFamily: 'Rubik',
    },
    button: {
      fontWeight: 400,
      fontFamily: 'Rubik',
    },
    subtitle1: {
      fontFamily: 'Rubik',
    },
    subtitle2: {
      fontFamily: 'Rubik',
    },
    caption: {
      fontFamily: 'JetBrains Mono',
      fontSize: '0.7rem',
    },
    overline: {
      fontFamily: 'JetBrains Mono',
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
});

export default darkTheme;
