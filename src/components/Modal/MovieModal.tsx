import styles from './MovieModal.module.scss';
import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const MovieModal = ({
    setIsOpen,
    isOpen,
    videoKey,
}: {
    isOpen: boolean;
    videoKey: string;
    setIsOpen: (value: boolean) => void;
}) => {
    const classes = clsx(styles.wrapper, {
        [styles.isOpen]: isOpen,
    });

    const [url, setUrl] = useState<string>();
    useEffect(() => {
        if (videoKey) {
            const url = 'https://www.youtube.com/watch?v=' + videoKey;
            setUrl(url);
        }
    }, [videoKey]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={classes} onClick={handleClose}>
            <div className={styles.inner}>
                <ReactPlayer
                    playing={isOpen}
                    controls
                    width="100%"
                    height="70%"
                    url={url}
                    className={styles.video}
                />
            </div>
        </div>
    );
};

export default MovieModal;
