import styles from './MovieModal.module.scss';
import ReactPlayer from 'react-player/youtube';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

const MovieModal = ({ setIsOpen, isOpen, videoKey }) => {
    const classes = cx('wrapper', {
        isOpen,
    });

    const [url, setUrl] = useState(null);
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
