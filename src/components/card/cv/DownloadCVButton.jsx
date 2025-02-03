import { Button, Icon } from '@mui/material';
import { useTheme } from '@emotion/react';
import DownloadIcon from '@mui/icons-material/Download';
import myCVDark from '../../../assets/docs/cv_Antonetti_Levis_2025_dark_en.pdf';
import myCVLight from '../../../assets/docs/cv_Antonetti_Levis_2025_light_en.pdf';

const DownloadCVButton = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Button
      variant='outlined'
      component='a'
      href={isDarkMode ? myCVDark : myCVLight}
      download='cv_Antonetti_Levis_2025'
      sx={{
        borderRadius: '1rem',
        fontWeight: '700',
        width: { xs: '20rem', sm: '22.65rem', md: '26.76rem', lg: '30.88rem', xl: '35rem' },
        fontSize: { xs: '1.32rem', sm: '1.62rem', md: '1.91rem', lg: '2.21rem', xl: '2.5rem' },
        textTransform: 'none',
        color: theme.palette.text.secondary,
        border: '0.2rem solid',
        borderColor: theme.palette.primary.main,
        bgcolor: theme.palette.primary.hover1,
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          bgcolor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          transition: 'all 0.1s ease-in-out',
          color: theme.palette.text.primary,
        },
        '& .MuiTouchRipple-root': {
          color: theme.palette.primary.light,
        },
      }}
    >
      <Icon
        component={DownloadIcon}
        sx={{
          fontSize: { xs: '2.07rem', sm: '2.37rem', md: '2.66rem', lg: '2.96rem', xl: '3.25rem' },
          mr: '1.5rem',
        }}
      />
      Download CV
    </Button>
  );
};

export default DownloadCVButton;
