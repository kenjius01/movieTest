import FooterMailContact from '../FooterMailContact/FooterMailContact';
import FooterMenu from '../FooterMenu/FooterMenu';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div id="footer" className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.container}>
                    <FooterMailContact />
                    <FooterMenu />
                </div>
            </div>
        </div>
    );
};

export default Footer;
