import { Grid2 } from '@mui/material';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/button/ScrollToTopButton/ScrollToTopButton';
import { useEffect, useState } from 'react';

function RootLayout() {
  // const [hasScrollbar, setHasScrollbar] = useState(
  //   window.getComputedStyle(document.documentElement).overflowY === 'visible',
  // );
  // const firstRenderRef = useRef(true);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setShowFooter(scrollTop + clientHeight >= scrollHeight - 100); // Add buffer for smoother transition
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
