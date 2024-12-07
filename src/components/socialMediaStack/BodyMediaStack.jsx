import { Stack, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';
import BodyMediaIconButton from './BodyMediaIconButton';

const BodyMediaStack = () => {
  return (
    <Stack
      direction='row'
      paddingTop={{ xs: '1.98rem', sm: '2.43rem', md: '2.87rem', lg: '3.31rem', xl: '3.75rem' }}
      spacing={{ xs: '1.98rem', sm: '2.43rem', md: '2.87rem', lg: '3.31rem', xl: '3.75rem' }}
    >
      {/* -------------------- */}
      <BodyMediaIconButton href='https://github.com/levisantn' icon={<FontAwesomeIcon icon={faGithub} />} />
      {/* -------------------- */}
      <BodyMediaIconButton
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        icon={<SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />}
      />
      {/* -------------------- */}
      <BodyMediaIconButton
        href='https://www.linkedin.com/in/levisantn/'
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
      />
      {/* -------------------- */}
      <BodyMediaIconButton href='https://x.com/levisantn' icon={<FontAwesomeIcon icon={faXTwitter} />} />
      {/* -------------------- */}
      <BodyMediaIconButton href='https://www.instagram.com/levis.antn/' icon={<FontAwesomeIcon icon={faInstagram} />} />
    </Stack>
  );
};

export default BodyMediaStack;
