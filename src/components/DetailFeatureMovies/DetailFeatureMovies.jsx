import styles from './DetailFeatureMovies.module.scss';
import FeatureTVShow from '../FeatureTVShow/FeatureTVShow';
import FeatureRelease from '../FeatureRelease/FeatureRelease';
import { useEffect, useState } from 'react';
import { getNewRelease, getTvShow } from '../../api/MoviesAPI';

const DetailFeatureMovies = () => {
    const [listRelease, setListRelease] = useState([]);
    const [TVShows, setTVShows] = useState([]);

    useEffect(() => {
        getNewRelease()
            .then((res) => {
                setListRelease(res);
            })
            .catch((err) => console.log(err));
        getTvShow().then((res) => setTVShows(res));
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <FeatureRelease items={listRelease} />
                <FeatureTVShow items={TVShows} />
            </div>
        </div>
    );
};

export default DetailFeatureMovies;
