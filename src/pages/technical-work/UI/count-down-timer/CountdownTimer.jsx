import { useTimeLeft } from './hooks/useTimeLeft';

import { calculateTimeLeft } from './scripts/calculateTimeLeft';

import style from './count-down-timer.module.scss';

export const CountdownTimer = () => {
	const { timeLeft } = useTimeLeft(calculateTimeLeft);

	return (
		<div className={style.wrapper}>
			<p className={style.text}>До окончания технически работ осталось</p>

			{timeLeft ? (
				<p className={style.textTimerOver}>
					{timeLeft.days} Д : {timeLeft.hours} Ч : {timeLeft.minutes} М : {timeLeft.seconds} С
				</p>
			) : (
				<p className={style.textTimerOver}>Еще немного...</p>
			)}
		</div>
	);
};
