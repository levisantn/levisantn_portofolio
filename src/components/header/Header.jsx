// import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          LOGO
        </Typography>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About me</Button>
        <Button color='inherit'>Playground</Button>
        <Button color='inherit'>Projects</Button>
        <Button color='inherit'>Cheatsheets</Button>
        <Button color='inherit'>References</Button>
        <Button color='inherit'>Contact me</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
