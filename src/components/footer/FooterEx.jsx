// src/componetns/Footer.tsx
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid2 } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.paper,
  }),
}));

const FooterEx = () => {
  return (
    <Container maxWidth={false} sx={{ padding: 2 }}>
      <Grid2 container spacing={2}>
        <Grid2 display='flex' justifyContent='left' size='grow'>
          <Item>Copyright&copy; 2024 levisantn</Item>
        </Grid2>
        <Grid2 display='flex' justifyContent='center'>
          <Item>designed with ♥️ by Levis Antonetti</Item>
        </Grid2>
        <Grid2 display='flex' justifyContent='right' size='grow'>
          <Item>{`<github> <tableau> <kaggle> <insta> <leetcode>`}</Item>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default FooterEx;
