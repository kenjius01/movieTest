import Slider from 'react-slick';
import DetailCardMovie from '../DetailCardMovie/DetailCardMovie';
import styles from './FeatureTVShow.module.scss';

const FeatureTVShow = ({ items }) => {
    const settings = {
        infinite: false,
        slidesToShow: 2.5,
        speed: 500,
    };
    return (
        <div className={`${styles.wrapper} release`}>
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
