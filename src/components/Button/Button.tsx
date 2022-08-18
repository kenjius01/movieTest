import styles from './Button.module.scss';
import clsx from 'clsx';

interface TypeProps {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    large?: boolean;
    onClick?: any;
    disabled?: boolean;
    passProp?: any;
}

const Button = ({
    children,
    primary,
    secondary,
    small = false,
    large = false,
    onClick,
    disabled,
    ...passProp
}: TypeProps) => {
    const classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.disabled]: disabled,
        [styles.small]: small,
        [styles.large]: large,
    });
    const props: any = {
        onClick,
        ...passProp,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <button className={classes} {...props}>
            <span>{children}</span>
        </button>
    );
};

export default Button;
