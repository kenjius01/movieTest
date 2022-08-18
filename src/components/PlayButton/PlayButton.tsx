import clsx from 'clsx';
import styles from './PlayBtn.module.scss';

const PlayButton = ({
    small = false,
    primary,
    onClick,
    ...passProps
}: {
    small?: boolean;
    primary?: boolean;
    onClick?: any;
}) => {
    const classes = clsx(styles.wrapper, {
        [styles.small]: small,
        [styles.primary]: primary,
    });
    const props = {
        onClick,
        ...passProps,
    };

    return (
        <div className={classes} {...props}>
            <svg
                width="45"
                height="56"
                viewBox="0 0 45 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0.230469V55.7705L44.435 28.0005L0 0.230469ZM10 18.2705L25.565 28.0005L10 37.7305V18.2705Z"
                    fill="#FED530"
                />
            </svg>
        </div>
    );
};

export default PlayButton;
