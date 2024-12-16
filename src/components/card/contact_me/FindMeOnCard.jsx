import { Box, Stack, Typography, Grid2 } from '@mui/material';
import { useTheme } from '@emotion/react';
import bitmojiHelloDoor from '../../../assets/imgs/bitmoji/hello_door_cropped.png';
import ContactMediaStack from '../../socialMediaStack/ContactMediaStack';

const FindMeOnCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      size={'grow'}
      borderRadius='1.25rem'
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
      <Grid2
        size='auto'
        display={{ xs: 'none', sm: 'block', lg: 'none' }}
        borderRadius='1.25rem'
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: { xs: '14.6rem', sm: '17.8rem', md: '21rem', lg: '24.3rem', xl: '27.5rem' },
            height: { xs: '22.5rem', sm: '27.5rem', md: '32.5rem', lg: '37.5rem', xl: '42.5rem' },
          }}
        />
      </Grid2>
      <Grid2
        size={'grow'}
        sx={{ display: 'flex', height: '100%', justifyContent: { xs: 'center', lg: 'flex-end' }, alignItems: 'center' }}
      >
        <Stack
          direction='column'
          sx={{
            justifyContent: 'center',
            alignItems: { xs: 'center', lg: 'flex-end' },
          }}
        >
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
          >
            Find Me On
          </Typography>

          <Typography
            variant='subHeaderSection'
            fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
            sx={{ '& span:first-of-type': { color: theme.palette.primary.main } }}
          >
            Feel free to <span>connect</span> with me
          </Typography>

          <ContactMediaStack />
        </Stack>
      </Grid2>

      <Grid2
        size='auto'
        borderRadius='1.25rem'
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          component='img'
          alt='Side Hello Door'
          src={bitmojiHelloDoor}
          sx={{
            display: 'flex',
            width: { xs: '14.6rem', sm: '17.8rem', md: '21rem', lg: '24.3rem', xl: '27.5rem' },
            height: { xs: '22.5rem', sm: '27.5rem', md: '32.5rem', lg: '37.5rem', xl: '42.5rem' },
            transform: 'scaleX(-1)',
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default FindMeOnCard;
