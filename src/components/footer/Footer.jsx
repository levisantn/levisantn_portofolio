import { Grid2, Stack, Typography } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FooterMediaStack from '../socialMediaStack/FooterMediaStack';

const Footer = () => {
  return (
    <Grid2 container padding='1.25rem'>
      <Stack direction={{ xs: 'column', md: 'row' }} width='100%' justifyContent='space-between' alignItems='center'>
        <Typography variant='footer' sx={{ fontSize: { xs: '1.25rem', lg: '1.5rem' } }}>
          Copyright&copy; 2024 levisantn
        </Typography>
        {/* ----- */}
        <Typography variant='footer' sx={{ fontSize: { xs: '1.25rem', lg: '1.5rem' } }}>
          designed with{' '}
          <FavoriteIcon
            sx={{ color: 'primary.main', verticalAlign: 'bottom', fontSize: { xs: '2rem', lg: '2.25rem' } }}
          />{' '}
          by Levis Antonetti
        </Typography>
        {/* ---------- */}
        <FooterMediaStack />
      </Stack>
    </Grid2>
  );
};

export default Footer;
