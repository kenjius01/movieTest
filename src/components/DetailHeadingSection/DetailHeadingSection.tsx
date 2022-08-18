import styles from './Heading.module.scss';

const DetailHeadingSection = ({ title }: { title: string }) => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{title}</span>
            <span className={styles.btn}>view more</span>
        </div>
    );
};

export default DetailHeadingSection;
