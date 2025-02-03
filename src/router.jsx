import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Aboutme from './routes/Aboutme';
import CV from './routes/CV';
import Projects from './routes/Projects';
import Contactme from './routes/Contactme';
import Error404 from './routes/Error404';

const myRouter = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        element: <Navigate to='/home' replace />,
      },
      {
        path: '/home',
        Component: Home,
      },
      {
        path: '/about_me',
        Component: Aboutme,
      },
      {
        path: '/projects',
        Component: Projects,
      },
      {
        path: '/cv',
        Component: CV,
      },
      {
        path: '/contact_me',
        Component: Contactme,
      },
      {
        path: '*',
        Component: Error404,
      },
    ],
  },
]);

export default myRouter;
