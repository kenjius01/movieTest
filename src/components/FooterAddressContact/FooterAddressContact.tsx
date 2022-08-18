import styles from './FooterAddressContact.module.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';

const FooterAddressContact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.menuItem}>
                    <ul className={styles.listItem}>
                        <li className={styles.item}>Product</li>
                        <li className={styles.item}>Movies</li>
                        <li className={styles.item}>TV Show</li>
                        <li className={styles.item}>Videos</li>
                    </ul>
                    <ul className={styles.listItem}>
                        <li className={styles.item}>Media Group</li>
                        <li className={styles.item}>Nice Studio</li>
                        <li className={styles.item}>Nice News</li>
                        <li className={styles.item}>Nice TV</li>
                    </ul>
                    <ul className={styles.listItem}>
                        <li className={styles.item}>Sitemap</li>
                        <li className={styles.item}>About</li>
                        <li className={styles.item}>Careers</li>
                        <li className={styles.item}>Press</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contactItem}>
                        <HiOutlineLocationMarker className={styles.icon} />
                        <span>8819 Ohio St. South Gate, California 90280</span>
                    </div>
                    <div className={styles.contactItem}>
                        <GoMail className={styles.icon} />
                        <span>ourstudio@hello.com</span>
                    </div>
                    <div className={styles.contactItem}>
                        <BsTelephone className={styles.icon} />
                        <span>+271 386-647-3637</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterAddressContact;
