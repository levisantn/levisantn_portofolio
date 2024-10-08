import { Grid2, Typography, Stack, Box, Link } from '@mui/material';

const WriteMeAMailCard = () => {
  return (
    <Grid2
      container
      spacing={1}
      borderRadius={1}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Grid2
        display='flex'
        size={'grow'}
        direction='column'
        borderRadius={1}
        sx={{
          backgroundColor: 'background.default',
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
          backgroundColor: 'background.default',
        }}
      >
        <Link href='mailto:antonetti.levis@gmail.com'>
          <Box
            component='img'
            alt='send mail happy bitmoji'
            src='src/assets/imgs/bitmoji/send_mail_happy.png'
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
