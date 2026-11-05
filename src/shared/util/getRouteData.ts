import type { RouteObject } from 'react-router-dom';
import Routes from '@/app/config/Route';

/**
 * 
 * @param routePath 
 * @param routes
 * @returns 
 */
function getRouteData(routePath: string, routes: RouteObject[] = Routes): RouteObject | undefined {
  for (const route of routes) {
    if (route.path === routePath) {
      return route;
    }
  }

  // if path not found
  return undefined;
}

export default getRouteData;