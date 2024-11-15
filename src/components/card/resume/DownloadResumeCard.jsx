import { Grid2 } from '@mui/material';
import DownloadResumeButton from '../../button/DownloadResumeButton/DowloadResumeButton';

const DownloadResumeCard = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        paddingTop='3.75rem'
        paddingBottom='2.5rem'
        container
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <DownloadResumeButton />
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default DownloadResumeCard;
