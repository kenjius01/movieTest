import styles from './FeatureRelease.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DetailCardMovie from '../DetailCardMovie/DetailCardMovie';

const FeatureRelease = ({ items }) => {
    const settings = {
        infinite: false,
        slidesToShow: 3.5,
        speed: 500,
    };
    return (
        <div className={`${styles.wrapper} release`}>
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
