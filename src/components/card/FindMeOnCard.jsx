import { Box, Stack, Typography, Grid2 } from '@mui/material';
import RowStackContact from '../social-media/RowStackContact';

const FindMeOnCard = () => {
  return (
    <Grid2
      container
      spacing={0.5}
      size={'auto'}
      // padding={0.5}
      borderRadius={1}
      sx={{
        backgroundColor: 'background.paper',
        textAlign: 'center',
      }}
    >
      <Grid2
        size={'auto'}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.default',
          textAlign: 'center',
        }}
      >
        <Box sx={{ display: 'flex', height: '100%', justifyContent: 'flex-end' }}>
          <Stack
            direction='column'
            spacing={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Typography variant='h2' sx={{ fontWeight: 'regular' }}>
              Find Me On
            </Typography>

            <Typography variant='subtitle1' sx={{ '& span:first-of-type': { color: 'primary.main' } }}>
              Feel free to <span>connect</span> with me
            </Typography>

            <RowStackContact />
          </Stack>
        </Box>
      </Grid2>

      <Grid2
        size='auto'
        borderRadius={1}
        sx={{
          backgroundColor: 'background.default',
          textAlign: 'right',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component='img'
          alt='Laptop with hello hand bitmoji '
          src='src/assets/imgs/bitmoji/hello_door_cropped.png'
          sx={{
            width: '253px', // Set the desired width
            height: '397px', // Set the desired height
            borderRadius: 1,
            transform: 'scaleX(-1)',
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default FindMeOnCard;
