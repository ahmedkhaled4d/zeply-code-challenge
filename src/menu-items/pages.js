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
      id: 'documentations',
      title: 'Documentations',
      type: 'item',
      url: '/docs',
      icon: icons.ChromeOutlined
    },
    {
      id: 'developer',
      title: 'Developer',
      type: 'item',
      url: '/developer',
      icon: icons.ChromeOutlined
    }
  ]
};

export default pages;
