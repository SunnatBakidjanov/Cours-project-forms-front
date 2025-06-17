import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';

import { Title } from '../../../UI/title/Title';
import { Paragraph } from '../../../UI/paragraph/Paragrph';
import { Button } from '../../../../../UI/button/Button';

import styles from '../../../styles/auth-login-welcome.module.scss';
import classNames from 'classnames';

export const AuthWelcome = () => {
	const { t } = useTranslation();

	const { reverseChangeColor, accentbgColor } = useThemeVar();

	return (
		<div className={classNames(styles.container, accentbgColor)}>
			<Title text={t('authPage.welcomeSide.title')} styleUsePlace="authTitle" className={reverseChangeColor} />

			<Paragraph text={t('authPage.welcomeSide.text')} styleUsePlace="welcomeText" className={reverseChangeColor} />

			<Button text={t('authPage.welcomeSide.button')} className={classNames(styles.button, reverseChangeColor)} />
		</div>
	);
};
