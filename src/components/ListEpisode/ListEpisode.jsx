import Slider from 'react-slick';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import styles from './ListEpisode.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListEpisode = ({ items }) => {
    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        arrows: false,
        responsive: [
            // {
            //     breakpoint: 1400,
            //     settings: {
            //         slidesToShow: 3.5,
            //         // slidesToScroll: 3,
            //         // initialSlide: 3,
            //     },
            // },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    initialSlide: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    initialSlide: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={`${styles.listItem} featureHome`}>
            <Slider {...settings}>
                {items?.map((item) => (
                    <EpisodeCard key={item.id} item={item} />
                ))}
            </Slider>
        </div>
    );
};

export default ListEpisode;
