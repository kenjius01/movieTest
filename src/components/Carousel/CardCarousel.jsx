import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import Button from '../Button/Button';
import styles from './Carousel.module.scss';
import { genresData } from '../../data/Data';

const CardCarousel = ({
    item: {
        id,
        original_title,
        overview,
        // popularity,
        poster_path,
        // release_date,
        // vote_average,
        genre_ids,
        backdrop_path,
        // vote_count,
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
        <div className={styles.inner}>
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
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <div className={styles.container}>
                        <Button secondary>{genre}</Button>
                        <div className={styles.rating}>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <span className={styles.title}>{original_title}</span>
                        <span className={styles.desc}>{overview}</span>
                        <Button large>Watch now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
