import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import bitmojiHidingEyes from '../assets/imgs/bitmoji/hiding_eyes.png';

const Error404 = () => {
  return (
    <Stack direction='column' alignItems='center' padding={'6rem'}>
      <Box
        component='img'
        alt='Hiding eyes bitmoji '
        src={bitmojiHidingEyes}
        sx={{
          width: '20rem',
          height: '20rem',
          borderRadius: 1,
          marginBottom: '-11.5rem',
        }}
      />
      <Typography
        variant='code'
        sx={{ fontSize: '20rem', fontWeight: '700', color: 'primary.main', marginBottom: '-5rem' }}
      >
        404
      </Typography>
      <Typography variant='code' sx={{ fontSize: '3.5rem' }}>
        It looks like you&apos;re lost...
      </Typography>
      <Typography variant='code' sx={{ fontSize: '1.375rem', whiteSpace: 'pre-wrap' }}>
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
