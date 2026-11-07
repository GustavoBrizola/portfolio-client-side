import { type PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'

import styles from './NavigationBar.module.css'
import navgitationTabs from './NavigationTabs'
import useRouteNavigate from '@/shared/hooks/useRouteNavigate'

interface NavigationBarProps {}
const NavigationBar = ({}: PropsWithChildren<NavigationBarProps>) => {
  const routeNavigate = useRouteNavigate();
  const location = useLocation();

  // console.log(location.pathname);

  return (
      <div className={styles.section}>
        {Object.entries(navgitationTabs).map(([key, value]) => (
          //  
          <a 
            id={value.id} 
            className="nav-link" 
            key={key} 
            onClick={() => { 
              if (value.path && value.path !== location.pathname) {
                routeNavigate(value.path);
              } else {}
            }}
          >
            {value.icon && <img src={value.icon} alt='' style={{width: '18px'}}/>}
            {value.label && <span>{value.label}</span>}
          </a>
        ))}
      </div>
  )
}

export default NavigationBar;