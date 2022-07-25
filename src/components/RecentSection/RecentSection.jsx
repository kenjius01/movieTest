import { useEffect, useState } from 'react';
import { getTrending } from '../../api/MoviesAPI';
import Heading from '../Heading/Heading';
import ListMovie from '../ListMovie/ListMovie';
import styles from './RecentSection.module.scss';

const RecentSection = () => {
    const [listMovie, setListMovie] = useState([]);
    useEffect(() => {
        getTrending().then((res) => {
            setListMovie(res);
        });
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <Heading title="my last watch" />
                <ListMovie items={listMovie} />
            </div>
        </div>
    );
};

export default RecentSection;
