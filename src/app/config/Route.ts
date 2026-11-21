import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { createElement, lazy } from 'react';

import routeConfig from './RouteConfig';

const appRoutes: RouteObject[] = [
  {
    // Root - do not mesh
    id: 'root',
    index: true,
    path: '/',
    element: createElement(Navigate, { to: '/home', replace: true }),
  },
  {
    id: routeConfig.home.id,
    path: routeConfig.home.path,
    // element: createElement(Home),
    element: createElement(lazy(() => import('@/pages/home'))),
    children: [{}],
  },
  {
    id: routeConfig.about.id,
    path: routeConfig.about.path,
    element: createElement(lazy(() => import('@/pages/about'))),
    children: [{}],
  },
  {
    id: routeConfig.resume.id,
    path: routeConfig.resume.path,
    // element: createElement(Resume),
    element: createElement(lazy(() => import('@/pages/resume'))),
    children: [{}],
  },
  {
    id: routeConfig.projects.id,
    path: routeConfig.projects.path,
    element: createElement(lazy(() => import('@/pages/projects'))),
    children: [{}],
  },
];

export default appRoutes;