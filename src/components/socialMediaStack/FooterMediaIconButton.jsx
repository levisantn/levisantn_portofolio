import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

const FooterMediaIconButton = ({ href, disabled, fontSize, paddingTop, paddingLeft, icon }) => {
  const theme = useTheme();
  return (
    <IconButton
      href={href}
      target='_blank'
      disabled={disabled}
      sx={{
        color: theme.palette.text.primary,
        width: '35px',
        height: '35px',
        fontSize: { fontSize },
        paddingTop: { paddingTop },
        paddingLeft: { paddingLeft },
        borderRadius: '50%',
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
      {icon}
    </IconButton>
  );
};

FooterMediaIconButton.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingLeft: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

export default FooterMediaIconButton;
