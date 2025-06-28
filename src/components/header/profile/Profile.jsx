import { useSelector } from 'react-redux';

import styles from './profile.module.scss';

export const Profile = () => {
	const user = useSelector(state => state.auth.user);

	return <div className={styles.wrapper}>{`${t()} ${user.name}`}</div>;
};
