import Slider from 'react-slick';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import styles from './ListEpisode.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListEpisode = ({ items }) => {
    const settings = {
        infinite: false,
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <div className={`${styles.listItem} featureHome`}>
            <Slider {...settings}>
                {items?.map((item) => (
                    <EpisodeCard item={item} />
                ))}
            </Slider>
        </div>
    );
};

export default ListEpisode;
