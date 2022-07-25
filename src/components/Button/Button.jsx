import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Button = ({
    children,
    primary,
    secondary,
    small = false,
    large = false,
    onClick,
    disabled,
    ...passProp
}) => {
    const classes = cx('wrapper', {
        primary,
        secondary,
        disabled,
        small,
        large,
    });
    const props = {
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
