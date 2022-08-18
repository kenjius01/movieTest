import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './Carousel.module.scss';
import { genresData } from '../../data/data';
import { MovieInfo } from '../../interface/interface';
import Image from 'next/image';
import apiConfig from '../../api/apiConfig';
import { Rate } from 'antd';
import { useRouter } from 'next/router';

const CardCarousel = ({ data }: { data: MovieInfo }) => {
    const [genre, setGenre] = useState<string>('None');
    const backdrop_path = apiConfig.originalImage(data.backdrop_path);
    const router = useRouter();
    useEffect(() => {
        genresData.map((item) => {
            if (item.id !== data.genre_ids[0]) return;

            setGenre(item.name);
        });
    }, [data.genre_ids]);

    return (
        <div className={styles.inner}>
            <div className={styles.coverImg}>
                <Image layout="fill" src={backdrop_path} alt="" priority />
            </div>
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <div className={styles.container}>
                        <Button secondary>{genre}</Button>
                        <Rate
                            disabled
                            defaultValue={Math.round(data.vote_average / 2)}
                        />
                        <span className={styles.title}>
                            {data.original_title}
                        </span>
                        <span className={styles.desc}>{data.overview}</span>
                        <Button
                            onClick={() =>
                                router.push(`/detail/movie-${data.id}`)
                            }
                            large
                        >
                            Watch now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
