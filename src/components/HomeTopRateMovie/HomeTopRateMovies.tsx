import styles from '../HomeNewReleaseMovies/HomeNewReleaseMovies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { getTopMovies } from '../../api/movieApi';
import { MovieInfo, TvInfo } from '../../interface/interface';
import HomeCardMovie from '../HomeCardMovie/HomeCardMovie';
import Slider from '../Slider/Slider';

type InfoCard = MovieInfo & TvInfo;

const HomeTopRateMovies = () => {
    const [listMovie, setListMovie] = useState<InfoCard[]>([]);
    useEffect(() => {
        getTopMovies().then((res) => setListMovie(res));
    }, []);
    const settings = {
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 16,
        },
    };
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>Top Rate Movies {'>'}</span>
            <Slider settings={settings}>
                {listMovie.map((item: InfoCard) => (
                    <HomeCardMovie
                        key={item.id}
                        movie={item}
                        category="movie"
                    />
                ))}
            </Slider>
        </div>
    );
};

export default HomeTopRateMovies;
