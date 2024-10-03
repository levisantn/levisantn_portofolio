import { Stack, IconButton, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faGithub, faInstagram, faXTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { leetCode, TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';

const RowStackFooter = () => {
  return (
    <Stack direction='row' spacing={1}>
      <IconButton
        href='https://github.com/levisantn'
        target='_blank'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>

      <IconButton
        disabled
        href='https://www.kaggle.com/zhurax'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.25em',
          padding: '5px',
          borderRadius: 5,
          paddingLeft: '7px',
          paddingRight: '3px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faKaggle} />
      </IconButton>

      <IconButton
        disabled
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />
      </IconButton>

      <IconButton
        disabled
        href='https://leetcode.com/u/levisantn/'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <SvgIcon component={leetCode} sx={{ fontSize: '1em' }} />
      </IconButton>

      <IconButton
        href='https://www.instagram.com/levis.antn/'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </IconButton>

      <IconButton
        disabled
        href='https://x.com/levisantn'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </IconButton>

      <IconButton
        disabled
        href='https://medium.com/@levisantn'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faMedium} />
      </IconButton>

      <IconButton
        href='mailto:antonetti.levis@gmail.com'
        color='text.primary'
        sx={{
          color: 'text.primary',
          width: '30px',
          height: '30px',
          fontSize: '1.5em',
          padding: '5px',
          '&:hover': {
            bgcolor: 'primary.hover1',
            borderRadius: 5,
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </IconButton>
    </Stack>
  );
};

export default RowStackFooter;
