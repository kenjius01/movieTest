import styles from './UserInfo.module.scss';

const UserInfo = () => {
    return (
        <div className={styles.userInfo}>
            <img
                src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=443"
                alt=""
            />
            <span>John Glick</span>
        </div>
    );
};

export default UserInfo;
