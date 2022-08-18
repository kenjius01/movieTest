import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = ({ title }: { title: string }) => {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>{title}</a>
            </Link>
        </div>
    );
};

export default Logo;
