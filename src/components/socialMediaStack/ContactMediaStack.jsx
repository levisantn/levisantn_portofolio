import { Stack, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';
import ContactMediaIconButton from './ContactMediaIconButton';

const ContactMediaStack = () => {
  return (
    <Stack
      direction='row'
      paddingTop={{ xs: '1.98rem', sm: '2.43rem', md: '2.87rem', lg: '3.31rem', xl: '3.75rem' }}
      spacing={{ xs: '0.9rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem', xl: '1.7rem' }}
    >
      {/* -------------------- */}
      <ContactMediaIconButton href='https://github.com/levisantn' icon={<FontAwesomeIcon icon={faGithub} />} />
      {/* -------------------- */}
      <ContactMediaIconButton
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        icon={<SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />}
      />
      {/* -------------------- */}
      <ContactMediaIconButton
        href='https://www.linkedin.com/in/levisantn/'
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
      />
      {/* -------------------- */}
      <ContactMediaIconButton href='https://x.com/levisantn' icon={<FontAwesomeIcon icon={faXTwitter} />} />
      {/* -------------------- */}
      <ContactMediaIconButton
        href='https://www.instagram.com/levis.antn/'
        icon={<FontAwesomeIcon icon={faInstagram} />}
      />
    </Stack>
  );
};

export default ContactMediaStack;
