import { Box, Grid2, Stack, Typography } from '@mui/material';

const WhatDrivesMeCardHome = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='3.5rem'
        paddingBottom='2.5rem'
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
            justifyContent: 'flex-end',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: '600',
              fontSize: '3.5rem',
              wordSpacing: '-0.5rem',
              fontFamily: 'var(--mono-font)',
              color: 'primary.light',
            }}
          >
            What drives me?
          </Typography>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        paddingTop='2.5rem'
        paddingBottom='5rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          spacing={'0.5rem'}
          padding={'0.5rem'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack direction='column' spacing={'5rem'}>
            <Typography
              variant='h4'
              sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
            >
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.&quot;
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          display='flex'
          size={'auto'}
          borderRadius={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Box
            component='img'
            alt='drinking soda bitmoji '
            src='/src/assets/imgs/bitmoji/working_bubble.png'
            sx={{
              width: '300px',
              height: '300px',
            }}
          />
        </Grid2>
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default WhatDrivesMeCardHome;
