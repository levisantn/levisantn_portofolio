import { Container, Grid2, SvgIcon, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faGithub, faInstagram, faXTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { leetCode, TableauSoftwareRounded } from '../../assets/imgs/icons/CustomMuiSvgIcons';

const Footer = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 display='flex' justifyContent='left' size='grow'>
          <Typography variant='code'>Copyright&copy; 2024 levisantn</Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='center'>
          <Typography variant='code' fontWeight={500}>
            designed with <FavoriteIcon sx={{ color: 'primary.main', verticalAlign: 'bottom', fontSize: '22px' }} /> by
            Levis Antonetti
          </Typography>
        </Grid2>
        <Grid2 display='flex' justifyContent='right' size='grow' flexDirection='row'>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <FontAwesomeIcon icon={faGithub} size='lg' />
            <FontAwesomeIcon icon={faKaggle} size='lg' />
            <SvgIcon component={TableauSoftwareRounded} sx={{ fontSize: '1.5em' }} />
            <SvgIcon component={leetCode} sx={{ fontSize: '1.25em' }} />
            <FontAwesomeIcon icon={faMedium} size='lg' />
            <FontAwesomeIcon icon={faXTwitter} size='lg' />
            <FontAwesomeIcon icon={faInstagram} size='lg' />
            <FontAwesomeIcon icon={faEnvelope} size='lg' />
          </div>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Footer;
