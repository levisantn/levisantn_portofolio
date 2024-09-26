// import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ padding: 2 }}>
      <Toolbar id='back-to-top-anchor'>
        <Typography variant='subtitle1' component='div' sx={{ flexGrow: 1 }}>
          {`<LOGO>`}
        </Typography>
        <Button color='inherit'>
          <Typography variant='subtitle1'>Home</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='subtitle1'>About me</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='subtitle1'>Playground</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='subtitle1'>Projects</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='subtitle1'>Cheatsheets</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='subtitle1'>References</Typography>
        </Button>
        <Button color='inherit'>
          <Typography variant='subtitle1'>Contact me</Typography>
        </Button>
        <ModeSwitcherButton color='inhirit' />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
