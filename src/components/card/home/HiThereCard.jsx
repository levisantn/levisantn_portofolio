import { Typography, Grid2, Stack, Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import Typewriter from 'typewriter-effect';
import 'animate.css';

import bitmojiLaptopWithHelloHands from '../../../assets/imgs/bitmoji/laptop_with_hello_hand.png';

const HiThereCard = () => {
  const theme = useTheme();
  const skills = ['Data Analyst', 'Data-Driven', 'ML Developer', 'Open Source Enthousiast', 'Lifelong Learner'];

  return (
    <Grid2
      container
      paddingTop={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
      paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
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
            variant='mainHeader'
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
            variant='headerSectionMono'
            color={theme.palette.primary.light}
            fontSize={{ xs: '1.48rem', sm: '1.8rem', md: '2.14rem', lg: '2.47rem', xl: '2.8rem' }}
            fontWeight='600'
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
