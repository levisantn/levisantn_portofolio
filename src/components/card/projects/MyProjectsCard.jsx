import { Stack, Typography, Grid2 } from '@mui/material';
import { useTheme } from '@emotion/react';

const MyProjectsCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      paddingTop={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
      paddingBottom={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
    >
      <Grid2 size={'grow'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack
          sx={{
            direction: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='headerSection'
            sx={{
              fontSize: { xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' },
            }}
          >
            My Projects,
          </Typography>

          <Typography
            variant='subHeaderSection'
            sx={{
              '& span:first-of-type': { color: theme.palette.primary.main },
              fontSize: { xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' },
            }}
          >
            <span>Discover</span> a showcase of my work
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default MyProjectsCard;
