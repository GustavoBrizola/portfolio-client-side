import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { createElement } from 'react';

import routeConfig from './RouteConfig';
import Home from '@/pages/home';
import About from '@/pages/about';
import Resume from '@/pages/resume';
import Contact from '@/pages/contact';
import Projects from '@/pages/projects';


/** 
 * PORTOLIO ROUTES
 * 
 * The idea is separate the route into separates ones, and can have their subpages(child) each
 * By default, the code identifies this as endpoints inside the '/'.
 * 
 * But they not hold any logic of languages or bussiness logic by itself
 * Its purpose is to determine what endpoints is accessible to final user
 * 
 * PAINS
 * Anytime the user tries to access an endpoint that does not listed here, it's dragged to HOME
 * A saparate typo handler might be useful to solve the problem
 */
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
    element: createElement(Home),
    children: [{}],
  },
  {
    id: routeConfig.about.id,
    path: routeConfig.about.path,
    element: createElement(About),
    children: [{}],
  },
  {
    id: routeConfig.resume.id,
    path: routeConfig.resume.path,
    element: createElement(Resume),
    children: [{}],
  },
  {
    id: routeConfig.contact.id,
    path: routeConfig.contact.path,
    element: createElement(Contact),
    children: [{}],
  },
  {
    id: routeConfig.projects.id,
    path: routeConfig.projects.path,
    element: createElement(Projects),
    children: [{}],
  },
];

export default appRoutes;