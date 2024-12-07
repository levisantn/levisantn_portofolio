import { Stack, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';
import FooterMediaIconButton from './FooterMediaIconButton';

const FooterMediaStack = () => {
  const MAIL = import.meta.env.VITE_MAIL;
  return (
    <Stack direction='row' spacing='0.75rem' paddingBottom='0.25rem' sx={{ display: { xs: 'none', md: 'block' } }}>
      {/* -------------------- */}
      <FooterMediaIconButton
        href='https://github.com/levisantn'
        icon={<FontAwesomeIcon icon={faGithub} />}
        fontSize='2.75rem'
        paddingTop='0.8rem'
        paddingLeft='0.8rem'
      />
      {/* -------------------- */}

      <FooterMediaIconButton
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        icon={<SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />}
        fontSize='2.75rem'
      />
      {/* -------------------- */}

      <FooterMediaIconButton
        href='https://www.linkedin.com/in/levisantn/'
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
        fontSize='2.5rem'
        paddingTop='1rem'
      />
      {/* -------------------- */}
      <FooterMediaIconButton
        href='https://x.com/levisantn'
        icon={<FontAwesomeIcon icon={faXTwitter} />}
        fontSize='2.5rem'
      />
      {/* -------------------- */}
      <FooterMediaIconButton
        href='https://www.instagram.com/levis.antn/'
        icon={<FontAwesomeIcon icon={faInstagram} />}
        fontSize='2.75rem'
      />
      {/* -------------------- */}
      <FooterMediaIconButton href={`mailto:${MAIL}`} icon={<FontAwesomeIcon icon={faEnvelope} />} fontSize='2.5rem' />
      {/* -------------------- */}
      {/* <FooterMediaIconButton
        href='https://medium.com/@levisantn'
        icon={<FontAwesomeIcon icon={faMedium} />}
        fontSize='2.25rem'
      /> */}
      {/* -------------------- */}
      {/* <FooterMediaIconButton
        href='https://www.kaggle.com/zhurax'
        icon={<FontAwesomeIcon icon={faKaggle} />}
        fontSize='2.25rem'
      /> */}
      {/* -------------------- */}
      {/* <FooterMediaIconButton
        href='https://leetcode.com/u/levisantn/'
        icon={<SvgIcon component={leetCode} sx={{ fontSize: '1em' }} />}
        fontSize='2.25rem'
      /> */}
      {/* -------------------- */}
    </Stack>
  );
};

export default FooterMediaStack;
