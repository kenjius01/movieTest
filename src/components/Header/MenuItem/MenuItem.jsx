import styles from './MenuItem.module.scss';

const MenuItem = () => {
    return (
        <ul className={styles.listItem}>
            <li className={styles.item}>Home</li>
            <li className={styles.item}>Movies</li>
            <li className={styles.item}>tV show</li>
            <li className={styles.item}>video</li>
            <li className={styles.item}>faq</li>
            <li className={styles.item}>pricing</li>
            <li className={styles.item}>contact us</li>
        </ul>
    );
};

export default MenuItem;
