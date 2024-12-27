import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import bitmojiHidingEyes from '../assets/imgs/bitmoji/hiding_eyes.png';

const Error404 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      paddingTop={{ xs: '7.28rem', sm: '8.9rem', md: '10.51rem', lg: '12.5rem', xl: '13.75rem' }}
      paddingBottom={{ xs: '6.25rem', sm: '7.5rem', md: '8.75rem', lg: '10rem', xl: '11.25rem' }}
    >
      <Box
        component='img'
        alt='Hiding eyes bitmoji'
        src={bitmojiHidingEyes}
        sx={{
          width: { xs: '10.59rem', sm: '12.94rem', md: '15.29rem', lg: '17.65rem', xl: '20rem' },
          height: 'auto',
          marginBottom: { xs: '-6.01rem', sm: '-7.34rem', md: '-8.68rem', lg: '-10.01rem', xl: '-11.35rem' },
        }}
      />
      <Typography
        variant='headerSectionMono'
        sx={{
          fontSize: { xs: '10.59rem', sm: '12.94rem', md: '15.29rem', lg: '17.65rem', xl: '20rem' },
          fontWeight: '700',
          color: theme.palette.primary.main,
          marginBottom: { xs: '-2.65rem', sm: '-3.23rem', md: '-3.82rem', lg: '-4.41rem', xl: '-5rem' },
        }}
      >
        404
      </Typography>
      <Typography
        variant='headerSectionMono'
        fontSize={{ xs: '2.05rem', sm: '2.51rem', md: '2.96rem', lg: '3.42rem', xl: '3.875rem' }}
      >
        It looks like you&apos;re lost...
      </Typography>
      <Typography
        variant='subHeaderSectionMono'
        fontSize={{ xs: '0.79rem', sm: '0.97rem', md: '1.15rem', lg: '1.32rem', xl: '1.5rem' }}
        sx={{ whiteSpace: 'pre-wrap' }}
      >
        page not found, click&nbsp;
        <Link
          component={RouterLink}
          to='/home'
          underline='none'
          sx={{
            color: 'primary.main',
            '&:hover': {
              color: 'primary.light',
            },
          }}
        >
          here
        </Link>
        &nbsp;to find your way out
      </Typography>
    </Stack>
  );
};

export default Error404;
