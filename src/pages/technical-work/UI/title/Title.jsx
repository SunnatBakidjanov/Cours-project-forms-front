import { use } from 'react';
import { ThemeContext } from '../../../../components/theme';
import { useTranslation } from 'react-i18next';

import { MainTitle } from '../../../../UI/main-title/MainTitle';

import classNames from 'classnames';
import styles from './title.module.scss';

export const Title = () => {
	const { isThemeLight } = use(ThemeContext);
	const { t } = useTranslation();

	return <MainTitle text={t('technikalWorkPage.title')} className={classNames(styles.title, isThemeLight ? styles.textLightTheme : styles.textDarkTheme)} />;
};
