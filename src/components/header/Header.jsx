// import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';
import { Link } from 'react-router-dom'; // Ensure you import Link

const pages = [
  { page: 'Home', route: '/home' },
  { page: 'About me', route: '/about_me' },
  { page: 'Playground', route: '/playground' },
  { page: 'Projects', route: '/projects' },
  { page: 'Cheatsheets', route: '/cheatsheets' },
  // { page: 'References', route: '/references' },
  { page: 'Contact me', route: '/contact_me' },
];

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

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          {pages.map((item) => (
            <Button
              key={item.page}
              component={Link}
              to={item.route}
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
              }}
            >
              {item.page}
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
