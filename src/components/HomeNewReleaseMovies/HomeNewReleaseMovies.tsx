import styles from './HomeNewReleaseMovies.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules

import { useEffect, useState } from 'react';
import { getNewRelease } from '../../api/movieApi';
import { MovieInfo, TvInfo } from '../../interface/interface';
import HomeCardMovie from '../HomeCardMovie/HomeCardMovie';
import Slider from '../Slider/Slider';

type InfoCard = MovieInfo & TvInfo;

const HomeNewReleaseMovies = () => {
    const [listMovie, setListMovie] = useState<InfoCard[]>([]);
    useEffect(() => {
        getNewRelease().then((res) => setListMovie(res));
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
            <span className={styles.title}>New Releases {'>'}</span>
            <Slider settings={settings}>
                {listMovie.map((item: InfoCard) => (
                    <HomeCardMovie
                        key={item.id}
                        movie={item}
                        category="movie"
                    />
                ))}
            </Slider>
            {/* <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                navigation
                breakpoints={{}}
                lazy
                modules={[Navigation]}
                className="mySwiper"
            >
                {listMovie.map((item: InfoCard) => (
                    <SwiperSlide key={item.id}>
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </div>
    );
};

export default HomeNewReleaseMovies;
