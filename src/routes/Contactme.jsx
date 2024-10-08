import { Grid2 } from '@mui/material';
import FindMeOnCard from '../components/card/FindMeOnCard';
import FindMeAroundCard from '../components/card/FindMeAroundCard';
import WriteMeAMail from '../components/card/WriteMeAMailCard';
import FillTheFormCard from '../components/card/FillTheFormCard';
import LeaveAFeedbackCard from '../components/card/LeaveAFeedbackCard';

const Contactme = () => {
  return (
    <Grid2 container padding={2} spacing={1}>
      <Grid2
        container
        spacing={0.5}
        padding={0.5}
        size={'grow'}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          flexDirection: 'column',
        }}
      >
        <Grid2 size={'grow'}>
          <FindMeAroundCard />
        </Grid2>

        <Grid2 size={'grow'}>
          <WriteMeAMail />
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={0.5}
        size={'auto'}
        padding={0.5}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <Grid2>
          <FindMeOnCard />
        </Grid2>
      </Grid2>

      <Grid2
        container
        spacing={0.5}
        size={7}
        padding={0.5}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <FillTheFormCard />
      </Grid2>

      <Grid2
        container
        spacing={0.5}
        size={'grow'}
        padding={0.5}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <LeaveAFeedbackCard />
      </Grid2>
    </Grid2>
  );
};

export default Contactme;
