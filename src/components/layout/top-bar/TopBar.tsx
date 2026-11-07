import { Children } from "react";
import styles from './TopBar.module.css'


const TopBar = ({children}: any) => {
    return (
        <nav className={styles.topBar}>
            {Children.map(children, child => <>{child}</>)}
        </nav>
    )
}

export default TopBar;