import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import { FiSearch } from 'react-icons/fi';
import UserInfo from '../UserInfo/UserInfo';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
    const [click, setClick] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);

    const scrollTo = (id) => {
        let element = document.getElementById(id);
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const handleScroll = (id) => {
        scrollTo(id);
        setClick(!click);
    };

    const handleClick = () => setClick(!click);

    return (
        <div
            className={
                isScrolled
                    ? `${styles.scrolled} ${styles.wrapper}`
                    : styles.wrapper
            }
        >
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
                    <ul
                        className={
                            click
                                ? `${styles.listItem} ${styles.active}`
                                : styles.listItem
                        }
                    >
                        <li
                            onClick={() => handleScroll('home')}
                            className={styles.item}
                        >
                            Home
                        </li>
                        <li
                            onClick={() => handleScroll('movie')}
                            className={styles.item}
                        >
                            Movies
                        </li>
                        <li
                            onClick={() => handleScroll('tvshow')}
                            className={styles.item}
                        >
                            tV show
                        </li>
                        <li
                            onClick={() => handleScroll('video')}
                            className={styles.item}
                        >
                            video
                        </li>
                        <li
                            onClick={() => handleScroll('show')}
                            className={styles.item}
                        >
                            faq
                        </li>
                        <li
                            onClick={() => handleScroll('footer')}
                            className={styles.item}
                        >
                            pricing
                        </li>
                        <li
                            onClick={() => handleScroll('footer')}
                            className={styles.item}
                        >
                            contact us
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <FiSearch className={styles.icon} />
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};

export default Header;
