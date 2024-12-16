import { Grid2 } from '@mui/material';
import WriteMeAMail from '../components/card/contact_me/WriteMeAMailCard';
import FillTheFormCard from '../components/card/contact_me/FillTheFormCard';
import FindMeOnCard from '../components/card/contact_me/FindMeOnCard';
import FindMeAroundCard from '../components/card/contact_me/FindMeAroundCard';
import LeaveAFeedbackCard from '../components/card/contact_me/LeaveAFeedbackCard';

const Contactme = () => {
  return (
    <Grid2 container padding='1.25rem' spacing='1.25rem'>
      <Grid2 container height='100%' size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
        <FindMeAroundCard />

        <WriteMeAMail />
      </Grid2>

      <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 6 }}>
        <FindMeOnCard />
      </Grid2>

      <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: 7, xl: 7 }} textAlign='center'>
        <FillTheFormCard />
      </Grid2>

      <Grid2
        container
        size={{ xs: 12, sm: 12, md: 12, lg: 5, xl: 5 }}
        sx={{
          textAlign: 'center',
        }}
      >
        <LeaveAFeedbackCard />
      </Grid2>
    </Grid2>
  );
};

export default Contactme;
