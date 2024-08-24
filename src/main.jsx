import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, theme } from '@chakra-ui/react';
import App from './App.jsx';
import './main.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
);
