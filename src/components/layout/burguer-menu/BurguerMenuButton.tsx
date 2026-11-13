import styles from './BurguerMenu.module.css'
import BurguerMenuIcon from '@/assets/icons/ui/lines_white.svg';

const BurguerMenuButton = () => {
    return (
        <a className={styles.burguerButton}>
            <img src={BurguerMenuIcon} style={{width: '20px'}}/>
        </a>
    )
}

export default BurguerMenuButton;   