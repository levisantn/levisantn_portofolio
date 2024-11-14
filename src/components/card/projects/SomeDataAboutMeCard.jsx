import { Divider, Grid2, Stack, Typography } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';
import { useTheme } from '@emotion/react';
import { Tooltip as MuiTooltip } from '@mui/material';

const SomeDataAboutMeCard = () => {
  const theme = useTheme();
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear && monthOfDay > currentMonth - shownMonths && monthOfDay <= currentMonth
      );
    });
  };
  const explicitTheme = {
    light: ['#eaecee10', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#17202a10', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
  };
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='5rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: '600',
              fontSize: '3.5rem',
              wordSpacing: '-0.5rem',
              fontFamily: 'var(--mono-font)',
              color: 'primary.light',
            }}
          >
            Some Data About Me
          </Typography>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        paddingTop='5rem'
        paddingBottom='2.5rem'
        container
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2 display='flex' size={1} borderRadius={1} sx={{ backgroundColor: 'background.paper' }}></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack
            direction='column'
            spacing='2.5rem'
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h4'
              sx={{
                paddingLeft: '5rem',
                paddingBottom: '1.25rem',
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              My <span>Github</span> activity
            </Typography>
            <GitHubCalendar
              username='levisantn'
              transformData={selectLastHalfYear}
              labels={{
                totalCount: '{{count}} contributions',
              }}
              theme={explicitTheme}
              renderBlock={(block, activity) => (
                <MuiTooltip title={`${activity.count} activities on ${activity.date}`}>{block}</MuiTooltip>
              )}
              renderColorLegend={(block, level) => <MuiTooltip title={`Level: ${level}`}>{block}</MuiTooltip>}
              weekStart={1}
              blockSize={14}
              fontSize={16}
            />
          </Stack>
        </Grid2>
        {/* -------------------------------- */}
        <Divider
          sx={{
            borderRadius: 1,
            marginTop: '2rem',
            border: `0.25rem solid ${theme.palette.primary.hover1}`,
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.hover1}`,
          }}
        />
        {/* -------------------------------- */}
        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack
            direction='column'
            spacing='2.5rem'
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h4'
              sx={{
                paddingLeft: '5rem',
                paddingBottom: '1.25rem',
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              My <span>Leetcode</span> activity
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 display='flex' size={1} borderRadius={1} sx={{ backgroundColor: 'background.paper' }}></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SomeDataAboutMeCard;
