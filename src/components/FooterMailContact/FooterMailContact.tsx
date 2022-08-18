import Button from '../Button/Button';
import styles from './FooterMailContact.module.scss';

const FooterMailContact = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <span className={styles.title}>Watchflix</span>
                <span className={styles.desc}>
                    Lorem ipsum dolor sit amet, consec tetur adipis cing elit,
                    sed do eiusmod tempor incididunt ut labore et.
                </span>
                <span className={styles.join}>Join Newsletters</span>
                <div className={styles.mailInfo}>
                    <input type="email" placeholder="Insert your mail here" />
                    <Button small primary>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.293 1.70697L13.586 7.99997H0V9.99997H13.586L7.293 16.293L8.707 17.707L17.414 8.99997L8.707 0.292969L7.293 1.70697Z"
                                fill="black"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FooterMailContact;
