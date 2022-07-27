import styles from './FeatureRelease.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DetailCardMovie from '../DetailCardMovie/DetailCardMovie';

const FeatureRelease = ({ items }) => {
    const settings = {
        infinite: false,
        slidesToShow: 3.5,
        initialSlide: 3.5,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <div id="movie" className={`${styles.wrapper} release`}>
            <span className={styles.title}>New Releases {'>'}</span>
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <DetailCardMovie item={item} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeatureRelease;
