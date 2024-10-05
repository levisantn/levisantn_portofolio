import { Box, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{ maxWidth: '400px', m: 'auto' }}>
      <Typography variant='h6'>Contact Me</Typography>
      <form>
        <TextField label='Name' variant='outlined' fullWidth margin='normal' />
        <TextField label='Email' type='email' variant='outlined' fullWidth margin='normal' />
        <TextField label='Message' multiline rows={4} variant='outlined' fullWidth margin='normal' />
        <Button variant='contained' color='primary' type='submit'>
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
