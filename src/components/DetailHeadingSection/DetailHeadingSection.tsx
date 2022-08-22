import Typography from '../Typography/Typography';
import styles from './Heading.module.scss';

const DetailHeadingSection = ({ title }: { title: string }) => {
    return (
        <div className={styles.wrapper}>
            <Typography as="h3" className={styles.title}>
                {title}
            </Typography>
            <Typography as="h5" fontWeight="bold" className={styles.btn}>
                view more
            </Typography>
        </div>
    );
};

export default DetailHeadingSection;
