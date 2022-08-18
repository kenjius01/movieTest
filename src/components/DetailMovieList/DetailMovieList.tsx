import { MovieInfo, TvInfo } from '../../interface/interface';
import DetailCardMovie from '../DetailCardMovie/DetailCardMovie';
import styles from './ListMovie.module.scss';

type InfoCard = MovieInfo & TvInfo;
const DetailMovieList = ({ items }: { items: InfoCard[] }) => {
    return (
        <div className={styles.listItem}>
            {items?.map((item: InfoCard) => (
                <div key={item.id} className={styles.item}>
                    <DetailCardMovie data={item} />
                </div>
            ))}
        </div>
    );
};

export default DetailMovieList;
