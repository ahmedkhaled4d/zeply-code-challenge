// assets
import { LoginOutlined, ProfileOutlined, DashboardOutlined, BarChartOutlined } from '@ant-design/icons';
// assets

// icons
const icons = {
  DashboardOutlined,
  BarChartOutlined,
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/explorer',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings'
    },
    {
      id: 'documentations',
      title: 'Documentations',
      type: 'item',
      url: '/docs'
    }
  ]
};

export default pages;
