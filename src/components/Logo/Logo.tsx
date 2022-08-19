import Link from 'next/link';
import Typography from '../Typography/Typography';
import styles from './Logo.module.scss';

const Logo = ({ title }: { title: string }) => {
    return (
        <div className={styles.logo}>
            <Typography as="h4" fontWeight="bold">
                <Link href="/">
                    <a>{title}</a>
                </Link>
            </Typography>
        </div>
    );
};

export default Logo;
