// import * as React from 'react';
import { Grid2 } from '@mui/material';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { ScrollToTopButton } from '../components/button/ScrollToTopButton/ScrollToTopButton';

// import FooterEx from '../components/footer/FooterEx';

function RootLayout() {
  return (
    <Grid2 container spacing={0}>
      <Grid2 size={12}>
        <Header />
        <ScrollToTopButton />
      </Grid2>
      <Grid2 size={12}>
        <Outlet />
      </Grid2>
      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default RootLayout;
