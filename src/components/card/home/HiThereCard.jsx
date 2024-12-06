import { Typography, Grid2, Stack, Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Typewriter from 'typewriter-effect';
import 'animate.css';

import bitmojiLaptopWithHelloHands from '../../../assets/imgs/bitmoji/laptop_with_hello_hand.png';

const HiThereCard = () => {
  const theme = useTheme();
  const skills = ['Data Analyst', 'ML Developper', 'Open Source enthousiast', 'Lifelong learner'];

  return (
    <Grid2
      container
      paddingTop={{ xs: '2.5rem', md: '5rem' }}
      paddingBottom={{ xs: '2.5rem', md: '5rem' }}
      size={12}
      direction={{ xs: 'column', md: 'row' }}
    >
      <Grid2 size={2} display={{ xs: 'none', md: 'block' }} />
      <Grid2
        display='flex'
        size={'grow'}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction='column'
          spacing='5rem'
          padding='1.5rem'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              whiteSpace: 'pre-wrap',
              '& span:nth-of-type(2)': { color: theme.palette.primary.main, fontWeight: '600' },
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem', lg: '3.73rem', xl: '4.25rem' },
            }}
          >
            <br />
            Hi There!{' '}
            <span className='wave' role='img' aria-labelledby='wave'>
              👋🏼
            </span>
            <br />
            I&apos;m <span>Levis Antonetti</span>
          </Typography>

          <Typography
            variant='h2'
            color={theme.palette.primary.light}
            sx={{ fontSize: { xs: '1.48rem', sm: '1.8rem', md: '2.14rem', lg: '2.47rem', xl: '2.8rem' } }}
          >
            <Typewriter
              options={{
                strings: skills,
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Stack>
      </Grid2>

      <Grid2
        display='flex'
        size={'grow'}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          alt='laptop with hello hand bitmoji'
          src={bitmojiLaptopWithHelloHands}
          sx={{
            width: { xs: '211px', sm: '259px', md: '306px', lg: '353px', xl: '400px' },
            height: 'auto',
          }}
        />
      </Grid2>
      <Grid2 size={2} display={{ xs: 'none', md: 'block' }} />
    </Grid2>
  );
};

export default HiThereCard;
