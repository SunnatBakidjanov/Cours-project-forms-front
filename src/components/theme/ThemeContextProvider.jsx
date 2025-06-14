import { useState } from 'react';
import { ThemeContext } from '.';
import { getCurrentHour } from './scripts/getCurrentHour';
import { LIGHT_THEME, DARK_THEME } from './scripts/themeConstants';

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return sessionStorage.getItem('theme') || getCurrentHour();
	});

	const toggleTheme = () => {
		setTheme(currentTheme => {
			const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;

			sessionStorage.setItem('theme', newTheme);

			return newTheme;
		});
	};

	const isThemeLight = theme === LIGHT_THEME;

	return <ThemeContext.Provider value={{ isThemeLight, toggleTheme }}>{children}</ThemeContext.Provider>;
};
