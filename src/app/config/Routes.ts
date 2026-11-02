import React, { type JSX } from 'react';
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import Projects from '@/pages/projects/Projects';
import Contact from '@/pages/contact/Contact';
import Resume from '@/pages/resume/Resume';

export interface AppRoute {
  path: string;
  element: JSX.Element;
  label: string;
}

export const routes: AppRoute[] = [
  {
    path:     '/home',
    element:  React.createElement(Home),
    label:    'Home',
  },
  {
    path:     '/about',
    element:  React.createElement(About),
    label:    'About',
  },
  {
    path:     '/projects',
    element:  React.createElement(Projects),
    label:    'Projects',
  },
  {
    path:     '/contact',
    element:  React.createElement(Contact),
    label:    'Contact',
  },
  {
    path:     '/resume',
    element:  React.createElement(Resume),
    label:    'Resume',
  },
];

export const getRouteByPath = (path: string) => routes.find(route => route.path === path);
