import { useNavigate } from 'react-router-dom';
// import { getRouteByPath } from '@/app/config/Routes';
import getRouteByPath from '@/shared/util/getRoutebyPath';

const useRouteNavigate = (urlPath: string) => {
  const navigate = useNavigate();

  return navigate(getRouteByPath(urlPath)?.path ?? urlPath);
};

export default useRouteNavigate;