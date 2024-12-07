// import * as React from 'react';
import { Alert, Grid2 } from '@mui/material';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/button/ScrollToTopButton/ScrollToTopButton';
import { useEffect, useRef, useState } from 'react';

function RootLayout() {
  const [hasScrollbar, setHasScrollbar] = useState(
    window.getComputedStyle(document.documentElement).overflowY === 'visible',
  );
  const firstRenderRef = useRef(true);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleFooter = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setShowFooter(scrollTop + clientHeight >= scrollHeight - 1);
      setHasScrollbar(window.getComputedStyle(document.documentElement).overflowY === 'visible');
    };

    if (firstRenderRef.current) {
      setShowFooter(false);
      firstRenderRef.current = false;
    } else {
      handleFooter();
    }

    window.addEventListener('click', handleFooter);
    window.addEventListener('scroll', handleFooter);
    window.addEventListener('resize', handleFooter);

    return () => {
      window.removeEventListener('click', handleFooter);
      window.removeEventListener('scroll', handleFooter);
      window.removeEventListener('resize', handleFooter);
    };
  }, [firstRenderRef, hasScrollbar]);

  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header />
        <ScrollToTopButton />
        {showAlert && (
          <Alert severity='warning' onClose={handleClose} sx={{ margin: '1rem' }}>
            <strong>Under Development 🚧</strong>
            <br />
            This website isn&apos;t optimized for mobile display. I&apos;m working on it.
          </Alert>
        )}
      </Grid2>
      <Grid2 size={12} paddingBottom='6.25rem'>
        <Outlet />
      </Grid2>
      <Grid2 size={12} sx={{ position: 'fixed', bottom: 0, display: showFooter || hasScrollbar ? 'block' : 'none' }}>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default RootLayout;
