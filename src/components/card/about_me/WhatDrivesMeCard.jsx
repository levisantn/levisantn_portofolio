import { Box, Grid2, Stack, Typography } from '@mui/material';

const WhatDrivesMeCardHome = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='3.5rem'
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
          size={6}
          spacing={'0.5rem'}
          padding={'0.5rem'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='h4'
              sx={{
                textAlign: 'center',
                fontWeight: '400',
                fontSize: '2.5rem',
                whiteSpace: 'pre-wrap',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              &quot;I seek to contribute to impactful projects aligned with my values,
              <br /> to solve real-world problems.&quot;
            </Typography>
            <Typography
              variant='h4'
              sx={{
                textAlign: 'right',
                fontWeight: '400',
                whiteSpace: 'pre-wrap',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            ></Typography>
          </Stack>
        </Grid2>
        <Grid2
          display='flex'
          size={2}
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
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default WhatDrivesMeCardHome;
