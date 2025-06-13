import { DARK_THEME, LIGHT_THEME } from './themeConstants';

export const getCurrentHour = () => {
	const now = new Date();
	const hours = now.getHours();

	const currentHours = hours >= 6 && hours <= 18 ? LIGHT_THEME : DARK_THEME;

	return currentHours;
};
