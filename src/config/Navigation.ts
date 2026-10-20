export interface NavItem {
  label: string;
  path: string;
  id: string;
}

export const NAVIGATION_LINKS: NavItem[] = [
  { label: 'Home', path: '/home', id: 'home' },
  { label: 'About', path: '/about', id: 'about' },
  { label: 'Projects', path: '/projects', id: 'projects' },
  { label: 'Resume', path: '/resume', id: 'resume' },
  { label: 'Contact', path: '/contact', id: 'contact' },
];