import styles from './EpisodeCard.module.scss';
import classNames from 'classnames/bind';
import PlayBtn from '../PlayBtn/PlayBtn';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
const cx = classNames.bind(styles);

const EpisodeCard = ({
    item: { air_date, episode_number, name, overview, runtime, still_path },
}) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img
                    src={
                        still_path
                            ? 'http://image.tmdb.org/t/p/original' + still_path
                            : 'https://i.pinimg.com/originals/a1/16/72/a1167211bffbc81f616db1ef850aee2d.png'
                    }
                    alt=""
                />
                <PlayBtn small />
            </div>
            <div className={cx('right')}>
                <span className={cx('episode')}>Episode {episode_number}</span>
                <span className={cx('title')}>{name}</span>
                <span className={cx('desc')}>{overview}</span>
                <div className={cx('info')}>
                    <div className={cx('item')}>
                        <AiOutlineClockCircle className={cx('icon')} />
                        <span>{runtime} minutes</span>
                    </div>
                    <div className={cx('item')}>
                        <AiOutlineCalendar className={cx('icon')} />
                        <span>{air_date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EpisodeCard;
