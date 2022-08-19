import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import apiConfig from '../../api/apiConfig';
import { getDetailMovie, getVideoTrailer } from '../../api/movieApi';
import { MovieDetail, TrailerInfo } from '../../interface/interface';
import ListTrailerMovie from '../ListTrailerMovie/ListTrailerMovie';
import MovieModal from '../Modal/MovieModal';
import PlayCircle from '../PlayCircle/PlayCircle';
import Typography from '../Typography/Typography';
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
                        <Typography
                            as="h1"
                            fontWeight="bold"
                            className={styles.title}
                        >
                            {movieDetail?.title || movieDetail?.name}
                        </Typography>
                        <Typography
                            as="subheading1"
                            color="light"
                            fontWeight="light"
                            className={styles.desc}
                        >
                            {movieDetail?.overview}
                        </Typography>
                        <div className={styles.detail}>
                            <Typography as="h6">
                                Genre :{' '}
                                {movieDetail?.genres.length
                                    ? movieDetail?.genres[0].name
                                    : 'None'}
                            </Typography>
                            <Typography as="h6">
                                Duration :{' '}
                                {movieDetail?.runtime
                                    ? `${movieDetail?.runtime} minutes`
                                    : '2 hr 45 mins'}
                            </Typography>
                            <Typography as="h6">
                                Ratings : {movieDetail?.vote_average}
                            </Typography>
                        </div>
                    </div>
                    <div className={styles.listTrailer}>
                        <Typography as="h4">Trailers</Typography>
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
