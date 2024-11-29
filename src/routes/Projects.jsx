import { Grid2 } from '@mui/material';
// import SomeDataAboutMeCard from '../components/card/projects/SomeDataAboutMeCard';
import MyProjectsCard from '../components/card/projects/MyProjectsCard';

const Projects = () => {
  return (
    <Grid2
      container
      sx={{
        flexDirection: 'column',
        paddingBottom: '2.5rem',
      }}
    >
      <MyProjectsCard />
      {/* -------------------------------- */}
      {/* <SomeDataAboutMeCard /> */}
    </Grid2>
  );
};

export default Projects;
