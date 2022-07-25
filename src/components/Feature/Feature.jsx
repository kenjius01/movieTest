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
        infinite: true,
        speed: 1000,
        lazyLoad: true,
        slidesToShow: 4,
    };

    useEffect(() => {
        getPopularMovie().then((res) => {
            setHotMovie(res[19]);
            getVideoTrailer(res[19].id).then((trailersRes) => {
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
        <div className={styles.wrapper}>
            <div className={styles.coverImg}>
                {hotMovie?.backdrop_path ? (
                    <img
                        src={
                            'http://image.tmdb.org/t/p/original' +
                            hotMovie?.backdrop_path
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
