import { Typography, Stack, useMediaQuery } from '@mui/material';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
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
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <TimelineItem>
      <TimelineSeparator>
        {year ? (
          <Typography
            variant='headerSectionMono'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
            sx={{ color: theme.palette.primary.light }}
          >
            {year}
          </Typography>
        ) : (
          <Typography
            variant='headerSectionMono'
            fontSize={{ xs: '2rem', sm: '2.46rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
            sx={{ color: theme.palette.primary.light }}
          >
            &nbsp;・&nbsp;
          </Typography>
        )}
        <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
      </TimelineSeparator>
      <TimelineContent>
        <Stack
          margin={{ xs: '0.75rem', sm: '1rem', md: '1.25rem', lg: '1.5rem', xl: '1.75rem' }}
          padding={{ xs: '1.25rem', sm: '2.5rem', md: '2.5rem', lg: '3.75rem', xl: '3.75rem' }}
          borderRadius='1rem'
          sx={{
            backgroundColor: 'primary.hover2',
            alignItems: isMdUp ? alignItems : 'flex-end',
            transition: 'all 0.5s ease-out',
            '&:hover': {
              boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
              transform: 'scale(1.025)',
              transition: 'all 0.25s ease-out',
            },
          }}
        >
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.59rem', sm: '1.94rem', md: '2.29rem', lg: '2.65rem', xl: '3rem' }}
            color={theme.palette.text.primary}
          >
            {title}
          </Typography>
          <Typography
            variant='headerSectionMono'
            fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
            color={theme.palette.primary.light}
          >
            {subtitle}
          </Typography>
          {title2 ? (
            <Typography
              variant='headerSection'
              fontSize={{ xs: '1.59rem', sm: '1.94rem', md: '2.29rem', lg: '2.65rem', xl: '3rem' }}
              color={theme.palette.text.primary}
            >
              {title2}
            </Typography>
          ) : null}
          {subtitle2 ? (
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
              color={theme.palette.primary.light}
            >
              {subtitle2}
            </Typography>
          ) : null}
          <Typography
            variant='subHeaderSectionMono'
            fontSize={{ xs: '0.85rem', sm: '1.03rem', md: '1.22rem', lg: '1.41rem', xl: '1.6rem' }}
            color={theme.palette.text.secondary}
          >
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
