import { Stack, Typography, Grid2 } from '@mui/material';
import { useTheme } from '@emotion/react';
import BodyMediaStack from '../../socialMediaStack/BodyMediaStack';

const FindMeOnCard = () => {
  const theme = useTheme();
  return (
    <Grid2 container paddingTop={{ xs: '5rem', md: '7.5rem' }} paddingBottom={{ xs: '5rem', md: '7.5rem' }}>
      <Grid2 size={1} display={{ xs: 'none', md: 'block' }} />
      <Grid2 size={'grow'} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack
          direction='column'
          spacing={{ xs: '0.33rem', sm: '0.40rem', md: '0.48rem', lg: '0.55rem', xl: '0.625rem' }}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h3'>Find me on,</Typography>

          <Typography variant='h4' sx={{ '& span:first-of-type': { color: theme.palette.primary.main } }}>
            Feel free to <span>connect</span> with me
          </Typography>

          <BodyMediaStack />
        </Stack>
      </Grid2>
      <Grid2 size={1} display={{ xs: 'none', md: 'block' }} />
    </Grid2>
  );
};

export default FindMeOnCard;
