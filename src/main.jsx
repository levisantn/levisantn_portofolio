import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './styles/theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import myRouter from './router.jsx';

const theme = myTheme;
const router = myRouter;

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {/* normalize browsers default styles for MUI, browsers render elements more consistently */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
