import { Children } from 'react';
import styles from './AcademicDisplay.module.css'


const AcademicDisplay = ({children, key}: any) => {
    return (
        <article className={styles.academicDisplay} key={key}>
            {Children.map(children, child => <>{child}</>)}
        </article>
    )
}

export default AcademicDisplay;