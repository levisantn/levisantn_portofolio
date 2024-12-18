import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';

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
      <Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 60, right: 20 }}>
        {children}
      </Box>
    </Fade>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.element,
};

export const ScrollToTopButton = (props) => {
  return (
    <>
      <ScrollToTop {...props}>
        <Fab
          size='medium'
          aria-label='scroll back to top'
          sx={{
            color: 'text.secondary',
            bgcolor: 'primary.dark',
            border: '0.2rem solid',
            borderColor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'text.primary',
            },
            '& .MuiTouchRipple-root': {
              color: 'primary.light',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </>
  );
};
