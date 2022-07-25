import { useNavigate } from 'react-router-dom';
import styles from './Heading.module.scss';

const Heading = ({ title }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/detail');
    };
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}>{title}</span>
            <span className={styles.btn} onClick={handleClick}>
                view more
            </span>
        </div>
    );
};

export default Heading;
