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
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
      >
        <Grid2 size={2.5} display={{ xs: 'none', md: 'flex' }} />
        <Grid2 display='flex' size='grow' alignItems='center' justifyContent={{ xs: 'center', md: 'flex-end' }}>
          <Typography
            variant='subHeaderSectionMono'
            fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
            fontWeight={600}
            textAlign='center'
            color={theme.palette.primary.light}
          >
            &quot;I seek to contribute to impactful projects aligned with my values,
            <br /> to solve real-world problems.&quot;
          </Typography>
        </Grid2>
        <Grid2 display='flex' size='grow' justifyContent={{ xs: 'center', md: 'flex-start' }}>
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
