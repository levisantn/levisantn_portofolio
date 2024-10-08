import { Grid2, Stack, Typography } from '@mui/material';
import ContactForm from '../forms/ContactForm';

const FillTheFormCard = () => {
  return (
    <Grid2
      container
      spacing={1}
      padding={2}
      borderRadius={1}
      direction={'column'}
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Grid2
        display='flex'
        size={'auto'}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.default',
          justifyContent: 'center',
          margin: '2rem',
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
            Fill The Form
          </Typography>
          <Typography
            variant='code'
            sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
          >
            To <span>get in touch</span> by mail
          </Typography>
        </Stack>
      </Grid2>
      <Grid2
        display='flex'
        size={'grow'}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.default',
          justifyContent: 'center',
        }}
      >
        <ContactForm />
      </Grid2>
    </Grid2>
  );
};

export default FillTheFormCard;
