import { Typography, Grid2, Stack, Box } from '@mui/material';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import bitmojiLaptopWithHelloHands from '../../../assets/imgs/bitmoji/laptop_with_hello_hand.png';

const HiThereCard = () => {
  const skills = ['Data Analyst', 'ML Developper', 'Open Source enthousiast', 'Lifelong learner'];
  return (
    <Grid2
      container
      paddingTop='5rem'
      paddingBottom='7.5rem'
      size={12}
      borderRadius={1}
      sx={{
        // backgroundColor: 'background.paper',
        height: 'auto',
      }}
    >
      <Grid2 display='flex' size={2} borderRadius={1}></Grid2>

      <Grid2
        display='flex'
        size={'grow'}
        direction='column'
        spacing={0.5}
        padding={0.5}
        borderRadius={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          direction='column'
          spacing={'5rem'}
          padding={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h1'
            sx={{
              fontWeight: '400',
              fontSize: '4.2rem',
              whiteSpace: 'pre-wrap',
              '& span:nth-of-type(2)': { color: 'primary.main' },
            }}
          >
            <br />
            <br />
            Hi There!{' '}
            <span className='wave' role='img' aria-labelledby='wave'>
              👋🏼
            </span>
            <br />
            I&apos;m <span style={{ fontWeight: '500' }}>Levis ANTONETTI</span>
          </Typography>

          <Typography variant='code' sx={{ fontSize: '3rem', fontWeight: '600', color: 'primary.light' }}>
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
        borderRadius={1}
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
            width: '400px',
            height: '400px',
            borderRadius: 1,
          }}
        />
      </Grid2>
      <Grid2 display='flex' size={2} borderRadius={1}></Grid2>
    </Grid2>
  );
};

export default HiThereCard;
