import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import MenuItem from './MenuItem/MenuItem';
import { FiSearch } from 'react-icons/fi';
import UserInfo from '../UserInfo/UserInfo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        window.onscroll = () => {
            setIsScrolled(window.pageYOffset <= 100 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);

    return (
        <div
            className={
                isScrolled
                    ? `${styles.scrolled} ${styles.wrapper}`
                    : styles.wrapper
            }
        >
            <div className={styles.inner}>
                <div className={styles.left}>
                    <Logo title="Watchflix" />
                    <MenuItem />
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
