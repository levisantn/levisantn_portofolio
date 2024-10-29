import { Button, Grid2, Stack, Typography } from '@mui/material';
import FeedbackForm from '../forms/FeedbackForm';

const LeaveAFeedbackCard = () => {
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
          backgroundColor: 'background.default',
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
          backgroundColor: 'background.default',
          justifyContent: 'center',
        }}
      >
        <FeedbackForm />
      </Grid2>
    </Grid2>
  );
};

export default LeaveAFeedbackCard;
