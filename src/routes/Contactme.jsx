import { Grid2 } from '@mui/material';
import FindMeOnCardContact from '../components/card/FindMeOnCardContact';
import FindMeAroundCard from '../components/card/FindMeAroundCard';
import WriteMeAMail from '../components/card/WriteMeAMailCard';
import FillTheFormCard from '../components/card/FillTheFormCard';
import LeaveAFeedbackCard from '../components/card/LeaveAFeedbackCard';

const Contactme = () => {
  return (
    <Grid2 container padding={1} spacing={1}>
      <Grid2
        container
        spacing={1}
        size={'grow'}
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.paper',
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
        size={'auto'}
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.paper',
          textAlign: 'flex-end',
        }}
      >
        <FindMeOnCardContact />
      </Grid2>

      <Grid2
        container
        size={7}
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <FillTheFormCard />
      </Grid2>

      <Grid2
        container
        size={'grow'}
        borderRadius={1}
        sx={{
          // backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <LeaveAFeedbackCard />
      </Grid2>
    </Grid2>
  );
};

export default Contactme;
