import EpisodeCard from '../EpisodeCard/EpisodeCard';
import styles from './ListEpisode.module.scss';
import Slider from '../Slider/Slider';
import { EpisodeInfo } from '../../interface/interface';

const DetailListEpisode = ({ items }: { items: EpisodeInfo[] }) => {
    const settings = {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
    };
    return (
        <div className={`${styles.listItem} featureHome`}>
            <Slider settings={settings}>
                {items?.map((item) => (
                    <EpisodeCard key={item.id} item={item} />
                ))}
            </Slider>
        </div>
    );
};

export default DetailListEpisode;
