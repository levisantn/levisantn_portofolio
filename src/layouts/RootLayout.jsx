import { Grid2 } from '@mui/material';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/button/ScrollToTopButton/ScrollToTopButton';
import { useEffect, useRef, useState } from 'react';

function RootLayout() {
  const [showFooter, setShowFooter] = useState(false);
  const previousScrollTop = useRef(0);

  useEffect(() => {
    const handleFooter = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 25;
      setShowFooter(isNearBottom || scrollTop < previousScrollTop);
      previousScrollTop.current = scrollTop;
    };

    window.addEventListener('scroll', handleFooter);
    window.addEventListener('resize', handleFooter);

    return () => {
      window.removeEventListener('scroll', handleFooter);
      window.removeEventListener('resize', handleFooter);
    };
  }, []);

  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header />
        <ScrollToTopButton />
      </Grid2>
      <Grid2 size={12} paddingBottom='6.25rem'>
        <Outlet />
      </Grid2>
      <Grid2 size={12} sx={{ position: 'fixed', bottom: 0, display: showFooter ? 'block' : 'none' }}>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default RootLayout;
