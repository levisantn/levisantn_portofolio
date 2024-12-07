import { Typography, Grid2, Stack, Avatar } from '@mui/material';
import { useTheme } from '@emotion/react';
import bitmojiFrontFace from '../../../assets/imgs/bitmoji/front_face_rogner.png';

const IntroduceMyselfCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      direction={{ xs: 'column', md: 'row' }}
      paddingTop={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
      paddingBottom={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
      spacing={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
      backgroundColor={theme.palette.primary.hover2}
      sx={{
        paddingLeft: { xs: '2.5rem', sm: '3.75rem', md: '0rem' },
        paddingRight: { xs: '2.5rem', sm: '3.75rem', md: '0rem' },
      }}
    >
      <Grid2 size={1} display={{ xs: 'none', md: 'block' }} />
      <Grid2
        display='flex'
        size={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '100%', md: 'auto' },
        }}
      >
        <Avatar
          alt='front face bitmoji'
          src={bitmojiFrontFace}
          sx={{
            width: { xs: '10.59rem', sm: '12.95rem', md: '15.3rem', lg: '17.65rem', xl: '20rem' },
            height: 'auto',
            backgroundColor: theme.palette.primary.hover1,
          }}
        />
      </Grid2>

      <Grid2
        direction='column'
        display='flex'
        size={'grow'}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Stack
          direction='column'
          spacing={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
          sx={{
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            variant='headerSection'
            sx={{
              '& span:first-of-type': { color: theme.palette.primary.main, fontWeight: '500' },
              textAlign: { xs: 'center', md: 'left' },
              width: '100%',

              paddingLeft: { xs: '0', sm: '0', md: '5rem', lg: '6.25rem', xl: '7.5rem' },
              fontSize: { xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' },
            }}
          >
            Let me <span>Introduce</span> myself,
          </Typography>

          <Typography
            variant='bodySection'
            sx={{
              whiteSpace: 'pre-wrap',
              '& span:first-of-type': { color: theme.palette.primary.main },
              fontSize: { xs: '0.93rem', sm: '1.13rem', md: '1.34rem', lg: '1.54rem', xl: '1.75rem' },
            }}
          >
            Hi, I&apos;m from <span>Toulouse</span>, France.
            <br />
            <br />
            My passion for computer science ignited in high School. I find joy in understanding the mechanisms of new
            technologies and am driven by the satisfaction of solving problems.
            <br />
            <br />
            More specifically, I specialize in data science. I am a data-driven guy, that understand data&apos;s value
            as a tool for optimizing business processes and enhancing decision-making.
            <br />
            <br />
            On my free time, I enjoy working on development projects, and solving algorithmic problems.
            <br />
            <br />
            Besides coding, I&apos;m keen on South Korean culture and outdoor sliding sports. I like to spend my time
            playing competitive and board games, reading manga, watching TV shows, and traveling.
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={1} display={{ xs: 'none', md: 'block' }} />
    </Grid2>
  );
};

export default IntroduceMyselfCard;
