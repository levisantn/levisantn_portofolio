import { Grid2 } from '@mui/material';
import WhatIDoCard from '../components/card/about_me/WhatIDoCard';
import WhatDrivesMeCard from '../components/card/about_me/WhatDrivesMeCard';
import TimelineCard from '../components/card/about_me/TimelineCard';
// import { useTheme } from '@emotion/react';
import SeeMyCV from '../components/card/about_me/SeeMyCVCard';
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
      <SeeMyCV />
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default Aboutme;
