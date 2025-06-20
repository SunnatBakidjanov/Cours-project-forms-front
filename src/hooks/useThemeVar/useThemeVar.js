import { ThemeContext } from '../../components/theme';
import { use } from 'react';

import styles from './theme-var.module.scss';
import loginAuthStyles from './login-auth-page.module.scss';

export const useThemeVar = () => {
	const { isThemeLight } = use(ThemeContext);

	const root = {
		fontColor: isThemeLight ? styles.colorLightTheme : styles.colorDarkTheme,
		reverseFontColor: isThemeLight ? styles.colorDarkTheme : styles.colorLightTheme,
		bgColor: isThemeLight ? styles.bgColorLightTheme : styles.bgColorDarkTheme,
		reverseBgColor: isThemeLight ? styles.bgColorDarkTheme : styles.bgColorLightTheme,
		toolbarBtnBgColor: isThemeLight ? styles.toolbarBtnBgLightTheme : styles.toolbarBtnBgDarkTheme,
	};

	const loginAuthPage = {
		bgColor: isThemeLight ? loginAuthStyles.bgLight : loginAuthStyles.bgDark,
		formBtnBgColor: isThemeLight ? loginAuthStyles.formBtnBgColorLightTheme : loginAuthStyles.formBtnBgColorDarkTheme,
		btnLinkColor: isThemeLight ? loginAuthStyles.btnLinkColorLightTheme : loginAuthStyles.btnLinkColorDarkTheme,
		btnLinkUnderlineBgColor: isThemeLight ? loginAuthStyles.btnLinkUnderLineBgColorLithTheme : loginAuthStyles.btnLinkUnderLineBgColorDarkTheme,
		formBoxShadow: isThemeLight ? loginAuthStyles.formBoxShadowLightTheme : loginAuthStyles.formBoxShadowDarkTheme,
		errorMessages: isThemeLight ? loginAuthStyles.errorsMessagesLigthTheme : loginAuthStyles.errorsMessagesDarkTheme,
		submitLoader: isThemeLight ? loginAuthStyles.submitBtnLoaderBorderTopColorLigthTheme : loginAuthStyles.submitBtnLoaderBorderTopColorDarkTheme,
	};

	return { root, loginAuthPage };
};
