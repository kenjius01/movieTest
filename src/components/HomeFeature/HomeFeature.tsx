import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../api/movieApi';
import { MovieInfo } from '../../interface/interface';
import Carousel from '../Carousel/Carousel';
import styles from './HomeFeature.module.scss';

const HomeFeature = () => {
    const [listMovie, setListMovie] = useState<MovieInfo[]>([]);
    useEffect(() => {
        getPopularMovies().then((res) => setListMovie(res));
    }, []);
    return (
        <div className={styles.wrapper}>
            <Carousel items={listMovie} />
        </div>
    );
};

export default HomeFeature;
