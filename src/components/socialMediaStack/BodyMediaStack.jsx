import { Stack, IconButton, SvgIcon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';
import { useTheme } from '@emotion/react';

const BodyMediaStack = () => {
  const theme = useTheme();
  return (
    <Stack direction='row' paddingTop={4} spacing={2.5}>
      <IconButton
        href='https://github.com/levisantn'
        target='_blank'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
          '& .MuiTouchRipple-root': {
            color: 'primary.light',
          },
        }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>

      {/* <IconButton
        // disabled
        href='https://www.kaggle.com/zhurax'
        sx={{
          width: '60px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          paddingLeft: '7px',
          paddingRight: '3px',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faKaggle} />
      </IconButton> */}

      <IconButton
        // disabled
        href='https://public.tableau.com/app/profile/levisantn/vizzes'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
          '& .MuiTouchRipple-root': {
            color: 'primary.light',
          },
        }}
      >
        <SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.1em' }} />
      </IconButton>

      {/* <IconButton
        // disabled
        href='https://leetcode.com/u/levisantn/'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <SvgIcon component={leetCode} sx={{ fontSize: '1em' }} />
      </IconButton> */}

      <IconButton
        // disabled
        href='https://www.linkedin.com/in/levisantn/'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
          '& .MuiTouchRipple-root': {
            color: 'primary.light',
          },
        }}
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </IconButton>

      <IconButton
        // disabled
        href='https://x.com/levisantn'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
          '& .MuiTouchRipple-root': {
            color: 'primary.light',
          },
        }}
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </IconButton>

      <IconButton
        href='https://www.instagram.com/levis.antn/'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
          '& .MuiTouchRipple-root': {
            color: 'primary.light',
          },
        }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </IconButton>

      {/* <IconButton
        // disabled
        href='https://medium.com/@levisantn'
        sx={{
          width: '30px',
          height: '30px',
          fontSize: '3em',
          padding: '0.75em',
          borderRadius: 5,
          border: '0.2rem solid',
          borderColor: 'primary.main',
          color: 'text.primary',
          bgcolor: 'primary.hover1',
          transition: 'all 0.1s ease-in-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.main}`,
            bgcolor: 'primary.main',
            borderColor: 'primary.main',
            transition: 'all 0.1s ease-in-out',
          },
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
        }}
      >
        <FontAwesomeIcon icon={faMedium} />
      </IconButton> */}
    </Stack>
  );
};

export default BodyMediaStack;
