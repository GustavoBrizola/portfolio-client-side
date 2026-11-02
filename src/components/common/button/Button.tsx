import { useState } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    aAria?: string | null;
    aHref?: string | null;
    imgLeft?: boolean;
    imgRight?: boolean;
    imgSrc?: string | null;
    imgAlt?: string | null;
    text?: string | null;
    textOnHover?: string | null;
    clipboard?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    aAria = null,
    aHref = null,
    imgLeft = false,
    imgRight = false,
    imgSrc = null,
    imgAlt = null,
    text = null,
    textOnHover = null,
    clipboard = false,
}) => {
    const [isHover, setIsHover] = useState(false);
    const displayText = isHover && textOnHover ? textOnHover : text;

    return (
        <a 
            aria-label={aAria || undefined} 
            href={aHref || undefined} 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}
            className={styles.button}
        >
            {imgSrc && imgLeft && <img src={imgSrc} alt={imgAlt || ''} className={styles.imgLeft} />}
            <span className={styles.buttonText}>{displayText}</span>
            {imgSrc && imgRight && <img src={imgSrc} alt={imgAlt || ''} className={styles.imgRight} />}
            {clipboard && <span>📋</span>}
        </a>
    );
};

export default Button;
