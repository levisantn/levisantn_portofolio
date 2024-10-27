import { Container, Grid2, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RowStackFooter from '../social-media/RowStackFooter';

const Footer = () => {
  return (
    <Container sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 display='flex' justifyContent='left' alignItems='center' size='grow'>
          <Typography variant='code' fontWeight={500} fontSize='1.5rem'>
            Copyright&copy; 2024 levisantn
          </Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='center' alignItems='center'>
          <Typography variant='code' fontWeight={500} fontSize='1.5rem'>
            designed with <FavoriteIcon sx={{ color: 'primary.main', verticalAlign: 'bottom', fontSize: '2.5rem' }} />{' '}
            by Levis Antonetti
          </Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='right' size='grow' flexDirection='row'>
          <RowStackFooter />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;
