import { ThemeContext } from '../../../../components/theme';
import { use } from 'react';

import styles from './title.module.scss';

import { MainTitle } from '../../../../UI/main-title/MainTitle';
import classNames from 'classnames';

export const Title = () => {
	const { isThemeLight } = use(ThemeContext);

	return <MainTitle text="Ведутся технические работы" className={classNames(styles.title, isThemeLight ? styles.textLightTheme : styles.textDarkTheme)} />;
};
