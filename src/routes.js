import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import CityPage from './pages/CityPage';
import RegionPage from './pages/RegionPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/hospital-project',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="hospital-project/regions" />, index: true },
        { path: 'regions', element: <RegionPage /> },
        { path: 'cities', element: <CityPage /> },

      ],
    },
  ]);

  return routes;
}
