// src/componetns/Footer.tsx
import { Container, Grid2, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 display='flex' justifyContent='left' size='grow'>
          <Typography variant='subtitle1'>Copyright&copy; 2024 levisantn</Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='center'>
          <Typography variant='subtitle1' fontWeight={500}>
            designed with ♥️ by Levis Antonetti
          </Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='right' size='grow'>
          <Typography variant='subtitle1'>{`<github> <tableau> <kaggle> <insta> <leetcode>`}</Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;
