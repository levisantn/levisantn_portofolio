// import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';

const pages = ['Home', 'About me', 'Playground', 'Projects', 'Cheatsheets', 'References', 'Contact me'];

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ padding: 1 }}>
      <Toolbar id='back-to-top-anchor' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color='inherit'
          sx={{
            borderRadius: 3,
            '&:hover': {
              bgcolor: 'primary.hover2',
            },
          }}
        >
          <Typography
            sx={{
              textTransform: 'none',
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'var(--signature-font)',
              fontSize: 40,
            }}
          >
            {`_ Levisantn _`}
          </Typography>
        </Button>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          {pages.map((item) => (
            <Button
              key={item}
              size='large'
              color='inherit'
              sx={{
                textTransform: 'capitalize',
                borderRadius: 1,
                margin: 0.25,
                '&:hover': {
                  bgcolor: 'primary.hover1',
                },
              }}
            >
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
