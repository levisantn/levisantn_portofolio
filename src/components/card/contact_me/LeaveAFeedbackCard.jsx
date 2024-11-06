import { Button, Grid2, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import FeedbackForm from '../../forms/FeedbackForm';

const LeaveAFeedbackCard = () => {
  const theme = useTheme();
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
        border: `0.25rem solid ${theme.palette.primary.hover2}`,
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          border: `0.25rem solid ${theme.palette.background.default}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
          transform: 'translateY(-0.25rem)',
          transition: 'all 0.1s ease-in-out',
        },
      }}
    >
      <Grid2
        display='flex'
        size={'auto'}
        borderRadius={1}
        sx={{
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
            Leave A Feedback
          </Typography>
          <Typography
            variant='code'
            sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
          >
            <span>Review</span> my website
          </Typography>
        </Stack>
      </Grid2>
      <Grid2
        display='flex'
        size={'auto'}
        borderRadius={0.5}
        sx={{
          justifyContent: 'center',
        }}
      >
        <Button
          variant='contained'
          sx={{
            backgroundColor: 'text.primary',
            minWidth: 'fit-content',
            color: 'background.default',
            fontWeight: '700',
          }}
          onClick={() => window.open('https://github.com/levisantn/react_website', '_blank')}
        >
          Star me on GitHub
        </Button>
      </Grid2>
      <Grid2
        display='flex'
        size={'grow'}
        borderRadius={1}
        sx={{
          justifyContent: 'center',
        }}
      >
        <FeedbackForm />
      </Grid2>
    </Grid2>
  );
};

export default LeaveAFeedbackCard;
