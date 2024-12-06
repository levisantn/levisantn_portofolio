import { Box, Fab, Fade, useScrollTrigger } from '@mui/material';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{
          position: 'fixed',
          bottom: { xs: '30px', md: '60px' },
          right: 30,
          zIndex: 1100,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.element,
};

export const ScrollToTopButton = (props) => {
  const theme = useTheme();
  return (
    <>
      <ScrollToTop {...props}>
        <Fab
          aria-label='scroll back to top'
          sx={{
            width: { xs: '35px', sm: '39px', md: '46px', lg: '53px', xl: '60px' },
            height: { xs: '35px', sm: '39px', md: '46px', lg: '53px', xl: '60px' },
            color: theme.palette.text.secondary,
            bgcolor: theme.palette.primary.dark,
            border: '0.2rem solid',
            borderColor: theme.palette.primary.main,
            '&:hover': {
              bgcolor: theme.palette.primary.main,
              color: theme.palette.text.primary,
            },
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.light,
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </>
  );
};
