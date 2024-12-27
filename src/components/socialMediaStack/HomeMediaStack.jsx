import { Stack } from '@mui/material';
// import { SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';
import HomeMediaIconButton from './HomeMediaIconButton';

const HomeMediaStack = () => {
  return (
    <Stack
      direction='row'
      paddingTop={{ xs: '1.98rem', sm: '2.43rem', md: '2.87rem', lg: '3.31rem', xl: '3.75rem' }}
      spacing={{ xs: '1.98rem', sm: '2.43rem', md: '2.87rem', lg: '3.31rem', xl: '3.75rem' }}
    >
      {/* -------------------- */}
      <HomeMediaIconButton href='https://github.com/levisantn' icon={<FontAwesomeIcon icon={faGithub} />} />
      {/* -------------------- */}
      {/* <HomeMediaIconButton
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        icon={<SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />}
      /> */}
      {/* -------------------- */}
      <HomeMediaIconButton
        href='https://www.linkedin.com/in/levisantn/'
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
      />
      {/* -------------------- */}
      <HomeMediaIconButton href='https://x.com/levisantn' icon={<FontAwesomeIcon icon={faXTwitter} />} />
      {/* -------------------- */}
      <HomeMediaIconButton href='https://www.instagram.com/levis.antn/' icon={<FontAwesomeIcon icon={faInstagram} />} />
    </Stack>
  );
};

export default HomeMediaStack;
