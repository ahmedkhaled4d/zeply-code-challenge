import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';

const Error = Loadable(lazy(() => import('pages/status/Index')));

// ==============================|| AUTH ROUTING ||============================== //

const ErrorRoutes = {
  path: '*',
  element: <Error />
};

export default ErrorRoutes;
