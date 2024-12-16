import { Grid2, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import ContactForm from '../../forms/ContactForm';

const FillTheFormCard = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      spacing='1.25rem'
      borderRadius='1.25rem'
      padding='2.5rem'
      direction={'column'}
      sx={{
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
      <Grid2 justifyContent='center' margin='1.25rem'>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
          >
            Fill The Form
          </Typography>
          <Typography
            variant='subHeaderSection'
            fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
            sx={{ '& span:first-of-type': { color: theme.palette.primary.main } }}
          >
            To <span>get</span> in touch by mail
          </Typography>
        </Stack>
      </Grid2>
      <Grid2 size={'grow'} justifyContent='center'>
        <ContactForm />
      </Grid2>
    </Grid2>
  );
};

export default FillTheFormCard;
