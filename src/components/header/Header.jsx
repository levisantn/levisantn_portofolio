// import React from 'react';
import { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['About me', 'Projects', 'Resume', 'Contact me'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position='sticky' sx={{ padding: 1, marginBottom: 1 }}>
      <Toolbar id='back-to-top-anchor' sx={{ display: 'flex' }}>
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

        {/* --------- MD > here > XL --------- */}
        <Box
          sx={{
            justifyContent: 'flex-end',
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
          }}
        >
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

        {/* --------- XS > here > md --------- */}
        <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='header sections menu'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} component={Link} to={`/${page.replace(/\s/g, '_')}`} onClick={handleCloseNavMenu}>
                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* ------------------ */}
        <Box sx={{ marginLeft: 4 }}>
          <ModeSwitcherButton color='inhirit' />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
