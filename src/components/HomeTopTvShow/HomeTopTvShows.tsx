import styles from '../HomeNewReleaseMovies/HomeNewReleaseMovies.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { useEffect, useState } from 'react';
import { getTopTvShows } from '../../api/movieApi';
import { MovieInfo, TvInfo } from '../../interface/interface';
import HomeCardMovie from '../HomeCardMovie/HomeCardMovie';
import Slider from '../Slider/Slider';

type InfoCard = MovieInfo & TvInfo;

const HomeTopTvShows = () => {
    const [listMovie, setListMovie] = useState<InfoCard[]>([]);
    useEffect(() => {
        getTopTvShows().then((res) => setListMovie(res));
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
            <span className={styles.title}>Top Rate TvShow {'>'}</span>
            <Slider settings={settings}>
                {listMovie.map((item: InfoCard) => (
                    <HomeCardMovie key={item.id} movie={item} category="tv" />
                ))}
            </Slider>
        </div>
    );
};

export default HomeTopTvShows;
