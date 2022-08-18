import { useEffect, useState } from 'react';
import { getEpisodesOfSeason, getTvShow } from '../../api/movieApi';
import { TvInfo } from '../../interface/interface';
import DetailFilmCard from '../DetailFilmCard/DetailFilmCard';
import DetailListEpisode from '../DetailListEpisode/DetailListEpisode';

import styles from './DetailFilmSection.module.scss';

const DetailFilmSection = () => {
    const [film, setFilm] = useState<TvInfo>();
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        getTvShow().then((res) => setFilm(res[0]));
    }, []);
    useEffect(() => {
        if (!film) return;
        getEpisodesOfSeason(1, film.id)
            .then((res) => {
                setEpisodes(res);
            })
            .catch((err) => console.log(err));
    }, [film]);
    return (
        <div id="video" className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    {film && <DetailFilmCard item={film} />}
                    <div className={styles.list}>
                        <DetailListEpisode items={episodes} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailFilmSection;
