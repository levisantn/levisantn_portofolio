import { Typography, Grid2, Stack, Avatar } from '@mui/material';

const IntroduceMyselfCard = () => {
  return (
    <Grid2
      container
      paddingTop='7.5rem'
      paddingBottom='7.5rem'
      size={12}
      borderRadius={1}
      sx={{
        backgroundColor: 'primary.hover2',
        height: 'auto',
      }}
    >
      <Grid2 display='flex' size={1} borderRadius={1}></Grid2>
      <Grid2
        display='flex'
        size={2}
        borderRadius={1}
        sx={{
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
            backgroundColor: 'primary.hover1',
          }}
        />
      </Grid2>

      <Grid2
        display='flex'
        size={'grow'}
        spacing={'0.5rem'}
        padding={'0.5rem'}
        direction='column'
        borderRadius={1}
        sx={{
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
              '& span:nth-of-type(2)': { color: 'primary.main' },
              paddingLeft: '5rem',
            }}
          >
            Let me <span style={{ fontWeight: '500' }}>Introduce</span> myself,
          </Typography>

          <Typography
            variant='h5'
            sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
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
            {/* <br />
            <br />
            I am proficient in Python, Sql, Tableau and I prefer working in a Linux environment. */}
            <br />
            <br />
            On my free time, I enjoy working on development projects, and solving algorithmic problems.
            <br />
            <br />
            Besides coding, I&apos;m keen on Korean culture and outdoor sliding sports. I like to spend my time playing
            competitive and board games, reading manga, watching TV shows, and traveling.
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 display='flex' size={1} borderRadius={1}></Grid2>
    </Grid2>
  );
};

export default IntroduceMyselfCard;
