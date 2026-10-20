import { NavLink } from 'react-router-dom';
import { NAVIGATION_LINKS } from 'config/Navigation';

export default function NavigationBar() {

    return (
        <>
        <nav>
          <ul>
            {NAVIGATION_LINKS.map(link => (
              <NavLink key={link.id} to={link.path}>{link.label}</NavLink>
            ))}
          </ul>
        </nav>
        </>
    )
}