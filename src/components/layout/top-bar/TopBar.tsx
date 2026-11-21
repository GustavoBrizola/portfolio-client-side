import { Children } from "react";
import styles from './TopBar.module.css'

const TopBar = ({children}: any) => {

    // TODO: create feature that topbar disables when window.scrollY is through the page
    // 
    // Disables when:
    // the scroll is not edges top and bottom
    // scrolls down
    // 
    // Enables back when:
    // is at the top;
    // is at the bottom; 
    // mouse Y position is same as topbar height;
    // 
    // Purpose:
    // More space avaliable for content on both desktop & mobile factor
    // Train useEffects

    return (
        <nav className={styles.topBar}>
            {Children.map(children, child => <>{child}</>)}
        </nav>
    )
}

export default TopBar;