import { Grid2, Stack, Typography } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FooterMediaStack from '../socialMediaStack/FooterMediaStack';

const Footer = () => {
  return (
    <Grid2 container padding='1.25rem'>
      <Stack direction={{ xs: 'column', md: 'row' }} width='100%' justifyContent='space-between' alignItems='center'>
        <Typography
          variant='footer'
          fontSize={{ xs: '0.93rem', sm: '1.13rem', md: '1.34rem', lg: '1.54rem', xl: '1.75rem' }}
        >
          Copyright&copy; 2025 levisantn
        </Typography>
        {/* ----- */}
        <Typography
          variant='footer'
          fontSize={{ xs: '0.93rem', sm: '1.13rem', md: '1.34rem', lg: '1.54rem', xl: '1.75rem' }}
        >
          designed with{' '}
          <FavoriteIcon
            sx={{
              color: 'primary.main',
              verticalAlign: 'bottom',
              fontSize: { xs: '1.45rem', sm: '1.7rem', md: '2.1rem', lg: '2.4rem', xl: '2.65rem' },
            }}
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
