import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Profile } from '../profile/Profile';
import { LoginLogoutButton } from '../loginBtn/LoginLogoutButton';

export const LoginProfile = () => {
	const accessToken = useSelector(state => state.auth.accessToken);
	const { t } = useTranslation();

	return accessToken ? <Profile /> : <LoginLogoutButton text={t('header.loginBtn')} />;
};
