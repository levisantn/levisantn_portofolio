// import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';
import { Link } from 'react-router-dom';

const pages = ['About me', 'Projects', 'Resume', 'Contact me'];

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ padding: 1, marginBottom: 1 }}>
      <Toolbar id='back-to-top-anchor' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          component={Link}
          to={'/home'}
          color='inherit'
          sx={{
            borderRadius: 3,
            '&:hover': {
              bgcolor: 'primary.hover2',
            },
            '& .MuiTouchRipple-root': {
              color: 'primary.light',
            },
          }}
        >
          <Typography
            sx={{
              textTransform: 'none',
              flexGrow: 1,
              textAlign: 'left',
              fontFamily: 'var(--signature-font)',
              fontSize: '5rem',
            }}
          >
            {`_ Levisantn _`}
          </Typography>
        </Button>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          {pages.map((item) => (
            <Button
              key={item}
              component={Link}
              to={`/${item.replace(/\s/g, '_')}`}
              size='large'
              color='inherit'
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                margin: 0.25,
                fontSize: '1.75rem',
                wordSpacing: '-4px',
                '&:hover': {
                  bgcolor: 'primary.hover1',
                },
                '& .MuiTouchRipple-root': {
                  color: 'primary.light',
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
