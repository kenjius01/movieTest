import { useEffect, useState } from 'react';
import { getEpisodesOfSeason, getTvShow } from '../../api/MoviesAPI';
import FilmCard from '../FilmCard/FilmCard';
import ListEpisode from '../ListEpisode/ListEpisode';
import styles from './FilmSection.module.scss';

const FilmSection = () => {
    const [film, setFilm] = useState({});
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        getTvShow()
            .then((res) => {
                setFilm(res[0]);
                getEpisodesOfSeason('4', res[0].id)
                    .then((res) => {
                        setEpisodes(res);
                        console.log(res);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div id="video" className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <FilmCard item={film} />
                    <div className={styles.list}>
                        <ListEpisode items={episodes} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmSection;
