import { useTheme } from '@emotion/react';
import { Grid2, Typography, Stack, Box, Link } from '@mui/material';
import bitmojiSendMailHappy from '../../../assets/imgs/bitmoji/send_mail_happy.png';

const WriteMeAMailCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      spacing='1rem'
      borderRadius='1rem'
      sx={{
        width: '100%',
        height: '100%',
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
        display='flex'
        size={'grow'}
        direction='column'
        borderRadius={1}
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Stack
          direction='column'
          spacing={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h2' sx={{ fontWeight: 'regular' }}>
            Write Me A Mail
          </Typography>
          <Typography
            variant='code'
            sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
          >
            <span>Click</span> on the image to open your
            <br />
            OS email client
          </Typography>
        </Stack>
      </Grid2>

      <Grid2
        display='flex'
        size={5}
        borderRadius={1}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Link href='mailto:antonetti.levis@gmail.com'>
          <Box
            component='img'
            alt='send mail happy bitmoji'
            src={bitmojiSendMailHappy}
            sx={{
              width: '190px',
              height: '190px',
              borderRadius: 1,
            }}
          />
        </Link>
      </Grid2>
    </Grid2>
  );
};

export default WriteMeAMailCard;
