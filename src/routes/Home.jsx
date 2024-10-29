import { Typography, Grid2, Stack, Box, Divider, Avatar } from '@mui/material';
import Typewriter from 'typewriter-effect';
import FindMeOnCardHome from '../components/card/FindMeOnCardHome';

const Home = () => {
  const skills = ['Data Analyst', 'ML Developper', 'Open Source enthousiast'];
  return (
    <Grid2
      container
      padding={2}
      spacing={1}
      sx={{
        backgroundColor: 'background.default',
        flexDirection: 'column',
      }}
    >
      <Grid2
        container
        spacing={0.5}
        padding={0.5}
        size={12}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          height: '60rem',
        }}
      >
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
          }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          spacing={0.5}
          padding={0.5}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack
            direction='column'
            spacing={'5rem'}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h1'
              sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
            >
              Hi There! 👋🏼
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
            backgroundColor: 'background.default',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component='img'
            alt='drinking soda bitmoji '
            src='/src/assets/imgs/bitmoji/laptop_with_hello_hand.png'
            sx={{
              width: '400px',
              height: '400px',
              borderRadius: 1,
            }}
          />
        </Grid2>
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
          }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Divider
        sx={{
          borderColor: 'background.paper',
          borderWidth: 2,
          borderRadius: 1,
          // margin: '1rem',
        }}
      />
      {/* -------------------------------- */}
      <Grid2
        container
        spacing={0.5}
        padding={0.5}
        size={12}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          height: '40rem',
        }}
      >
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
          }}
        ></Grid2>
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='front face bitmoji '
            src='/src/assets/imgs/bitmoji/front_face_rogner.png'
            sx={{
              width: '20rem',
              height: 'auto',
              backgroundColor: 'background.paper',
            }}
          />
        </Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          spacing={0.5}
          padding={0.5}
          direction='column'
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Stack
            direction='column'
            spacing={'5rem'}
            sx={{
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
                paddingLeft: '5rem',
              }}
            >
              Let me <span style={{ fontWeight: '500' }}>Introduce</span> myself,
            </Typography>

            <Typography
              variant='h5'
              sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
            >
              TODO
              <br />
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />
              I am fluent in classics like C++, Javascript and Go.
              <br />
              <br />
              My field of Interest&apos;s are building new Web Technologies and Products and also in areas related to
              Blockchain.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript
              Library and Frameworks like React.js and Next.js
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.default',
          }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Divider
        sx={{
          borderColor: 'background.paper',
          borderWidth: 2,
          borderRadius: 1,
          // margin: '1rem',
        }}
      />
      {/* -------------------------------- */}

      <FindMeOnCardHome />
    </Grid2>
  );
};

export default Home;
