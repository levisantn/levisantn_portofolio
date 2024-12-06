import { IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const BodyMediaIconButton = ({ href, disabled, fontSize = '5rem', paddingTop, paddingLeft, icon }) => {
  const theme = useTheme();
  return (
    <IconButton
      href={href}
      target='_blank'
      disabled={disabled}
      sx={{
        width: '75px',
        height: '75px',
        fontSize: { fontSize },
        paddingTop: { paddingTop },
        paddingLeft: { paddingLeft },
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

BodyMediaIconButton.propTypes = {
  href: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingLeft: PropTypes.string,
  icon: PropTypes.node.isRequired,
};

export default BodyMediaIconButton;
