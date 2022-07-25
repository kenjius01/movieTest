import CardMovie from '../CardMovie/CardMovie';
import styles from './ListMovie.module.scss';

const ListMovie = ({ items }) => {
    return (
        <div className={styles.listItem}>
            {items?.map((item) => (
                <div key={item.id} className={styles.item}>
                    <CardMovie item={item} />
                </div>
            ))}
        </div>
    );
};

export default ListMovie;
