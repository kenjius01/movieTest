import styles from './EpisodeCard.module.scss';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import { EpisodeInfo } from '../../interface/interface';
import apiConfig from '../../api/apiConfig';
import PlayButton from '../PlayButton/PlayButton';
import { Image } from 'antd';
import Typography from '../Typography/Typography';

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
                <Typography as="subheading2" fontWeight="light" color="light">
                    Episode {item.episode_number}
                </Typography>
                <Typography as="h5" className={styles.title}>
                    {item.name}
                </Typography>
                <Typography
                    as="subheading3"
                    fontWeight="light"
                    color="light"
                    className={styles.desc}
                >
                    {item.overview}
                </Typography>
                <div className={styles.info}>
                    <div className={styles.item}>
                        <AiOutlineClockCircle className={styles.icon} />
                        <Typography
                            as="subheading3"
                            fontWeight="light"
                            color="text"
                        >
                            {item.runtime} minutes
                        </Typography>
                    </div>
                    <div className={styles.item}>
                        <AiOutlineCalendar className={styles.icon} />
                        <Typography
                            as="subheading3"
                            fontWeight="light"
                            color="text"
                        >
                            {item.air_date}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;
