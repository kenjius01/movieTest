import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './TrailerCard.module.scss';

const TrailerCard = ({
    number,
    videoKey,
}: {
    number: number;
    videoKey: string;
}) => {
    const [url, setUrl] = useState<string>();
    useEffect(() => {
        if (videoKey) {
            const url = 'https://www.youtube.com/watch?v=' + videoKey;
            setUrl(url);
        }
    }, [videoKey]);
    return (
        <div className={styles.card}>
            <ReactPlayer
                controls
                stopOnUnmount={true}
                width="100%"
                height="100%"
                url={url}
                className={styles.video}
            />
            <span>{number < 10 ? `0${number}` : number}</span>
        </div>
    );
};

export default TrailerCard;
