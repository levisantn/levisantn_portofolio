import { Box, Stack, Typography } from '@mui/material';
import RowStackContact from './RowStackContact';

const FindMeOnCard = () => {
  return (
    <Box sx={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
      <Stack
        direction='column'
        spacing={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h2' sx={{ fontWeight: 'regular' }}>
          FIND ME ON
        </Typography>

        <Typography variant='subtitle1' sx={{ '& span:first-of-type': { color: 'primary.main' } }}>
          Feel free to <span>connect</span> with me
        </Typography>

        <RowStackContact />
      </Stack>
    </Box>
  );
};

export default FindMeOnCard;
