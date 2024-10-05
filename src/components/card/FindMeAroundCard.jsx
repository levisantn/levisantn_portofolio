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
              disabled
              sx={{
                color: 'text.primary',
                width: '30px',
                height: '30px',
                paddingRight: '25px',
                paddingBottom: '15px',
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
