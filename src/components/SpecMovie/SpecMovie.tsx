import styles from './SpecMovie.module.scss';
import { AiOutlineClockCircle, AiOutlineEye } from 'react-icons/ai';

const SpecMovie = () => {
    return (
        <div className={styles.info}>
            <div className={styles.item}>
                <AiOutlineClockCircle className={styles.icon} />
                <span>1hr 24mins</span>
            </div>
            <div className={styles.item}>
                <AiOutlineEye className={styles.icon} />
                <span>21.3k views</span>
            </div>
        </div>
    );
};

export default SpecMovie;
