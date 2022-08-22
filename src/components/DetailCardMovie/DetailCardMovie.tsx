import styles from './DetailCardMovie.module.scss';
import Button from '../Button/Button';
import SpecMovie from '../SpecMovie/SpecMovie';
import { useState, useEffect } from 'react';
import { genresData } from '../../data/data';
import { MovieInfo, TvInfo } from '../../interface/interface';
import { Image } from 'antd';
import apiConfig from '../../api/apiConfig';
import { useRouter } from 'next/router';
import Typography from '../Typography/Typography';

const DetailCardMovie = ({ data }: { data: MovieInfo & TvInfo }) => {
    const [genre, setGenre] = useState('');
    const router = useRouter();
    const [type, setType] = useState<string>();

    useEffect(() => {
        genresData.map((item) => {
            if (item.id !== data.genre_ids[0]) return;
            setGenre(item.name);
        });
    }, [data.genre_ids]);
    useEffect(() => {
        if (data.title) setType('movie');
        else setType('tv');
    }, [data.title]);
    const handleClick = () => {
        router.push(`/detail/${type}-${data.id}`);
    };

    return (
        <div onClick={handleClick} className={styles.wrapper}>
            <Button primary>{genre || 'None'}</Button>
            <div className={styles.coverImg}>
                <Image
                    width={'100%'}
                    height="100%"
                    src={
                        data.poster_path
                            ? apiConfig.w500Image(data.poster_path)
                            : apiConfig.w500Image(data.backdrop_path)
                    }
                    alt=""
                />
            </div>
            <div className={styles.detail}>
                <SpecMovie />
                <Typography fontWeight="bold" as="h3" className={styles.title}>
                    {data.title ? data.title : data.name}
                </Typography>
            </div>
        </div>
    );
};

export default DetailCardMovie;
