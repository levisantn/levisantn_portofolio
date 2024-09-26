import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './routes/Home';
import Aboutme from './routes/Aboutme';
import Playground from './routes/Playground';
import Projects from './routes/Projects';
import Cheatsheets from './routes/Cheatsheets';
import References from './routes/References';
import Contactme from './routes/Contactme';

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
        path: '/playground',
        Component: Playground,
      },
      {
        path: '/projects',
        Component: Projects,
      },
      {
        path: '/cheatsheets',
        Component: Cheatsheets,
      },
      {
        path: '/references',
        Component: References,
      },
      {
        path: '/contact_me',
        Component: Contactme,
      },
    ],
  },
]);

export default myRouter;
