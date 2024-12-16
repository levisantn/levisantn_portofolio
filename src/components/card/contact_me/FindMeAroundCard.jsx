import { Grid2, Typography, Stack, IconButton, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/material/styles';
import bitmojiDrinkingTea from '../../../assets/imgs/bitmoji/drinking_tea.png';

const FindMeAroundCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      size={12}
      container
      spacing='1.25rem'
      borderRadius='1.25rem'
      paddingLeft='0.625rem'
      paddingRight='0.625rem'
      sx={{
        height: '50%',
        border: `0.25rem solid ${theme.palette.primary.hover2}`,
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          border: `0.25rem solid ${theme.palette.background.default}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
          transform: 'translateY(-0.25rem)',
          transition: 'all 0.1s ease-in-out',
        },
      }}
    >
      <Grid2
        size={5}
        display='flex'
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Box
          component='img'
          alt='drinking soda bitmoji'
          src={bitmojiDrinkingTea}
          sx={{
            width: { xs: '10.6rem', sm: '12.9rem', md: '15.3rem', lg: '17.6rem', xl: '20rem' },
            height: { xs: '10.6rem', sm: '12.9rem', md: '15.3rem', lg: '17.6rem', xl: '20rem' },
            transform: 'scaleX(-1)',
          }}
        />
      </Grid2>
      <Grid2
        size={'grow'}
        display='flex'
        direction='column'
        sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
          >
            Find Me Around
          </Typography>
          <Typography
            variant='subHeaderSection'
            fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
            sx={{ '& span:first-of-type': { color: 'primary.main' } }}
          >
            <IconButton
              href='https://www.google.com/maps/place/Toulouse/@47.2000805,-1.8051238,5z/data=!4m6!3m5!1s0x12aebb6fec7552ff:0x406f69c2f411030!8m2!3d43.6048462!4d1.442848!16zL20vMGNiaGg?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              sx={{
                color: theme.palette.primary.main,
                width: '3.75rem',
                height: '3.75rem',
                marginBottom: '0.75rem',
                marginRight: '0.25rem',
                padding: '2rem',
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <FontAwesomeIcon icon={faMapLocationDot} />
            </IconButton>
            France, <span>Toulouse</span>, 31
          </Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default FindMeAroundCard;
