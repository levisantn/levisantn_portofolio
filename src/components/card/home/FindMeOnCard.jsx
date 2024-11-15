import { Box, Stack, Typography, Grid2 } from '@mui/material';
import RowStackContact from '../../social-media/RowStackContact';

const FindMeOnCard = () => {
  return (
    <Grid2
      container
      paddingTop='5rem'
      paddingBottom='3.75rem'
      borderRadius={1}
      sx={{
        height: 'auto',
        // backgroundColor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Grid2 display='flex' size={1} borderRadius={1}></Grid2>
      <Grid2
        spacing={1}
        padding={1}
        size={'grow'}
        borderRadius={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
          <Stack
            direction='column'
            spacing={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='h2' sx={{ fontWeight: '400' }}>
              Find me on,
            </Typography>

            <Typography variant='h5' sx={{ '& span:first-of-type': { color: 'primary.main' } }}>
              Feel free to <span>connect</span> with me
            </Typography>

            <RowStackContact />
          </Stack>
        </Box>
      </Grid2>
      <Grid2 display='flex' size={1} borderRadius={1}></Grid2>
    </Grid2>
  );
};

export default FindMeOnCard;
