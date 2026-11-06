import { Children } from 'react';
import styles from './ContentDisplay.module.css'


const ContentDisplay = ({children}: any) => {
    return (
        <section className={styles.contentDisplay}>
            <div className={styles.content}>
                {Children.map(children, child => <>{child}</>)}
            </div>
        </section>
    )
}

export default ContentDisplay;