import styles from './CardMovie.module.scss';
import Button from '../Button/Button';
import SpecMovie from '../SpecMovie/SpecMovie';
import { useState, useEffect } from 'react';
import { genresData } from '../../data/Data';

const CardMovie = ({
    item: { poster_path, genre_ids, title, backdrop_path, name },
}) => {
    const [genre, setGenre] = useState('');

    useEffect(() => {
        genresData.map((item) => {
            if (item.id === genre_ids[0]) {
                setGenre(item.name);
            }
            return null;
        });
    }, [genre_ids]);

    return (
        <div className={styles.wrapper}>
            <Button primary>{genre}</Button>
            <div className={styles.coverImg}>
                <img
                    src={
                        poster_path
                            ? 'http://image.tmdb.org/t/p/original' + poster_path
                            : 'https://i.pinimg.com/originals/a1/16/72/a1167211bffbc81f616db1ef850aee2d.png'
                    }
                    alt=""
                />
            </div>
            <div className={styles.detail}>
                <SpecMovie />
                <span className={styles.title}>{title ? title : name}</span>
            </div>
        </div>
    );
};

export default CardMovie;
