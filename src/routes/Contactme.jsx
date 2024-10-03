import { Box, Grid2 } from '@mui/material';
import FindMeOnCard from '../components/social-media/FindMeOnCard';

const Contactme = () => {
  return (
    <Grid2 container padding={2} spacing={1}>
      <Grid2
        size='grow'
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.paper',
          textAlign: 'right',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          component='img'
          alt='Laptop with hello hand bitmoji '
          src='src/assets/imgs/bitmoji/laptop_with_hello_hand.png'
          sx={{
            width: '350px', // Set the desired width
            height: '350px', // Set the desired height
            borderRadius: 1,
          }}
        />
      </Grid2>

      <Grid2
        size={7}
        padding={1}
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <FindMeOnCard />
      </Grid2>

      <Grid2 size={7} padding={1} borderRadius={1} sx={{ textAlign: 'center', backgroundColor: 'background.paper' }}>
        contact form
      </Grid2>

      <Grid2 size={5} padding={1} borderRadius={1} sx={{ textAlign: 'center', backgroundColor: 'background.paper' }}>
        <Box
          component='img'
          alt='Laptop with hello hand bitmoji '
          src='src/assets/imgs/bitmoji/send_mail_happy.png'
          sx={{
            width: '300px', // Set the desired width
            height: '300px', // Set the desired height
            borderRadius: 1,
          }}
          onClick={() => {
            window.location.href = `mailto:antonetti.levis@gmail.com`; // Replace with your desired email address
          }}
        />
      </Grid2>
    </Grid2>
  );
};

export default Contactme;
