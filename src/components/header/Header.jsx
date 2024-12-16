import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  Button,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid2,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ModeSwitcherButton from '../button/ToggleModeButton/ModeSwitcherButton';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';

import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';

const pages = ['About me', 'Projects', 'Resume', 'Contact me'];
const sx_pages = ['Home', ...pages];
const iconSize = { xs: '2.5rem', sm: '3.75rem' };
const drawerFontSize = { xs: '1.65rem', sm: '1.875rem' };

const icons = {
  Home: <HomeRoundedIcon sx={{ fontSize: iconSize, color: 'text.primary' }} />,
  'About me': <AccountBoxRoundedIcon sx={{ fontSize: iconSize, color: 'text.primary' }} />,
  Projects: <DvrRoundedIcon sx={{ fontSize: iconSize, color: 'text.primary' }} />,
  Resume: <ArticleRoundedIcon sx={{ fontSize: iconSize, color: 'text.primary' }} />,
  'Contact me': <ContactMailRoundedIcon sx={{ fontSize: iconSize, color: 'text.primary' }} />,
};

const Header = () => {
  const theme = useTheme();
  const drawerBackgroundColor =
    theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.background.default;
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const currentDisplayedPath = currentPath

    .split('_')
    .map((word, index) => (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <AppBar position='sticky'>
      <Toolbar disableGutters id='back-to-top-anchor' sx={{ margin: '1rem' }}>
        {/* -------------------- */}
        {/* drawer button */}
        <Grid2 sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='open drawer'
            aria-controls='menu-appbar'
            onClick={toggleDrawer(true)}
            sx={{
              borderRadius: '50%',
              padding: '0.625rem',
              '& .MuiSvgIcon-root': { fontSize: '3rem', color: 'text.primary' },
              '&:hover': {
                bgcolor: theme.palette.primary.hover1,
                borderRadius: '50%',
              },
              '&.Mui-disabled': {
                color: theme.palette.text.disabled,
              },
              '& .MuiTouchRipple-root': {
                color: theme.palette.primary.light,
              },
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Grid2>
        {/* -------------------- */}
        {/* signature logo */}
        <Grid2 size={'grow'} sx={{ display: { xs: 'none', md: 'flex' } }}>
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
              variant='signLogoHeader'
              sx={{
                textTransform: 'none',
                fontSize: { xs: '3.82rem', lg: '4.41rem', xl: '5rem' },
              }}
            >
              {`< Levisantn >`}
            </Typography>
          </Button>
        </Grid2>
        {/* -------------------- */}
        {/* Current page name */}
        <Grid2 size={'grow'} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Typography variant='subHeaderSection' pl='1.25rem' fontSize='1.625rem'>
            {sx_pages.includes(currentDisplayedPath) ? currentDisplayedPath : '404'}
          </Typography>
        </Grid2>

        {/* -------------------- */}
        <Box
          sx={{
            justifyContent: 'flex-end',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {pages.map((item) => (
            <Button
              key={item}
              component={Link}
              to={`/${item.toLowerCase().replace(/\s/g, '_')}`}
              size='large'
              color='inherit'
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                margin: 0.25,
                fontSize: { xs: '1.125rem', sm: '1.375rem', md: '1.625rem', lg: '1.875rem', xl: '2.125rem' },
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
      {/* -------------------- */}
      {/* Drawer */}
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'flex', md: 'none' } }}
        PaperProps={{
          sx: {
            backgroundColor: drawerBackgroundColor,
            color: theme.palette.text.primary,
          },
        }}
      >
        <Box sx={{ width: '50vw' }} role='presentation' onClick={toggleDrawer(false)}>
          <List>
            {sx_pages.map((item) => (
              <ListItem key={item} disableGutters>
                <ListItemButton component={Link} to={`/${item.toLowerCase().replace(/\s/g, '_')}`}>
                  <ListItemIcon>{icons[item]}</ListItemIcon>
                  <ListItemText
                    primary={item}
                    sx={{ textAlign: 'center', padding: '1.25rem', pl: '0', pr: '0' }}
                    primaryTypographyProps={{ fontSize: drawerFontSize }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
