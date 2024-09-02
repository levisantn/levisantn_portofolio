import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.jsx';
import './main.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <CssBaseline /> {/* normalize browsers default styles for MUI, browsers render elements more consistently */}
    <App />
  </StrictMode>,
);
