import { TextFieldElement, TextareaAutosizeElement, useForm } from 'react-hook-form-mui';
import { Alert, Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const FeedbackForm = () => {
  const theme = useTheme();
  const SERVICE_ID = 'service_r9ib0n8';
  const TEMPLATE_ID = 'template_pzztydc';
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
  const messageLenghtRule = (value) => {
    if (value.length > 400) {
      return 'cannot be longer than 400 characters';
    }
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      from_name: '',
      comment: '',
      suggestion: '',
      report_issue: '',
    },
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      comment: data.comment,
      suggestion: data.suggestion,
      report_issue: data.report_issue,
    };
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        console.log('Feedback sent succesfully');
        reset();
        setSuccessMessage('Feedback sent successfully!');
      })
      .catch((error) => {
        console.error('Feedback sending error:', error);
        setErrorMessage(`Something went wrong... Feedback has not been sent succesfully.`);
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
        placeholder='Name or Pseudo '
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
          marginTop: '2.5rem',
        }}
      />

      <TextareaAutosizeElement
        name='comment'
        label='Comment'
        control={control}
        minRows={4}
        maxRows={4}
        required
        fullWidth
        margin='normal'
        rules={{ validate: messageLenghtRule }}
        placeholder="Type anything you'd like..."
        autoComplete='off'
        sx={{ marginBottom: '2rem' }}
      />
      <Typography variant='code' sx={{ textAlign: 'left', width: '100%' }}>
        Additional feedbacks:
      </Typography>

      <TextareaAutosizeElement
        name='suggestion'
        label='Suggest improvements'
        minRows={2}
        maxRows={3}
        control={control}
        fullWidth
        margin='normal'
        rules={{ validate: messageLenghtRule }}
        placeholder='Share your thoughts...'
        autoComplete='off'
        sx={{ marginTop: '1rem' }}
      />
      <TextareaAutosizeElement
        name='report_issue'
        label='Report an issue'
        minRows={2}
        maxRows={3}
        control={control}
        fullWidth
        margin='normal'
        rules={{ validate: messageLenghtRule }}
        placeholder="Let me know what's not working..."
        autoComplete='off'
        sx={{ marginTop: '3px', marginBottom: '1.5rem' }}
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
          '& .MuiTouchRipple-root': {
            color: 'primary.light',
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default FeedbackForm;
