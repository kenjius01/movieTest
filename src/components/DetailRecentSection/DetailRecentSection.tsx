import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSimilar } from '../../api/movieApi';
import DetailHeadingSection from '../DetailHeadingSection/DetailHeadingSection';
import DetailMovieList from '../DetailMovieList/DetailMovieList';
import Typography from '../Typography/Typography';

import styles from './DetailRecentSection.module.scss';

const DetailRecentSection = () => {
    const [listMovie, setListMovie] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!router.isReady) return;

        const category = id?.toString().split('-')[0];
        const idMovie = id?.toString().split('-')[1];

        getSimilar(String(category), String(idMovie)).then((res) => {
            setListMovie(res.slice(0, 5));
        });
    }, [id, router.isReady]);
    return (
        <div id="movie" className={styles.wrapper}>
            <div className={styles.inner}>
                <DetailHeadingSection title="similar movie" />
                {listMovie.length ? (
                    <DetailMovieList items={listMovie} />
                ) : (
                    <Typography color="error" as="h4">
                        There is no similar movies !
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default DetailRecentSection;
