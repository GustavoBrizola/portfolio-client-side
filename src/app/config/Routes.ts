import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { createElement } from 'react';

import Home from '@/pages/home';
import About from '@/pages/about';
import Resume from '@/pages/resume';
import Contact from '@/pages/contact';
import Projects from '@/pages/projects';

const appRoutes: RouteObject[] = [
  {
    index: true,
    path: '*',
    element: createElement(Navigate, { to: 'home', replace: true }),
  },
  {
    path: 'home',
    element: createElement(Home),
    children: [{}],
  },
  {
    path: 'about',
    element: createElement(About),
    children: [{}],
  },
  {
    path: 'resume',
    element: createElement(Resume),
    children: [{}],
  },
  {
    path: 'contact',
    element: createElement(Contact),
    children: [{}],
  },
  {
    path: 'projects',
    element: createElement(Projects),
    children: [{}],
  },
];

export default appRoutes;