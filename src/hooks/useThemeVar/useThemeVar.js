import { ThemeContext } from '../../components/theme';
import { use } from 'react';

import styles from './theme-var.module.scss';

export const useThemeVar = () => {
	const { isThemeLight } = use(ThemeContext);

	return {
		changeColor: isThemeLight ? styles.colorLightTheme : styles.colorDarkTheme,
		reverseChangeColor: isThemeLight ? styles.colorDarkTheme : styles.colorLightTheme,
		bgBtnColor: isThemeLight ? styles.bgBtnColorLightTheme : styles.bgBtnColorDarkTheme,
		mainBgColor: isThemeLight ? styles.mainBgLigthTheme : styles.mainBgDarkTheme,
		accentbgColor: isThemeLight ? styles.accentBgLightTheme : styles.accentBgDarkTheme,
		boxShadow: isThemeLight ? styles.boxShadowLightTheme : styles.boxShadowDarkTheme,
	};
};
