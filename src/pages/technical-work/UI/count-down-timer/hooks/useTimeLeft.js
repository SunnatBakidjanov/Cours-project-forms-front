import { useState, useEffect } from 'react';

export const useTimeLeft = calculateTimeLeftFn => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeftFn());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeftFn());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return { timeLeft };
};
