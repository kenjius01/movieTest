import Button from '../Button/Button';
import { AiFillStar } from 'react-icons/ai';
import styles from './DetailCard.module.scss';
import { useEffect, useState } from 'react';
import { genresData } from '../../data/Data';

const DetailCardMovie = ({
    item: {
        id,
        name,
        original_title,
        poster_path,

        genre_ids,
    },
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
                <Button secondary>{genre}</Button>
                <div className={styles.rating}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <span className={styles.title}>
                    {original_title ? original_title : name}
                </span>
                <span className={styles.watch}>Watch now {' >'}</span>
            </div>
        </div>
    );
};

export default DetailCardMovie;
