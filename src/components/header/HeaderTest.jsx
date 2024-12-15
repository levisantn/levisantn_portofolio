import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';

const pages = ['About me', 'Projects', 'Resume', 'Contact me'];

const HeaderTest = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position='sticky' sx={{ padding: 1, marginBottom: 1 }}>
      <Toolbar id='back-to-top-anchor' sx={{ display: 'flex' }}>
        {/* Drawer Button */}
        <Box sx={{ flexGrow: 1, justifyContent: 'flex-start', display: { xs: 'flex', md: 'none' } }}>
          <IconButton size='large' aria-label='open drawer' aria-controls='menu-appbar' onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Box>
        {/* Sign Logo */}
        {/* -------------------- */}
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
        {/* -------------------- */}
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

        <Box sx={{ marginLeft: '2.5rem' }}>
          <ModeSwitcherButton color='inhirit' />
        </Box>
      </Toolbar>
      <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {pages.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton component={Link} to={`/${item.replace(/\s/g, '_')}`}>
                <ListItemIcon>{/* Add icons if desired */}</ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default HeaderTest;
