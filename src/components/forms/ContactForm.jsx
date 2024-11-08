import { TextFieldElement, RadioButtonGroup, TextareaAutosizeElement, useForm } from 'react-hook-form-mui';
import { Alert, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const theme = useTheme();
  const SERVICE_ID = 'service_r9ib0n8';
  const TEMPLATE_ID = 'template_h21czra';
  const PUBLIC_KEY = 'c6OoWuOvzpAPDRizG';
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const nameLenghtRule = (value) => {
    if (value.length > 70) {
      return 'cannot be longer than 70 characters';
    }
    if (value.length < 3) {
      return 'cannot be shorter than 3 characters';
    }
  };
  const mailLenghtRule = (value) => {
    if (value.length > 256) {
      return 'cannot be longer than 256 characters';
    }
  };
  const messageLenghtRule = (value) => {
    if (value.length > 25000) {
      return 'cannot be longer than 25 000 characters';
    }
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      from_name: '',
      from_email: '',
      from_subject: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      from_subject: data.subject,
      message: data.message,
    };
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        console.log('Email sent succesfully');
        reset();
        setSuccessMessage('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        setErrorMessage(`Something went wrong... Email has not been sent succesfully.`);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {successMessage && (
        <Alert
          severity='success'
          variant='filled'
          sx={{
            whiteSpace: 'pre-line',
            marginBottom: '1rem',
            color: 'text.primary',
          }}
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert
          severity='error'
          variant='filled'
          sx={{
            whiteSpace: 'pre-line',
            marginBottom: '1rem',
            color: 'text.primary',
          }}
        >
          {errorMessage}
        </Alert>
      )}

      <TextFieldElement
        name='name'
        label='Name'
        margin='normal'
        placeholder='Full Name or Pseudo '
        control={control}
        required
        fullWidth
        rules={{ validate: nameLenghtRule }}
        sx={{
          '& .MuiOutlinedInput-input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
            caretColor: theme.palette.text.primary,
          },
        }}
      />
      <TextFieldElement
        name={'email'}
        label={'Email'}
        type={'email'}
        placeholder='dummy@mail.com'
        control={control}
        required
        fullWidth
        margin='normal'
        rules={{ validate: mailLenghtRule }}
        sx={{
          '& .MuiOutlinedInput-input:-webkit-autofill': {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
            WebkitTextFillColor: theme.palette.text.primary,
            caretColor: theme.palette.text.primary,
          },
        }}
      />
      <RadioButtonGroup
        name='subject'
        label='What is it about?'
        control={control}
        options={[
          {
            id: 'work',
            label: 'My work',
          },
          {
            id: 'job opportunity',
            label: 'Job opportunity',
          },
          {
            id: 'other',
            label: 'Other',
          },
        ]}
        row
        required
      />

      <TextareaAutosizeElement
        name='message'
        label='Message'
        rows={12}
        control={control}
        required
        fullWidth
        margin='normal'
        rules={{ validate: messageLenghtRule }}
        placeholder='Type your message...'
        autoComplete='off'
        sx={{ marginBottom: '1.5rem' }}
      />

      <Button
        variant='outlined'
        color='primary'
        type='submit'
        sx={{
          fontWeight: '700',
          borderRadius: 2,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.secondary',
          bgcolor: 'primary.hover1',
          '&:hover': {
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            color: 'text.primary',
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};
export default ContactForm;
