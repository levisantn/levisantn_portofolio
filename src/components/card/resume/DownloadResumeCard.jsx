import { Grid2 } from '@mui/material';
import DownloadResumeButton from './DowloadResumeButton';

const DownloadResumeCard = () => {
  return (
    <Grid2
      container
      size={12}
      paddingTop={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
      paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
    >
      <Grid2 display='flex' size={'grow'} justifyContent='center'>
        <DownloadResumeButton />
      </Grid2>
    </Grid2>
  );
};

export default DownloadResumeCard;
