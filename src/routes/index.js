import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import ErrorRoutes from './ErrorRoutes';

//

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, ErrorRoutes]);
}
