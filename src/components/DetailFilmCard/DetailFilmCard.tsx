import { Image } from 'antd';
import apiConfig from '../../api/apiConfig';
import { TvInfo } from '../../interface/interface';
import PlayButton from '../PlayButton/PlayButton';
import Typography from '../Typography/Typography';
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
                <Typography as="h3" fontWeight="bold" className={styles.title}>
                    {item.name}
                </Typography>
                <Typography
                    as="subheading1"
                    fontWeight="light"
                    color="disable"
                    className={styles.desc}
                >
                    {item.overview}
                </Typography>
            </div>
        </div>
    );
};

export default DetailFilmCard;
