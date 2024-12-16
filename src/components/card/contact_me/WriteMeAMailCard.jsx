import { useTheme } from '@emotion/react';
import { Grid2, Typography, Stack, Box, Link } from '@mui/material';
import bitmojiSendMailHappy from '../../../assets/imgs/bitmoji/send_mail_happy.png';

const WriteMeAMailCard = () => {
  const theme = useTheme();
  const MAIL = import.meta.env.VITE_MAIL;
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
      <Grid2 display='flex' size={'grow'} direction='column' justifyContent='flex-end' alignItems='center'>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
          >
            Write Me A Mail
          </Typography>
          <Typography
            variant='subHeaderSection'
            fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
            sx={{
              textAlign: 'center',
              whiteSpace: 'pre-wrap',
              '& span:first-of-type': { color: theme.palette.primary.main },
              '& span:nth-of-type(2)': { color: theme.palette.primary.main },
            }}
          >
            <span>Click</span> on the image to <span>open</span>
            <br />
            OS email client
          </Typography>
        </Stack>
      </Grid2>

      <Grid2 size={5} justifyContent='flex-start' alignItems='center'>
        <Link href={`mailto:${MAIL}`}>
          <Box
            component='img'
            alt='send mail happy bitmoji'
            src={bitmojiSendMailHappy}
            sx={{
              width: { xs: '10.6rem', sm: '12.9rem', md: '15.3rem', lg: '17.6rem', xl: '20rem' },
              height: { xs: '10.6rem', sm: '12.9rem', md: '15.3rem', lg: '17.6rem', xl: '20rem' },
            }}
          />
        </Link>
      </Grid2>
    </Grid2>
  );
};

export default WriteMeAMailCard;
