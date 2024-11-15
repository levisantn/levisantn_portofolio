import { Grid2, Stack, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import imgPortofolio from '../../../assets/imgs/front_img_portofolio.png';

const MyProjectsCard = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='3.75rem'
        paddingBottom='2.5rem'
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
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
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
              My Projects
            </Typography>
            <Typography
              variant='h5'
              sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
            >
              Here are a few project I&apos;ve <span>worked</span> on.
            </Typography>
          </Stack>
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
        container
        paddingTop='2.5rem'
        paddingBottom='2.5rem'
        size={12}
        sx={{
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          container
          size={'grow'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          spacing='2.5rem'
          borderRadius={1}
          sx={
            {
              // backgroundColor: 'background.paper',
            }
          }
        >
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgPortofolio}
              link='https://github.com/levisantn/react_website'
              title='Portofolio website with React + MUI'
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '
              }
            />
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgPortofolio}
              link='https://github.com/levisantn/react_website'
              title='Portofolio website with React + MUI'
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '
              }
            />
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgPortofolio}
              link='https://github.com/levisantn/react_website'
              title='Portofolio website with React + MUI'
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '
              }
            />
          </Grid2>
        </Grid2>

        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default MyProjectsCard;
