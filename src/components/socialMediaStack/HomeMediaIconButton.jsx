import { IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const HomeMediaIconButton = ({ href, disabled, icon }) => {
  const theme = useTheme();
  return (
    <IconButton
      href={href}
      target='_blank'
      disabled={disabled}
      sx={{
        width: { xs: '40px', sm: '48px', md: '57px', lg: '66px', xl: '75px' },
        height: { xs: '40px', sm: '48px', md: '57px', lg: '66px', xl: '75px' },
        fontSize: { xs: '2.65rem', sm: '3.23rem', md: '3.82rem', lg: '4.41rem', xl: '5rem' },
        borderRadius: '50%',
        border: '0.2rem solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        bgcolor: theme.palette.primary.hover1,
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
          bgcolor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          transition: 'all 0.1s ease-in-out',
        },
        '&.Mui-disabled': {
          color: theme.palette.text.disabled,
        },
        '& .MuiTouchRipple-root': {
          color: theme.palette.primary.light,
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

HomeMediaIconButton.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

export default HomeMediaIconButton;
