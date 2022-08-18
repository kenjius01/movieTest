import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import apiConfig from '../../api/apiConfig';
import { getDetailMovie, getVideoTrailer } from '../../api/movieApi';
import { MovieDetail, TrailerInfo } from '../../interface/interface';
import ListTrailerMovie from '../ListTrailerMovie/ListTrailerMovie';
import MovieModal from '../Modal/MovieModal';
import PlayCircle from '../PlayCircle/PlayCircle';
import styles from './DetailFeature.module.scss';

const DetailFeature = () => {
    const router = useRouter();
    const { id } = router.query;
    const category = id?.toString().split('-')[0];
    const idMovie = id?.toString().split('-')[1];
    const [movieDetail, setMovieDetail] = useState<MovieDetail>();
    const [listTrailer, setListTrailer] = useState<TrailerInfo[]>([]);
    const [isOpen, setIsopen] = useState<boolean>(false);

    useEffect(() => {
        if (!router.isReady) return;
        getDetailMovie(category as string, idMovie as string)
            .then((res) => setMovieDetail(res))
            .catch((err) => alert(err));
        getVideoTrailer(category as string, Number(idMovie))
            .then((res) => setListTrailer(res))
            .catch((err) => alert(err));
    }, [category, idMovie, router.isReady]);

    const imgUrl = movieDetail?.backdrop_path
        ? apiConfig.originalImage(movieDetail?.backdrop_path as string)
        : apiConfig.originalImage(movieDetail?.poster_path as string);
    return (
        <div className={styles.wrapper}>
            <div className={styles.coverImg}>
                {<Image layout="fill" src={imgUrl} alt="poster" priority />}
            </div>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <PlayCircle onClick={() => setIsopen(true)} />
                    </div>
                    <div className={styles.right}>
                        <span className={styles.title}>
                            {movieDetail?.title || movieDetail?.name}
                        </span>
                        <span className={styles.desc}>
                            {movieDetail?.overview}
                        </span>
                        <div className={styles.detail}>
                            <span>
                                Genre : {movieDetail?.genres[0].name || 'None'}
                            </span>
                            <span>
                                Duration :{' '}
                                {movieDetail?.runtime
                                    ? `${movieDetail?.runtime} minutes`
                                    : '2 hr 45 mins'}
                            </span>
                            <span>Ratings : {movieDetail?.vote_average}</span>
                        </div>
                    </div>
                    <div className={styles.listTrailer}>
                        <span>Trailers</span>
                        <ListTrailerMovie listTrailer={listTrailer} />
                    </div>
                </div>
            </div>
            <MovieModal
                videoKey={listTrailer[0]?.key}
                isOpen={isOpen}
                setIsOpen={setIsopen}
            />
        </div>
    );
};

export default DetailFeature;
