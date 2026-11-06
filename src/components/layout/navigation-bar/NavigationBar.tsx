// Depedencies
import type { PropsWithChildren } from 'react'

// Imports
import styles from './NavigationBar.module.css'
import navgitationTabs from './NavigationTabs'

interface NavigationBarProps {}
const NavigationBar = ({}: PropsWithChildren<NavigationBarProps>) => {

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.section}>
        {Object.entries(navgitationTabs).map(([key, value]) => (
          <a id={value.id} className="nav-link" key={key} onClick={(e) => { e.preventDefault();}}>
            {value.icon && <img src={value.icon} alt='' style={{width: '18px'}}/>}
            {value.label && <span>{value.label}</span>}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavigationBar;