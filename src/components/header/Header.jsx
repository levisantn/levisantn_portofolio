// import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';

const pages = ['Home', 'About me', 'Playground', 'Projects', 'Cheatsheets', 'References', 'Contact me'];

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ padding: 1 }}>
      <Toolbar id='back-to-top-anchor' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color='inherit'>
          <Typography
            sx={{
              textTransform: 'none',
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'var(--signature-font)',
              fontSize: 34,
            }}
          >
            {`- Levisantn -`}
          </Typography>
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          {pages.map((item) => (
            <Button key={item} size='medium' color='inherit' sx={{ textTransform: 'capitalize' }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ marginLeft: 4 }}>
          <ModeSwitcherButton color='inhirit' />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
