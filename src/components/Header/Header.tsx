import styles from './Header.module.scss';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import Logo from '../Logo/Logo';
import Typography from '../Typography/Typography';

const Header = () => {
    const [click, setClick] = useState<boolean>(false);

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        });
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => setClick(!click);

    return (
        <div className={clsx(styles.wrapper, isScrolled && styles.scrolled)}>
            <div className={styles.inner}>
                <div className={styles.navIcon} onClick={handleClick}>
                    {click ? (
                        <FaTimes className={styles.detailIcon} />
                    ) : (
                        <GoThreeBars className={styles.detailIcon} />
                    )}
                </div>
                <div className={styles.left}>
                    <Logo title="Watchflix" />
                    <div
                        className={clsx(
                            styles.listItem,
                            click && styles.active,
                        )}
                    >
                        <Typography as="li" onClick={() => setClick(false)}>
                            Home
                        </Typography>
                        <Typography as="li" onClick={() => setClick(false)}>
                            Movies
                        </Typography>
                        <Typography as="li" onClick={() => setClick(false)}>
                            tV show
                        </Typography>
                        <Typography as="li" onClick={() => setClick(false)}>
                            video
                        </Typography>
                        <Typography as="li" onClick={() => setClick(false)}>
                            faq
                        </Typography>
                        <Typography as="li" onClick={() => setClick(false)}>
                            pricing
                        </Typography>
                        <Typography as="li" onClick={() => setClick(false)}>
                            contact us
                        </Typography>
                    </div>
                </div>
                <div className={styles.right}>
                    <FiSearch className={styles.icon} />
                    <div className={styles.userInfo}>
                        <div className={styles.userImg}>
                            <Image
                                width="100%"
                                height="100%"
                                src="https://www.themoviedb.org/t/p/w200/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg"
                                alt=""
                            />
                        </div>
                        <Typography as="h6" fontWeight="bold">
                            John Wick
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
