import { useNavigate } from 'react-router-dom';
import getRouteData from '@/shared/util/getRouteData';

// Redirects to a route that exist
const useRouteNavigate = () => {
  const navigate = useNavigate();
  return (urlPath: string) => navigate(getRouteData(urlPath)?.path ?? urlPath);
};

export default useRouteNavigate;