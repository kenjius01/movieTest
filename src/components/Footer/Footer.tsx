import FooterAddressContact from '../FooterAddressContact/FooterAddressContact';
import FooterMailContact from '../FooterMailContact/FooterMailContact';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div id="footer" className={styles.wrapper}>
            <div className={styles.container}>
                <FooterMailContact />
                <FooterAddressContact />
            </div>
        </div>
    );
};

export default Footer;
