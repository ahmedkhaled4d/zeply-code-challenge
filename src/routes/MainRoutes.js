import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const IndexExplorer = Loadable(lazy(() => import('pages/explore')));
const AddressPage = Loadable(lazy(() => import('pages/search/Address')));
const TransactionExplorer = Loadable(lazy(() => import('pages/search/Transaction')));

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
      element: <IndexExplorer />
    },

    {
      path: 'explorer',
      element: <IndexExplorer />
    },
    {
      path: 'address/:id',
      element: <AddressPage />
    },
    {
      path: 'tnx/:hash',
      element: <TransactionExplorer />
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
