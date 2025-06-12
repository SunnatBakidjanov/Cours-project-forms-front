import { useState } from 'react';
import { ThemeContext } from '.';

export const ThemeContextProvider = ({ children }) => {
	const lightTheme = 'lightTheme';
	const darkTheme = 'darkTheme';
	const [theme, setTheme] = useState(lightTheme);

	const toggleTheme = () => {
		setTheme(currentTheme => (currentTheme === lightTheme ? darkTheme : lightTheme));
	};

	const isThemeLight = theme === lightTheme;

	return <ThemeContext.Provider value={{ isThemeLight: isThemeLight, toggleTheme }}>{children}</ThemeContext.Provider>;
};
