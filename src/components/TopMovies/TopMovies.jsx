import { useEffect, useState } from 'react';
import { getTopMovie } from '../../api/MoviesAPI';
import Heading from '../Heading/Heading';
import ListMovie from '../ListMovie/ListMovie';
import styles from '../RecentSection/RecentSection.module.scss';

const TopMovies = () => {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        getTopMovie()
            .then((res) => {
                setListMovie(res.slice(0, 5));
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div id="show" className={styles.wrapper}>
            <div className={styles.inner}>
                <Heading title="top movies" />
                <ListMovie items={listMovie} />
            </div>
        </div>
    );
};

export default TopMovies;
