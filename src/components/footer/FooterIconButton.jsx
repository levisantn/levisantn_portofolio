import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';

const FooterIconButton = ({ href, disabled, fontSize, padding, icon }) => {
  return (
    <IconButton
      href={href}
      target='_blank'
      disabled={disabled}
      sx={{
        color: 'text.primary',
        width: '30px',
        height: '30px',
        fontSize: { fontSize },
        padding: { padding },
        borderRadius: 5,
        '&:hover': {
          bgcolor: 'primary.hover1',
          borderRadius: 5,
        },
        '&.Mui-disabled': {
          color: 'text.disabled',
        },
        '& .MuiTouchRipple-root': {
          color: 'primary.light',
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

FooterIconButton.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

export default FooterIconButton;
