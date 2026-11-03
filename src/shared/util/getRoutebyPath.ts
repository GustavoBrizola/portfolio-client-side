import type { RouteObject } from 'react-router-dom';
import appRoutes from '@/app/config/Routes';

/**
 * 
 * @param urlPath 
 * @param routes 
 * @returns 
 */
function getRouteByPath(urlPath: string, routes: RouteObject[] = appRoutes): RouteObject | undefined {
  for (const route of routes) {
    if (route.path === urlPath) {
      return route;
    }

    if (route.children) {
      const childRoute = getRouteByPath(urlPath, route.children);
      if (childRoute) {
        return childRoute;
      }
    }
  }

  return undefined;
}

export default getRouteByPath;