import { Grid2 } from '@mui/material';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/button/ScrollToTopButton/ScrollToTopButton';

function RootLayout() {
  return (
    <Grid2 container>
      <Grid2 size={12}>
        <Header />
        <ScrollToTopButton />
      </Grid2>
      <Grid2 size={12} paddingBottom='6.25rem'>
        <Outlet />
      </Grid2>
      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default RootLayout;
