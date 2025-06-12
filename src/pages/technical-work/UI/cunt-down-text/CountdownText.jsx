import { use } from 'react';
import { ThemeContext } from '../../../../components/theme';

import styles from './count-down-text.module.scss';

export const CountdownText = () => {
	const { isThemeLight } = use(ThemeContext);

	return <p className={`${styles.text} ${isThemeLight ? styles.textLightTheme : styles.textDarkTheme}`}>До окончания технически работ осталось</p>;
};
