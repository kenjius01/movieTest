import styles from './FeatureDetail.module.scss';
import Carousel from '../Carousel/Carousel';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getPopularMovie } from '../../api/MoviesAPI';

const FeatureDetail = () => {
    const ref = useRef(null);
    const [dataMovies, setDataMovies] = useState([]);

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let element = ref.current;
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        });
    });

    useEffect(() => {
        getPopularMovie().then((res) => setDataMovies(res));
    }, []);

    return (
        <div ref={ref} className={styles.wrapper}>
            <Carousel items={dataMovies} />
        </div>
    );
};

export default FeatureDetail;
