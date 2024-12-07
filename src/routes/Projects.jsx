import { Grid2 } from '@mui/material';
// import SomeDataAboutMeCard from '../components/card/projects/SomeDataAboutMeCard';
import MyProjectsCard from '../components/card/projects/MyProjectsCard';
import ProjectsCard from '../components/card/projects/ProjectsCard';

const Projects = () => {
  return (
    <Grid2 container flexDirection='column'>
      <MyProjectsCard />
      {/* -------------------------------- */}
      <ProjectsCard />
      {/* -------------------------------- */}
      {/* <SomeDataAboutMeCard /> */}
    </Grid2>
  );
};

export default Projects;
