import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
    getRecommendationsTVShow,
    getTopMovies,
    getTopTvShows,
} from '../../api/movieApi';
import DetailHeadingSection from '../DetailHeadingSection/DetailHeadingSection';
import DetailMovieList from '../DetailMovieList/DetailMovieList';

import styles from '../DetailRecentSection/DetailRecentSection.module.scss';

const DetailRecommendSection = () => {
    const router = useRouter();
    const { id } = router.query;
    const [listMovie, setListMovie] = useState([]);
    const [fallBackMovies, setFallBackMovies] = useState([]);
    useEffect(() => {
        if (!router.isReady) return;
        const idTV = id?.toString().split('-')[1];
        const type = id?.toString().split('-')[0];

        getRecommendationsTVShow(String(type), String(idTV))
            .then((res) => {
                setListMovie(res.slice(0, 5));
            })
            .catch((err) => console.log(err));
        getTopTvShows().then((res) => setFallBackMovies(res.slice(0, 5)));
    }, [id, router.isReady]);
    return (
        <div id="show" className={styles.wrapper}>
            <div className={styles.inner}>
                <DetailHeadingSection title="top recommendations" />
                <DetailMovieList
                    items={listMovie.length > 4 ? listMovie : fallBackMovies}
                />
            </div>
        </div>
    );
};

export default DetailRecommendSection;
