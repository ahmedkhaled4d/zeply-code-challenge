import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardExplorer = Loadable(lazy(() => import('pages/explore')));

// render - pages
const DocumentationsPage = Loadable(lazy(() => import('pages/pages/Documentations')));
const DeveloperPage = Loadable(lazy(() => import('pages/pages/Developer')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardExplorer />
    },

    {
      path: 'explorer',
      element: <DashboardExplorer />
    },
    {
      path: 'docs',
      element: <DocumentationsPage />
    },
    {
      path: 'developer',
      element: <DeveloperPage />
    }
  ]
};

export default MainRoutes;
