import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

const ProjectCard = ({ img, title, description, link }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.hover2,
        transition: 'all 0.5s ease-out',
        width: { xs: '315px', md: '366px', lg: '425px' },
        height: { xs: '400px', md: '445px', lg: '515px' },
        '&:hover': {
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
          transform: 'scale(1.05)',
          transition: 'all 0.25s ease-out',
        },
        '& .MuiTouchRipple-root': {
          color: theme.palette.primary.light,
        },
      }}
    >
      <CardActionArea
        component={Link}
        href={link}
        target='_blank'
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          '& .MuiCardActionArea-focusHighlight': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <CardMedia
          component='img'
          image={img}
          alt={title}
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: { xs: '191px', md: '221px', lg: '250px' },
            minHeight: { xs: '191px', md: '221px', lg: '250px' },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            component='div'
            variant='headerProjectCard'
            fontSize={{ xs: '1.4rem', md: '1.7rem', lg: '2rem' }}
          >
            {title}
          </Typography>
          <Typography
            variant='bodyProjectCard'
            sx={{ color: theme.palette.text.secondary }}
            fontSize={{ xs: '1.1rem', md: '1.35rem', lg: '1.6rem' }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
