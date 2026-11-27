import { Children, type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    variant?: string;
    size?: string;
    isDisabled: boolean;
}

const Button = ({
    children,
    className = '',
    variant = 'default',
    size = 'small',
    isDisabled = false,
    type = 'button',
    ...props
}: ButtonInterface) => {

    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        className
    ].filter(Boolean).join(' ');

    return (
        <button type={type} className={classNames} disabled={isDisabled} {...props}>
            {Children.map(children, child => <>{child}</>)}
        </button>
    )
}

export default Button; 