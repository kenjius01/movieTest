import Button from '../Button/Button';
import { AiFillStar } from 'react-icons/ai';
import styles from './HomeCardMovie.module.scss';
import { useEffect, useState } from 'react';
import { genresData } from '../../data/data';
import { MovieInfo, TvInfo } from '../../interface/interface';
import Image from 'next/image';
import apiConfig from '../../api/apiConfig';
import { useRouter } from 'next/router';
import { Rate } from 'antd';
import Typography from '../Typography/Typography';

type InfoCard = MovieInfo & TvInfo;

const HomeCardMovie = ({
    movie,
    category,
}: {
    movie: InfoCard;
    category: string;
}) => {
    const [genre, setGenre] = useState('');
    const poster_path = apiConfig.w500Image(movie.poster_path);
    const router = useRouter();
    useEffect(() => {
        genresData.map((item) => {
            if (item.id !== movie.genre_ids[0]) return;

            setGenre(item.name);
        });
    }, [movie.genre_ids]);

    const handleNavigateDetail = () => {
        // const title = movie.title
        //     ? movie.title.split(' ').join('-').toLowerCase()
        //     : movie.name.split(' ').join('-');

        router.push(`/detail/${category}-${movie.id}`);
    };

    return (
        <div className={styles.wrapper} onClick={handleNavigateDetail}>
            <div className={styles.coverImg}>
                <Image layout="fill" src={poster_path} alt="" />
            </div>
            <div className={styles.detail}>
                <Button secondary>{genre}</Button>
                <Rate
                    style={{ fontSize: '13px' }}
                    disabled
                    defaultValue={Math.round(movie.vote_average / 2)}
                />
                <Typography as="h5" className={styles.title}>
                    {movie.title || movie.name}
                </Typography>
                <Typography as="h6" className={styles.watch}>
                    Watch now {' >'}
                </Typography>
            </div>
        </div>
    );
};

export default HomeCardMovie;
