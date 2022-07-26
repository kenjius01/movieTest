import { useEffect, useState } from 'react';
import { getTvShow } from '../../api/MoviesAPI';
import Heading from '../Heading/Heading';
import ListMovie from '../ListMovie/ListMovie';
import styles from './ShowSection.module.scss';

const ShowSection = () => {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        getTvShow()
            .then((res) => {
                setListMovie(res.slice(0, 5));
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div id="tvshow" className={styles.wrapper}>
            <div className={styles.inner}>
                <Heading title="top TV show" />
                <ListMovie items={listMovie} />
            </div>
        </div>
    );
};

export default ShowSection;
