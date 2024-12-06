import { Stack, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';
import FooterIconButton from './FooterIconButton';

const FooterMediaStack = () => {
  return (
    <Stack direction='row' spacing={1} marginBottom={'0.25rem'} sx={{ display: { xs: 'none', md: 'block' } }}>
      {/* -------------------- */}
      <FooterIconButton
        href='https://github.com/levisantn'
        icon={<FontAwesomeIcon icon={faGithub} />}
        fontSize='2.5rem'
        padding='1.55rem'
      />
      {/* -------------------- */}
      {/* <FooterIconButton
        href='https://www.kaggle.com/zhurax'
        icon={<FontAwesomeIcon icon={faKaggle} />}
        fontSize='2.25rem'
        padding='1.55rem'
      /> */}
      {/* -------------------- */}
      <FooterIconButton
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        icon={<SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />}
        fontSize='2.5rem'
        padding='1.55rem'
      />
      {/* -------------------- */}
      {/* <FooterIconButton
        href='https://leetcode.com/u/levisantn/'
        icon={<SvgIcon component={leetCode} sx={{ fontSize: '1em' }} />}
        fontSize='2.25rem'
        padding='1.55rem'
      /> */}
      {/* -------------------- */}
      <FooterIconButton
        href='https://www.linkedin.com/in/levisantn/'
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
        fontSize='2.25rem'
        padding='1.55rem'
      />
      {/* -------------------- */}
      <FooterIconButton
        href='https://x.com/levisantn'
        icon={<FontAwesomeIcon icon={faXTwitter} />}
        fontSize='2.25rem'
        padding='1.55rem'
      />
      {/* -------------------- */}
      <FooterIconButton
        href='https://www.instagram.com/levis.antn/'
        icon={<FontAwesomeIcon icon={faInstagram} />}
        fontSize='2.5rem'
        padding='1.55rem'
      />
      {/* -------------------- */}
      {/* <FooterIconButton
        href='https://medium.com/@levisantn'
        icon={<FontAwesomeIcon icon={faMedium} />}
        fontSize='2.25rem'
        padding='1.55rem'
      /> */}
      {/* -------------------- */}
      <FooterIconButton
        href='mailto:antonetti.levis@gmail.com'
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        fontSize='2.25rem'
        padding='1.55rem'
      />
    </Stack>
  );
};

export default FooterMediaStack;
