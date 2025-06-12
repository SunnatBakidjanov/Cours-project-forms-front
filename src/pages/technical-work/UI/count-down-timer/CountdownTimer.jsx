import { use } from 'react';
import { useTimeLeft } from './hooks/useTimeLeft';
import { ThemeContext } from '../../../../components/theme';

import { calculateTimeLeft } from './scripts/calculateTimeLeft';

import styles from './count-down-timer.module.scss';

export const CountdownTimer = () => {
	const { timeLeft } = useTimeLeft(calculateTimeLeft);
	const { isThemeLight } = use(ThemeContext);

	return (
		<>
			{timeLeft ? (
				<p className={`${styles.text} ${isThemeLight ? styles.textLightTheme : styles.textDarkTheme}`}>
					{timeLeft.days} Д : {timeLeft.hours} Ч : {timeLeft.minutes} М : {timeLeft.seconds} С
				</p>
			) : (
				<p className={`${styles.text} ${isThemeLight ? styles.lightTheme : styles.darkTheme}`}>Еще немного...</p>
			)}
		</>
	);
};
