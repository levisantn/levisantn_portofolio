import { Grid2, Alert } from '@mui/material';
import HiThereCard from '../components/card/home/HiThereCard';
import FindMeOnCard from '../components/card/home/FindMeOnCard';
import IntroduceMyselfCard from '../components/card/home/IntroduceMyselfCard';
import 'animate.css';
import { useState } from 'react';

const Home = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };
  return (
    <Grid2
      container
      sx={{
        flexDirection: 'column',
      }}
    >
      {showAlert && (
        <Alert severity='warning' onClose={handleClose} sx={{ margin: '1rem' }}>
          <strong>Under Development 🚧</strong>
          <br />
          This website isn&apos;t optimized for mobile display. I&apos;m working on it.
        </Alert>
      )}

      {/* -------------------------------- */}
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
