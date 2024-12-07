import { Stack, Typography, Grid2 } from '@mui/material';
import { useTheme } from '@emotion/react';

const MyResumeCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      paddingTop={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
      paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
    >
      <Grid2 size={'grow'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Stack
          direction='column'
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
          >
            My Resume,
          </Typography>

          <Typography
            variant='subHeaderSection'
            sx={{
              '& span:first-of-type': { color: theme.palette.primary.main },
              '& span:nth-of-type(2)': { color: theme.palette.primary.main },
              fontSize: { xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' },
            }}
          >
            <span>See</span> and <span>download</span> it below
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default MyResumeCard;
