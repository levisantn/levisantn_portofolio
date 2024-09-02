// import * as React from 'react';
import { Grid2 } from '@mui/material';
import Header from '../components/header/Header';

function MainLayout() {
  return (
    <Grid2 container spacing={0}>
      <Grid2 size={12}>
        <Header />
      </Grid2>
      <Grid2 size={12} sx={{ backgroundColor: 'yellow' }}>
        <h1>Main content</h1>
      </Grid2>
      <Grid2 size={12} sx={{ backgroundColor: 'red' }}>
        <h1>footer</h1>
      </Grid2>
    </Grid2>
  );
}

export default MainLayout;
