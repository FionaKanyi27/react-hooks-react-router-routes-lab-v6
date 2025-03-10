import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movies from './pages/Movies';
import ErrorPage from './pages/ErrorPage';

const routes = createBrowserRouter([
   {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
   },
   {
    path: '/directors',
    element: <Directors />,
   },
   {
    path: '/actors',
    element: <Actors />,
   },
   {
    path: '/movies/:id',
    element: <Movies />,
   },

  ]);

export default routes;