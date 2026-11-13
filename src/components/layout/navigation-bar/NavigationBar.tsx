import { useLocation } from 'react-router-dom'

import styles from './NavigationBar.module.css'
import navgitationTabs from './NavigationTabs'
import useRouteNavigate from '@/shared/hooks/useRouteNavigate'

const NavigationBar = () => {
  const routeNavigate = useRouteNavigate();
  const location = useLocation();

  return (
      <div className={styles.section}>
        {Object.entries(navgitationTabs).map(([key, value]) => (
          <a 
          id={value.id} 
          className={`nav-link ${value.path === location.pathname ? styles.active : ''}`}
          key={key} 
          onClick={() => { if (value.path && value.path !== location.pathname) { routeNavigate(value.path); }}}
          >
            {value.icon && <img src={value.icon} alt={value.label}/>}
            {value.label && <span>{value.label}</span>}
          </a>
        ))}
      </div>
  )
}

export default NavigationBar;