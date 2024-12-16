import { IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const ContactMediaIconButton = ({ href, disabled, icon }) => {
  const theme = useTheme();
  return (
    <IconButton
      href={href}
      target='_blank'
      disabled={disabled}
      sx={{
        width: { xs: '2.5rem', sm: '3.05rem', md: '3.61rem', lg: '4.17rem', xl: '4.72rem' },
        height: { xs: '2.5rem', sm: '3.05rem', md: '3.61rem', lg: '4.17rem', xl: '4.72rem' },
        fontSize: { xs: '1.6rem', sm: '1.95rem', md: '2.31rem', lg: '2.66rem', xl: '3.02rem' },
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

ContactMediaIconButton.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.node.isRequired,
};

export default ContactMediaIconButton;
