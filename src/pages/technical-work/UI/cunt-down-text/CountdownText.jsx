import { use } from 'react';
import { ThemeContext } from '../../../../components/theme';
import { useTranslation } from 'react-i18next';

import styles from './count-down-text.module.scss';

export const CountdownText = () => {
	const { isThemeLight } = use(ThemeContext);
	const { t } = useTranslation();

	return <p className={`${styles.text} ${isThemeLight ? styles.textLightTheme : styles.textDarkTheme}`}>{t('technikalWorkPage.countDownText')}</p>;
};
