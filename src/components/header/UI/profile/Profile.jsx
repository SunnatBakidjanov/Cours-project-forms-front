import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { useLogout } from '../../hooks/useLogout';

import { Button } from '../../../../UI/button/Button';
import { LoginLogoutButton } from '../loginBtn/LoginLogoutButton';

import styles from './profile.module.scss';
import classNames from 'classnames';

export const Profile = () => {
	const user = useSelector(state => state.auth.user);
	const { root } = useThemeVar();
	const userFirstLetter = user?.name?.slice(0, 1);
	const { t } = useTranslation();
	const { isLoading, logoutHandler } = useLogout();

	return (
		<div className={styles.wrapper}>
			<Button text={userFirstLetter} className={classNames(styles.profileBtn, root.btnSubmit, root.reverseFontColor)} />

			<LoginLogoutButton text={t('header.logoutBtn')} isLoading={isLoading} onClick={logoutHandler} />
		</div>
	);
};
