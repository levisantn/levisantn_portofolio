import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2980b9',
    },
    secondary: {
      main: '#c0392b',
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

export default lightTheme;
