import { Grid2 } from '@mui/material';
import FindMeOnCard from '../components/card/FindMeOnCard';
import ContactForm from '../components/forms/ContactForm';
import FindMeAroundCard from '../components/card/FindMeAroundCard';
import WriteMeAMail from '../components/card/WriteMeAMailCard';

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
        size={8}
        padding={0.5}
        borderRadius={1}
        sx={{
          backgroundColor: 'background.paper',
          textAlign: 'center',
        }}
      >
        <ContactForm />
      </Grid2>

      <Grid2 size='grow' padding={1} borderRadius={1} sx={{ textAlign: 'center', backgroundColor: 'background.paper' }}>
        leave a feedback
      </Grid2>
    </Grid2>
  );
};

export default Contactme;
