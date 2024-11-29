import { useTheme } from '@emotion/react';
import { Card, CardActionArea, CardContent, CardMedia, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const ProjectCard = ({ img, title, description, link }) => {
  const theme = useTheme();
  return (
    <Card
      borderRadius={1}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'primary.hover2',
        transition: 'all 0.5s ease-out',
        '&:hover': {
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
          transform: 'scale(1.05)',
          transition: 'all 0.25s ease-out',
        },
        width: '400px', // Set the desired width
        height: '450px', // Set the desired height
      }}
    >
      <CardActionArea
        component={Link}
        href={link}
        target='_blank'
        sx={{
          '&:hover': {
            backgroundColor: 'transparent', // Remove default hover background
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
            maxHeight: '210px',
            minHeight: '210px',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div' sx={{ fontSize: '2rem' }}>
            {title}
          </Typography>
          <Typography variant='body1' sx={{ color: 'text.secondary', fontSize: '1.5rem' }}>
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
