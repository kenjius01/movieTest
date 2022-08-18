import { MouseEventHandler } from 'react';
import styles from './PlayCircle.module.scss';
import clsx from 'clsx';

const PlayCircle = ({
    onClick,
}: {
    onClick?: MouseEventHandler<HTMLDivElement>;
}) => {
    return (
        <div className={styles.circle} onClick={onClick}>
            <div className={styles.circleStart}></div>
            <div className={styles.circleEnd}>
                <div className={styles.round}>
                    <svg
                        width="15"
                        height="20"
                        viewBox="0 0 15 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 19.8689V0.130859L14.8 9.99986L0 19.8689ZM2 3.86886V16.1309L11.2 9.99986L2 3.86886Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PlayCircle;
