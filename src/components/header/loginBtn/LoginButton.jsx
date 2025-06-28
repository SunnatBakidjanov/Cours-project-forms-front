import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from '../../../UI/button/Button';

export const LoginButton = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return <Button text={t('header.loginBtn')} onClick={navigate('/login')} />;
};
