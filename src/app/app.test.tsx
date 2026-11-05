import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation, useRoutes } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import appRoutes from './config/Route';

vi.mock('@/pages/home', () => ({ default: () => <main>Home page</main> }));
vi.mock('@/pages/about', () => ({ default: () => <main>About page</main> }));
vi.mock('@/pages/resume', () => ({ default: () => <main>Resume page</main> }));
vi.mock('@/pages/contact', () => ({ default: () => <main>Contact page</main> }));
vi.mock('@/pages/projects', () => ({ default: () => <main>Projects page</main> }));

function TestRoutes() {
  return useRoutes(appRoutes);
}

function LocationDisplay() {
  const location = useLocation();
  return <output aria-label="current pathname">{location.pathname}</output>;
}

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <TestRoutes />
      <LocationDisplay />
    </MemoryRouter>,
  );
}

describe('application routing', () => {
  it.each([
    ['/home', 'Home page'],
    ['/about', 'About page'],
    ['/resume', 'Resume page'],
    ['/contact', 'Contact page'],
    ['/projects', 'Projects page'],
  ])('renders the %s route as %s', (path, pageText) => {
    renderRoute(path);

    expect(screen.getByText(pageText)).toBeInTheDocument();
    expect(screen.getByLabelText('current pathname')).toHaveTextContent(path);
  });

  it('redirects an unknown route to /home', () => {
    renderRoute('/not-a-real-page');

    expect(screen.getByText('Home page')).toBeInTheDocument();
    expect(screen.getByLabelText('current pathname')).toHaveTextContent('/home');
  });
});
