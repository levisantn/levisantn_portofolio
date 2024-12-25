import { Typography, Stack } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const TimelineEducationCard = ({
  year = '',
  title,
  title2 = '',
  subtitle2 = '',
  subtitle,
  description,
  alignItems = 'flex-end',
}) => {
  const theme = useTheme();
  return (
    <TimelineItem>
      <TimelineSeparator>
        {year ? (
          <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
            {year}
          </Typography>
        ) : (
          <TimelineDot sx={{ backgroundColor: 'primary.light' }} />
        )}
        <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
      </TimelineSeparator>
      <TimelineContent>
        <Stack
          marginRight='2.5rem'
          marginBottom='2.5rem'
          padding='2rem'
          direction='column'
          spacing={'1rem'}
          borderRadius='1rem'
          sx={{
            backgroundColor: 'primary.hover2',
            alignItems: alignItems,
            transition: 'all 0.5s ease-out',
            '&:hover': {
              boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
              transform: 'scale(1.025)',
              transition: 'all 0.25s ease-out',
            },
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: '500' }}>
            {title}
          </Typography>
          <Typography variant='h5' sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}>
            {subtitle}
          </Typography>
          {title2 ? (
            <Typography variant='h4' sx={{ fontWeight: '500' }}>
              {title2}
            </Typography>
          ) : null}
          {subtitle2 ? (
            <Typography variant='h5' sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}>
              {subtitle2}
            </Typography>
          ) : null}
          <Typography variant='h6' sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}>
            {description}
          </Typography>
        </Stack>
      </TimelineContent>
    </TimelineItem>
  );
};

TimelineEducationCard.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title2: PropTypes.string,
  subtitle2: PropTypes.string,
  description: PropTypes.string.isRequired,
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end']),
};

export default TimelineEducationCard;
