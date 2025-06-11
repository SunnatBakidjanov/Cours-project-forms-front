import { useTimeLeft } from './hooks/useTimeLeft';

import { calculateTimeLeft } from './scripts/calculateTimeLeft';

import styles from './count-down-timer.module.scss';

export const CountdownTimer = () => {
	const { timeLeft } = useTimeLeft(calculateTimeLeft);

	return (
		<div className={styles.wrapper}>
			{timeLeft ? (
				<p className={styles.text}>
					{timeLeft.days} Д : {timeLeft.hours} Ч : {timeLeft.minutes} М : {timeLeft.seconds} С
				</p>
			) : (
				<p className={styles.textTimerOver}>Еще немного...</p>
			)}
		</div>
	);
};
