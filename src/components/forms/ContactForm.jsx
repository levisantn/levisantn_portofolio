import { FormContainer, TextFieldElement, RadioButtonGroup, TextareaAutosizeElement } from 'react-hook-form-mui';

import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';

const ContactForm = () => {
  const theme = useTheme();

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

  // const CustomHelperText = (props) => {
  //   const { focused } = useFormControl() || {};
  //   const { helperTextMsg, HelperTextMsgOnFocus } = props;
  //   const helperText = React.useMemo(() => {
  //     if (focused) {
  //       return HelperTextMsgOnFocus;
  //     }
  //     return helperTextMsg;
  //   }, [focused]);

  //   return (
  //     <FormHelperText component={'span'} sx={{ margin: 0 }}>
  //       {helperText}
  //     </FormHelperText>
  //   );
  // };
  return (
    <FormContainer onSuccess={(data) => console.log(data)}>
      <TextFieldElement
        name='name'
        label='Name'
        margin='normal'
        placeholder='Full Name or Pseudo '
        // helperText=<CustomHelperText helperTextMsg=' ' HelperTextMsgOnFocus='Fill with your full name or pseudo' />
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
        options={[
          {
            id: 'my-work',
            label: 'My work',
          },
          {
            id: 'job-opportunity',
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

export default ContactForm;
