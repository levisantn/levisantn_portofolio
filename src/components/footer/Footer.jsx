import { Container, Grid2, IconButton, SvgIcon, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faGithub, faInstagram, faXTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { leetCode, TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';

const Footer = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 display='flex' justifyContent='left' alignItems='center' size='grow'>
          <Typography variant='code' fontWeight={500} fontSize={11}>
            Copyright&copy; 2024 levisantn
          </Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='center' alignItems='center'>
          <Typography variant='code' fontWeight={500}>
            designed with <FavoriteIcon sx={{ color: 'primary.main', verticalAlign: 'bottom', fontSize: '22px' }} /> by
            Levis Antonetti
          </Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='right' size='grow' flexDirection='row'>
          <div style={{ display: 'flex', gap: '10px' }}>
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
                paddingLeft: '6px',
                paddingRight: '4px',
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
          </div>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;
