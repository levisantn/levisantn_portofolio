import { Grid2 } from '@mui/material';
import WriteMeAMail from '../components/card/contact_me/WriteMeAMailCard';
import FillTheFormCard from '../components/card/contact_me/FillTheFormCard';
import FindMeOnCard from '../components/card/contact_me/FindMeOnCard';
import FindMeAroundCard from '../components/card/contact_me/FindMeAroundCard';
import LeaveAFeedbackCard from '../components/card/contact_me/LeaveAFeedbackCard';

const Contactme = () => {
  return (
    <Grid2 container padding='1rem' spacing='1rem' paddingBottom='5rem' paddingTop='1.25rem'>
      <Grid2
        container
        spacing='1rem'
        size={5}
        borderRadius={1}
        sx={{
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
        size={7}
        borderRadius={1}
        sx={
          {
            // backgroundColor: 'background.paper',
          }
        }
      >
        <FindMeOnCard />
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
