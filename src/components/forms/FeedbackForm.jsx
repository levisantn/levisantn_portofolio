import { FormContainer, TextFieldElement, TextareaAutosizeElement } from 'react-hook-form-mui';

import { Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const FeedbackForm = () => {
  const theme = useTheme();

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

  return (
    <FormContainer onSuccess={(data) => console.log(data)}>
      <TextFieldElement
        name='name'
        label='Name'
        margin='normal'
        placeholder='Name or Pseudo '
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
        fullWidth
        margin='normal'
        rules={{ validate: messageLenghtRule }}
        placeholder='Share your thoughts...'
        autoComplete='off'
        sx={{ marginTop: '1rem' }}
      />
      <TextareaAutosizeElement
        name='report-issue'
        label='Report an issue'
        minRows={2}
        maxRows={3}
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
          borderRadius: 2,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          '&:hover': {
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
          },
        }}
      >
        Submit
      </Button>
    </FormContainer>
  );
};

export default FeedbackForm;
