import { Grid2, Typography } from '@mui/material';

const SkillsetCardHome = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='5rem'
        paddingBottom='2.5rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: '600',
              fontSize: '3.5rem',
              wordSpacing: '-0.5rem',
              fontFamily: 'var(--mono-font)',
              color: 'primary.light',
            }}
          >
            Skillset
          </Typography>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        paddingTop='2.5rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          spacing={0.5}
          padding={0.5}
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.default',
          }}
        ></Grid2>
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SkillsetCardHome;
