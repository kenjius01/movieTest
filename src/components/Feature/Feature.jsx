import { useEffect, useState } from 'react';
import { getPopularMovie, getVideoTrailer } from '../../api/MoviesAPI';
import MovieModal from '../MovieModal/MovieModal';
import PlayCircle from '../PlayCircle/PlayCircle';
import TrailerCard from '../TrailerCard/TrailerCard';
import styles from './Feature.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { genresData } from '../../data/Data';

const Feature = () => {
    const [isOpen, setIsopen] = useState(false);
    const [hotMovie, setHotMovie] = useState({});
    const [trailers, setTrailers] = useState([]);
    const [genre, setGenre] = useState('');

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        // arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3.5,
                    // slidesToScroll: 3,
                    // initialSlide: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2.5,
                    initialSlide: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        getPopularMovie().then((res) => {
            setHotMovie(res[7]);
            getVideoTrailer(res[7].id).then((trailersRes) => {
                setTrailers(trailersRes);
            });
        });
    }, []);

    useEffect(() => {
        if (hotMovie.genre_ids) {
            genresData.map((item) => {
                if (item.id === hotMovie.genre_ids[0]) {
                    setGenre(item.name);
                }
                return null;
            });
        }
    }, [hotMovie]);

    return (
        <div id="home" className={styles.wrapper}>
            <div className={styles.coverImg}>
                {hotMovie?.poster_path ? (
                    <img
                        src={
                            'http://image.tmdb.org/t/p/original' +
                            hotMovie?.poster_path
                        }
                        alt=""
                    />
                ) : null}
            </div>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <PlayCircle onClick={() => setIsopen(true)} />
                </div>
                <div className={styles.right}>
                    <span className={styles.title}>
                        {hotMovie.original_title}
                    </span>
                    <span className={styles.desc}>{hotMovie.overview}</span>
                    <div className={styles.detail}>
                        <span>Genre : {genre}</span>
                        <span>Duration : 2 hr 45 mins</span>
                        <span>Ratings : {hotMovie.vote_average}</span>
                    </div>
                </div>
                <div className={`${styles.trailer} featureHome`}>
                    <span>Trailers</span>
                    <div className={styles.listTrailer}>
                        <Slider {...settings}>
                            {trailers?.map((trailer, index) => (
                                <TrailerCard
                                    number={index + 1}
                                    key={trailer.key}
                                    videoKey={trailer.key}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <MovieModal
                videoKey={trailers[0]?.key}
                isOpen={isOpen}
                setIsOpen={setIsopen}
            />
        </div>
    );
};

export default Feature;
