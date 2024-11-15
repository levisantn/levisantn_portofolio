import { Button, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

const SeeMyResume = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='2.5rem'
        paddingBottom='3.75rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Button
            component={Link}
            to={'/resume'}
            variant='outlined'
            sx={{
              fontWeight: '700',
              borderRadius: '1rem',
              width: '32.5rem',
              fontSize: '2.25rem',
              textTransform: 'none',
              color: 'text.secondary',
              border: '0.2rem solid',
              borderColor: 'primary.main',
              bgcolor: 'primary.hover1',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                bgcolor: 'primary.main',
                borderColor: 'primary.main',
                transition: 'all 0.1s ease-in-out',
                color: 'text.primary',
              },
            }}
          >
            See my Resume
          </Button>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SeeMyResume;
