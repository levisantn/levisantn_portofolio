import { Grid2, Typography, Stack, IconButton, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const FindMeAroundCard = () => {
  return (
    <Grid2
      container
      spacing={1}
      borderRadius={1}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Grid2
        display='flex'
        size={5}
        borderRadius={1}
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          alt='drinking soda bitmoji '
          src='src/assets/imgs/bitmoji/drinking_soda.png'
          sx={{
            width: '190px',
            height: '190px',
            borderRadius: 1,
          }}
        />
      </Grid2>
      <Grid2
        display='flex'
        size={'grow'}
        direction='column'
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.default',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Stack
          direction='column'
          spacing={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h2' sx={{ fontWeight: 'regular' }}>
            Find Me Around
          </Typography>
          <Typography variant='code' sx={{ '& span:first-of-type': { color: 'primary.main' } }}>
            <IconButton
              // disabled
              href='https://www.google.com/maps/place/Toulouse/@47.2000805,-1.8051238,5z/data=!4m6!3m5!1s0x12aebb6fec7552ff:0x406f69c2f411030!8m2!3d43.6048462!4d1.442848!16zL20vMGNiaGg?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              sx={{
                color: 'primary.main',
                width: '30px',
                height: '30px',
                marginRight: '0.5rem',
                marginBottom: '0.75rem',
                borderRadius: 2,
                padding: '2rem',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                '&.Mui-disabled': {
                  color: 'primary.main',
                },
              }}
            >
              <FontAwesomeIcon icon={faMapLocationDot} />
            </IconButton>
            France, <span>Toulouse</span>, 31
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default FindMeAroundCard;
