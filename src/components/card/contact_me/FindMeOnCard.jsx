import { Box, Stack, Typography, Grid2 } from '@mui/material';
import RowStackContact from '../../social-media/RowStackContact';
import { useTheme } from '@emotion/react';
import bitmojiHelloDoor from '../../../assets/imgs/bitmoji/hello_door_cropped.png';

const FindMeOnCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      size={'grow'}
      borderRadius='1rem'
      sx={{
        border: `0.25rem solid ${theme.palette.primary.hover2}`,
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          border: `0.25rem solid ${theme.palette.background.default}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
          transform: 'translateY(-0.25rem)',
          transition: 'all 0.1s ease-in-out',
        },
      }}
    >
      <Grid2 size={'grow'} borderRadius={1}>
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'flex-end' }}>
          <Stack
            direction='column'
            spacing={1}
            padding={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Typography variant='h2' sx={{ fontWeight: 'regular' }}>
              Find Me On
            </Typography>

            <Typography variant='subtitle1' sx={{ '& span:first-of-type': { color: 'primary.main' } }}>
              Feel free to <span>connect</span> with me
            </Typography>

            <RowStackContact />
          </Stack>
        </Box>
      </Grid2>

      <Grid2
        size='auto'
        borderRadius={1}
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          component='img'
          alt='Laptop with hello hand bitmoji '
          src={bitmojiHelloDoor}
          sx={{
            width: '257px',
            height: '400px',
            borderRadius: 1,
            transform: 'scaleX(-1)',
            display: 'flex',
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default FindMeOnCard;
