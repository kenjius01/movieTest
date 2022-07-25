import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

const Logo = ({ title }) => {
    return (
        <div className={styles.logo}>
            <Link to="/">{title}</Link>
        </div>
    );
};

export default Logo;
