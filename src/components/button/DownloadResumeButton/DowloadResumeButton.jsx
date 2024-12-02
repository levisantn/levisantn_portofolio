import { Button, Icon } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// import myResumeFR from '../../../assets/docs/cv_Antonetti_Levis_2024_dark_fr.pdf';
import myResume from '../../../assets/docs/cv_Antonetti_Levis_2024_dark_en.pdf';

const DownloadResumeButton = () => {
  return (
    <Button
      variant='outlined'
      component='a'
      href={myResume}
      download='cv_Antonetti_Levis_2024'
      sx={{
        fontWeight: '700',
        borderRadius: '1rem',
        width: '32.5rem',
        fontSize: '2.25rem',
        textTransform: 'none',
        color: 'text.secondary',
        border: '0.2rem solid',
        borderColor: 'primary.main',
        bgcolor: 'primary.hover1',
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          bgcolor: 'primary.main',
          borderColor: 'primary.main',
          transition: 'all 0.1s ease-in-out',
          color: 'text.primary',
        },
        '& .MuiTouchRipple-root': {
          color: 'primary.light',
        },
      }}
    >
      <Icon component={DownloadIcon} sx={{ mr: '1.5rem' }} />
      Download Resume
    </Button>
  );
};

export default DownloadResumeButton;
