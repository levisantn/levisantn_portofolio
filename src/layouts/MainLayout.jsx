// import * as React from 'react';
import { Container, Grid2 } from '@mui/material';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// import FooterEx from '../components/footer/FooterEx';

function MainLayout() {
  return (
    <Grid2 container spacing={0}>
      <Grid2 size={12}>
        <Header />
      </Grid2>
      <Container maxWidth='lg'>
        <Grid2 size={12}>
          <h1>Main content</h1>
          <p>
            In duis excepteur magna elit esse eiusmod qui. Irure proident consectetur culpa aliquip ea. Quis velit non
            cillum id non. Excepteur enim cupidatat proident cillum.
          </p>

          <h2>section 1</h2>
          <p>
            Pariatur pariatur incididunt duis do ullamco minim excepteur veniam culpa irure pariatur. Nostrud non ad ea
            ad adipisicing Lorem minim ea sit aliqua magna aliqua quis labore. Et aliqua sit labore minim ea nostrud
            irure mollit qui ipsum. Mollit eu consequat mollit ea excepteur elit eiusmod aliqua non dolor. Sint aute
            enim Lorem sunt cupidatat. Eiusmod qui Lorem elit irure officia sint.
          </p>

          <h2>section 2</h2>
          <p>
            Aliqua adipisicing do ea anim sit minim. Eu ut do ut officia ullamco irure laboris. Lorem nisi laborum sint
            minim ad ut esse qui aliqua Lorem aliquip proident ipsum velit.
          </p>

          <h2>section 3</h2>
          <p>
            Consequat qui aute enim elit ullamco. Irure exercitation eu ad cillum qui. Commodo sint incididunt veniam ut
            laborum magna minim esse culpa ea culpa aliqua. Sit enim commodo aliquip do nisi officia irure ad
            reprehenderit incididunt consectetur elit nostrud mollit. Aute sunt commodo non nisi aute in deserunt in
            anim.
          </p>

          <p>
            Ad deserunt velit eu magna nulla enim enim ut est Lorem minim. In ut occaecat nisi nisi sint non.
            Adipisicing magna est laboris duis aliquip aliqua qui id quis velit. Duis nostrud sunt ea mollit proident.
          </p>

          <h2>section 4</h2>
          <p>
            Do ea et nostrud quis aute tempor et et do. Consequat qui laboris voluptate consequat aute ad. Consequat
            fugiat laboris tempor esse aliqua voluptate ut enim consectetur non in. Laboris exercitation duis sunt
            pariatur reprehenderit aute ullamco proident esse do et.
          </p>

          <p>
            Pariatur sunt velit amet deserunt ullamco in mollit magna. Anim enim consectetur tempor id. Nisi ipsum qui
            et est ut eu. Mollit eiusmod mollit non consectetur. Dolor velit qui nulla tempor exercitation sit in mollit
            reprehenderit occaecat voluptate ullamco.
          </p>

          <h2>section 5</h2>
          <p>
            Voluptate ex ut qui laborum. Voluptate cupidatat labore elit minim officia anim consequat id magna. Irure
            amet do aute minim commodo amet nostrud incididunt ad. Sit ut duis velit anim. Elit aute minim irure
            adipisicing excepteur pariatur id reprehenderit nulla nostrud enim aliquip minim.
          </p>

          <p>
            Aliquip incididunt in voluptate ad ipsum anim. Anim culpa tempor eu aute in do. Exercitation deserunt do
            consequat enim cupidatat eu excepteur amet qui consectetur esse ex tempor. Velit veniam consequat nostrud
            voluptate voluptate. Laborum ipsum sit laborum sit mollit eu. Voluptate excepteur laboris laboris consequat
            labore. Eu ut esse non consequat esse sint duis officia ullamco.
          </p>
        </Grid2>
      </Container>
      <Grid2 size={12}>
        <Footer />
      </Grid2>
    </Grid2>
  );
}

export default MainLayout;
