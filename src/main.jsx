import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
// import theme from './styles/theme.jsx';
import lightTheme from './styles/theme/lightTheme.jsx';
import darkTheme from './styles/theme/darkTheme.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './main.css';

let theme = lightTheme;
theme = darkTheme;

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* normalize browsers default styles for MUI, browsers render elements more consistently */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
