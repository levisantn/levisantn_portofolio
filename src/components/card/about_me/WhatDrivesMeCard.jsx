import { Box, Grid2, Typography } from '@mui/material';
import bitmojiWorkingBubble from '../../../assets/imgs/bitmoji/working_bubble.png';
import { useTheme } from '@emotion/react';

const WhatDrivesMeCardHome = () => {
  const theme = useTheme();

  return (
    <Grid2 container size={12}>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        paddingTop={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
        paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
      >
        <Grid2 size={3} />

        <Grid2 display='flex' size={'grow'} justifyContent='flex-end'>
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
            sx={{
              wordSpacing: '0.25rem',
            }}
          >
            What drives me?
          </Typography>
        </Grid2>
        <Grid2 size={3} />
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
      >
        <Grid2 display='flex' size={'grow'} alignItems='center' justifyContent='flex-end'>
          <Typography
            variant='subHeaderSection'
            fontSize={{ xs: '1.125rem', sm: '1.375rem', md: '1.625rem', lg: '1.875rem', xl: '2.125rem' }}
            textAlign='center'
            color={theme.palette.primary.light}
          >
            &quot;I seek to contribute to impactful projects aligned with my values,
            <br /> to solve real-world problems.&quot;
          </Typography>
        </Grid2>
        <Grid2 display='flex' size={4} justifyContent='center' alignItems='center'>
          <Box
            component='img'
            alt='drinking soda bitmoji '
            src={bitmojiWorkingBubble}
            sx={{
              width: { xs: '15.9rem', sm: '19.4rem', md: '22.9rem', lg: '26.5rem', xl: '30rem' },
              height: { xs: '15.9rem', sm: '19.4rem', md: '22.9rem', lg: '26.5rem', xl: '30rem' },
            }}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default WhatDrivesMeCardHome;
