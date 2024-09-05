import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import myTheme from './styles/theme.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './main.css';
import Typography from '@mui/material/Typography';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider theme={myTheme}>
      <CssBaseline /> {/* normalize browsers default styles for MUI, browsers render elements more consistently */}
      <Typography variant='h1'>Responsive h1</Typography>
      <Typography variant='h2'>Responsive h2</Typography>
      <Typography variant='h3'>Responsive h3</Typography>
      <Typography variant='h4'>Responsive h4</Typography>
      <Typography variant='h5'>Responsive h5</Typography>
      <Typography variant='h6'>Responsive h6</Typography>
      <Typography variant='body'>Responsive body</Typography>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
