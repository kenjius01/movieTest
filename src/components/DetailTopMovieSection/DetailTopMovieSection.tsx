import { useEffect, useState } from 'react';
import { getTopMovies } from '../../api/movieApi';
import DetailHeadingSection from '../DetailHeadingSection/DetailHeadingSection';
import DetailMovieList from '../DetailMovieList/DetailMovieList';

import styles from '../DetailRecentSection/DetailRecentSection.module.scss';

const DetailTopMovieSection = () => {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        getTopMovies()
            .then((res) => {
                setListMovie(res.slice(0, 5));
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div id="show" className={styles.wrapper}>
            <div className={styles.inner}>
                <DetailHeadingSection title="top movies" />
                <DetailMovieList items={listMovie} />
            </div>
        </div>
    );
};

export default DetailTopMovieSection;
