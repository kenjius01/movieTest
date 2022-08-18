import { Image } from 'antd';
import apiConfig from '../../api/apiConfig';
import { TvInfo } from '../../interface/interface';
import PlayButton from '../PlayButton/PlayButton';
import styles from './FilmCard.module.scss';

const DetailFilmCard = ({ item }: { item: TvInfo }) => {
    return (
        <div className={styles.card}>
            <div className={styles.coverImg}>
                <Image
                    width={'100%'}
                    height="100%"
                    src={
                        item.backdrop_path
                            ? apiConfig.originalImage(item.backdrop_path)
                            : apiConfig.originalImage(item.poster_path)
                    }
                    alt=""
                />
            </div>
            <PlayButton primary />
            <div className={styles.info}>
                <span className={styles.title}>{item.name}</span>
                <span className={styles.desc}>{item.overview}</span>
            </div>
        </div>
    );
};

export default DetailFilmCard;
