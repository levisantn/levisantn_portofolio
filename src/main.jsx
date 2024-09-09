import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './styles/theme.jsx';
import { responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './main.css';

const theme = responsiveFontSizes(myTheme);

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* normalize browsers default styles for MUI, browsers render elements more consistently */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
