import { Grid2 } from '@mui/material';
import DownloadResumeButton from './DowloadResumeButton';

const DownloadResumeCard = () => {
  return (
    <Grid2
      container
      size={12}
      paddingTop={{ xs: '3.75rem', md: '6.25rem' }}
      paddingBottom={{ xs: '3.75rem', md: '6.25rem' }}
    >
      <Grid2 display='flex' size={'grow'} justifyContent='center'>
        <DownloadResumeButton />
      </Grid2>
    </Grid2>
  );
};

export default DownloadResumeCard;
