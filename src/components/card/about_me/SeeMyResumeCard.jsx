import { useTheme } from '@emotion/react';
import { Button, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

const SeeMyResume = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      size={12}
      padding={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
      paddingTop={{ xs: '0rem', sm: '1.25rem', md: '2.5rem', lg: '2.5rem', xl: '2.5rem' }}
    >
      <Grid2 display='flex' size={'grow'} justifyContent='center'>
        <Button
          component={Link}
          to={'/resume'}
          variant='outlined'
          sx={{
            borderRadius: '1rem',
            fontWeight: '700',
            width: { xs: '20rem', sm: '22.65rem', md: '26.76rem', lg: '30.88rem', xl: '35rem' },
            fontSize: { xs: '1.32rem', sm: '1.62rem', md: '1.91rem', lg: '2.21rem', xl: '2.5rem' },
            textTransform: 'none',
            color: theme.palette.text.secondary,
            border: '0.2rem solid',
            borderColor: theme.palette.primary.main,
            bgcolor: theme.palette.primary.hover1,
            transition: 'all 0.1s ease-in-out',
            '&:hover': {
              bgcolor: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              transition: 'all 0.1s ease-in-out',
              color: theme.palette.text.primary,
            },
            '& .MuiTouchRipple-root': {
              color: theme.palette.primary.light,
            },
          }}
        >
          See my Resume
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default SeeMyResume;
