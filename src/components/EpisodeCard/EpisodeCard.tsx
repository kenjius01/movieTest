import styles from './EpisodeCard.module.scss';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import { EpisodeInfo } from '../../interface/interface';
import apiConfig from '../../api/apiConfig';
import PlayButton from '../PlayButton/PlayButton';
import { Image } from 'antd';

const EpisodeCard = ({ item }: { item: EpisodeInfo }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Image
                    preview={false}
                    height={'100%'}
                    width="100%"
                    src={
                        item.still_path
                            ? apiConfig.w500Image(item.still_path)
                            : 'https://i.pinimg.com/originals/a1/16/72/a1167211bffbc81f616db1ef850aee2d.png'
                    }
                    alt=""
                />
                <PlayButton small />
            </div>
            <div className={styles.right}>
                <span className={styles.episode}>
                    Episode {item.episode_number}
                </span>
                <span className={styles.title}>{item.name}</span>
                <span className={styles.desc}>{item.overview}</span>
                <div className={styles.info}>
                    <div className={styles.item}>
                        <AiOutlineClockCircle className={styles.icon} />
                        <span>{item.runtime} minutes</span>
                    </div>
                    <div className={styles.item}>
                        <AiOutlineCalendar className={styles.icon} />
                        <span>{item.air_date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;
