import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getVideoTrailer } from '../../api/movieApi';
import { TrailerInfo } from '../../interface/interface';
import Slider from '../Slider/Slider';
import TrailerCard from '../TrailerCard/TrailerCard';

const ListTrailerMovie = ({ listTrailer }: { listTrailer: TrailerInfo[] }) => {
    const settings = {
        640: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
    };

    return (
        <Slider settings={settings}>
            {listTrailer.map((item: TrailerInfo, index: number) => (
                <TrailerCard
                    key={item.id}
                    number={index + 1}
                    videoKey={item.key}
                />
            ))}
        </Slider>
    );
};

export default ListTrailerMovie;
