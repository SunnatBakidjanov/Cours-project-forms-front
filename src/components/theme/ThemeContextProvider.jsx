import { useState } from 'react';
import { ThemeContext } from '.';
import { getCurrentHour } from './scripts/getCurrentHour';
import { LIGHT_THEME, DARK_THEME } from './scripts/themeConstants';

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => getCurrentHour());

	const toggleTheme = () => {
		setTheme(currentTheme => (currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
	};

	const isThemeLight = theme === LIGHT_THEME;

	return <ThemeContext.Provider value={{ isThemeLight: isThemeLight, toggleTheme }}>{children}</ThemeContext.Provider>;
};
