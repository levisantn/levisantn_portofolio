import { Grid2, Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const SkillCard = ({ img, title }) => {
  const theme = useTheme();
  return (
    <Grid2
      container
      direction='column-reverse'
      borderRadius='1rem'
      width={{ xs: '15.3rem', md: '17.6rem', lg: '20rem' }}
      height={{ xs: '9.56rem', md: '11rem', lg: '12.5rem' }}
      sx={{
        backgroundColor: theme.palette.primary.hover2,
        transition: 'all 0.5s ease-out',
        '&:hover': {
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
          transform: 'scale(1.025)',
          transition: 'all 0.25s ease-out',
        },
      }}
    >
      <Grid2 container width='100%' height='25%' paddingRight='0.75rem' paddingBottom='0.5rem' alignItems='flex-end'>
        <Typography
          variant='subHeaderSectionMono'
          sx={{
            width: '100%',
            textAlign: 'right',
            color: theme.palette.text.secondary,
            fontSize: { xs: '0.96rem', md: '1.1rem', xl: '1.25rem' },
          }}
        >
          {title}
        </Typography>
      </Grid2>
      <Grid2 container justifyContent='center'>
        <Box
          component='img'
          alt='svgPython'
          src={img}
          width={{ xs: '5.73rem', md: '6.62rem', xl: '7.5rem' }}
          height='auto'
        />
      </Grid2>
    </Grid2>
  );
};

SkillCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SkillCard;
