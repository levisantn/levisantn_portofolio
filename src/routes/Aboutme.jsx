import { Grid2 } from '@mui/material';
import WhatIDoCard from '../components/card/about_me/WhatIDoCard';
import WhatDrivesMeCard from '../components/card/about_me/WhatDrivesMeCard';
import TimelineCard from '../components/card/about_me/TimelineCard';
// import { useTheme } from '@emotion/react';
import SeeMyResume from '../components/card/about_me/SeeMyResumeCard';
import SkillsetCard from '../components/card/about_me/SkillsetCard';
const Aboutme = () => {
  // const theme = useTheme();
  return (
    <Grid2 container direction='column'>
      {/* -------------------------------- */}
      <WhatIDoCard />
      {/* <Divider
        sx={{
          borderRadius: 1,
          marginLeft: { xs: '31.8rem', sm: '38.8rem', md: '45.9rem', lg: '52.9rem', xl: '60rem' },
          marginRight: { xs: '31.8rem', sm: '38.8rem', md: '45.9rem', lg: '52.9rem', xl: '60rem' },
          marginTop: '2rem',
          border: `0.25rem solid ${theme.palette.primary.hover1}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.hover1}`,
        }}
      /> */}
      {/* -------------------------------- */}
      <WhatDrivesMeCard />
      {/* <Divider
        sx={{
          borderRadius: 1,
          marginLeft: '60rem',
          marginRight: '60rem',
          border: `0.25rem solid ${theme.palette.primary.hover1}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.hover1}`,
        }}
      /> */}
      {/* -------------------------------- */}
      <SkillsetCard />
      {/* <Divider
        sx={{
          borderRadius: 1,
          marginLeft: '60rem',
          marginRight: '60rem',
          marginTop: '2rem',
          border: `0.25rem solid ${theme.palette.primary.hover1}`,
          boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.hover1}`,
        }}
      /> */}
      {/* -------------------------------- */}
      <TimelineCard />
      {/* -------------------------------- */}
      <SeeMyResume />
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default Aboutme;
