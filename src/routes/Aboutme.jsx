import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Divider, Grid2, Stack, Typography } from '@mui/material';
const Aboutme = () => {
  return (
    <>
      <Grid2
        container
        padding={2}
        spacing={1}
        sx={{
          backgroundColor: 'background.default',
          flexDirection: 'column',
        }}
      >
        <Grid2
          container
          spacing={0.5}
          padding={0.5}
          size={12}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.paper',
            height: '40rem',
          }}
        >
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
          <Grid2
            display='flex'
            size={3}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              alt='drinking soda bitmoji '
              src='/src/assets/imgs/bitmoji/take_coffee.png'
              sx={{
                width: '380px',
                height: '380px',
                transform: 'scaleX(-1)',
              }}
            />
          </Grid2>

          <Grid2
            display='flex'
            size={'grow'}
            spacing={0.5}
            padding={0.5}
            direction='column'
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Stack
              direction='column'
              spacing={'5rem'}
              sx={{
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '400',
                  '& span:first-of-type': { color: 'primary.main' },
                  paddingLeft: '5rem',
                }}
              >
                What I Do?<span style={{ fontWeight: '500' }}></span>
              </Typography>

              <Typography
                variant='h5'
                sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
              >
                My passion for computer science ignited in high School. I find joy in understanding the mechanisms of
                new technologies and am driven by the satisfaction of solving problems.
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
        </Grid2>
        {/* -------------------------------- */}
        <Divider
          sx={{
            borderColor: 'background.paper',
            borderWidth: 2,
            borderRadius: 1,
            // margin: '1rem',
          }}
        />
        {/* -------------------------------- */}
        <Grid2
          container
          spacing={0.5}
          padding={0.5}
          size={12}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.paper',
            height: '40rem',
          }}
        >
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>

          <Grid2
            display='flex'
            size={'grow'}
            spacing={0.5}
            padding={0.5}
            direction='column'
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Stack
              direction='column'
              spacing={'5rem'}
              sx={{
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '400',
                  '& span:first-of-type': { color: 'primary.main' },
                  paddingRight: '5rem',
                }}
              >
                What Drives Me?
              </Typography>

              <Typography
                variant='h5'
                sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
              >
                My passion for computer science ignited in high School. I find joy in understanding the mechanisms of
                new technologies and am driven by the satisfaction of solving problems.
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            display='flex'
            size={3}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              alt='drinking soda bitmoji '
              src='/src/assets/imgs/bitmoji/working_bubble.png'
              sx={{
                width: '300px',
                height: '300px',
              }}
            />
          </Grid2>
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
        </Grid2>
        {/* -------------------------------- */}
        <Divider
          sx={{
            borderColor: 'background.paper',
            borderWidth: 2,
            borderRadius: 1,
            // margin: '1rem',
          }}
        />
        {/* -------------------------------- */}
        <Grid2
          container
          spacing={0.5}
          padding={0.5}
          size={12}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.paper',
            height: '40rem',
          }}
        >
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>

          <Grid2
            display='flex'
            size={'grow'}
            spacing={0.5}
            padding={0.5}
            direction='column'
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Timeline position='alternate'>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Repeat</TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid2>
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Aboutme;
