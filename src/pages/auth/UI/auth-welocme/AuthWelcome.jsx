import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { Title } from '../title/Title';
import { Paragraph } from '../paragraph/Paragrph';

import styles from './auth-welcome.module.scss';
import classNames from 'classnames';
import { Button } from '../../../../UI/button/Button';

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
