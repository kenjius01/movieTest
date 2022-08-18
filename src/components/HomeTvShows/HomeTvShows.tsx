import styles from './HomeTvShows.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { getTvShow } from '../../api/movieApi';
import { MovieInfo, TvInfo } from '../../interface/interface';
import HomeCardMovie from '../HomeCardMovie/HomeCardMovie';
import Slider from '../Slider/Slider';

type InfoCard = MovieInfo & TvInfo;

const HomeTvShows = () => {
    const [listMovie, setListMovie] = useState<InfoCard[]>([]);
    useEffect(() => {
        getTvShow().then((res) => setListMovie(res));
    }, []);

    const settings = {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 16,
        },
    };
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Featured TV shows {'>'}</span>
            <Slider settings={settings}>
                {listMovie.map((item: InfoCard) => (
                    <HomeCardMovie key={item.id} movie={item} category="tv" />
                ))}
            </Slider>
        </div>
    );
};

export default HomeTvShows;
