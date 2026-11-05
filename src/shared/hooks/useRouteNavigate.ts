import { useNavigate } from 'react-router-dom';
import getRouteByPath from '@/shared/util/getRouteData';

const useRouteNavigate = (urlPath: string) => {
  const navigate = useNavigate();

  return navigate(getRouteByPath(urlPath)?.path ?? urlPath);
};

export default useRouteNavigate;