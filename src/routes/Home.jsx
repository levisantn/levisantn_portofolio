import { Grid2 } from '@mui/material';
import HiThereCard from '../components/card/home/HiThereCard';
import FindMeOnCard from '../components/card/home/FindMeOnCard';
import IntroduceMyselfCard from '../components/card/home/IntroduceMyselfCard';
import 'animate.css';

const Home = () => {
  return (
    <Grid2
      container
      sx={{
        flexDirection: 'column',
      }}
    >
      <HiThereCard />
      {/* -------------------------------- */}

      <IntroduceMyselfCard />
      {/* -------------------------------- */}

      <FindMeOnCard />
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default Home;
