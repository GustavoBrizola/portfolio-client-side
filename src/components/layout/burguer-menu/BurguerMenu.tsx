import styles from './BurguerMenu.module.css'


const BurguerMenu = () => {

    return (
        <menu className={styles.burguerMenu}>
            <canvas style={{backgroundColor:'black', opacity:'0.7'}}/>
        </menu>
    )
}

export default BurguerMenu;