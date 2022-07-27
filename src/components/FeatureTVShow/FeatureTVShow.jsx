import Slider from 'react-slick';
import DetailCardMovie from '../DetailCardMovie/DetailCardMovie';
import styles from './FeatureTVShow.module.scss';

const FeatureTVShow = ({ items }) => {
    const settings = {
        infinite: false,
        slidesToShow: 2.5,
        initialSlide: 2.5,

        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <div id="tvshow" className={`${styles.wrapper} release`}>
            <span className={styles.title}>Featured TV shows {'>'}</span>
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

export default FeatureTVShow;
