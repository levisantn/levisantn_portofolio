import { Container, Stack, Typography } from '@mui/material';
import RowStackFooter from './RowStackFooter';

import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <Container container maxWidth='false' sx={{ padding: '1.25rem' }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center'>
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
        <RowStackFooter />
      </Stack>
    </Container>
  );
};

export default Footer;
