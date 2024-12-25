import { Grid2 } from '@mui/material';
import WhatIDoCard from '../components/card/about_me/WhatIDoCard';
import WhatDrivesMeCard from '../components/card/about_me/WhatDrivesMeCard';
import TimelineCard from '../components/card/about_me/TimelineCard';
// import { useTheme } from '@emotion/react';
import SeeMyResume from '../components/card/about_me/SeeMyResumeCard';
import SkillsetCard from '../components/card/about_me/SkillsetCard';
const Aboutme = () => {
  return (
    <Grid2 container direction='column'>
      {/* -------------------------------- */}
      <WhatIDoCard />

      {/* -------------------------------- */}
      <WhatDrivesMeCard />
      {/* -------------------------------- */}
      <SkillsetCard />
      {/* -------------------------------- */}
      <TimelineCard />
      {/* -------------------------------- */}
      <SeeMyResume />
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default Aboutme;
