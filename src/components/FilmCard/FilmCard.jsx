import PlayBtn from '../PlayBtn/PlayBtn';
import styles from './FilmCard.module.scss';

const FilmCard = ({ item: { poster_path, overview, backdrop_path, name } }) => {
    return (
        <div className={styles.card}>
            <div className={styles.coverImg}>
                <img
                    src={
                        backdrop_path
                            ? 'http://image.tmdb.org/t/p/original' +
                              backdrop_path
                            : 'https://i.pinimg.com/originals/a1/16/72/a1167211bffbc81f616db1ef850aee2d.png'
                    }
                    alt=""
                />
            </div>
            <PlayBtn primary />
            <div className={styles.info}>
                <span className={styles.title}>{name}</span>
                <span className={styles.desc}>{overview}</span>
            </div>
        </div>
    );
};

export default FilmCard;
