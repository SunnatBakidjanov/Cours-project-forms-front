import { useState, useEffect, useRef, useCallback } from 'react';

export const useTimer = () => {
	const [timer, setTimer] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const intervalRef = useRef(null);

	const TIMER_DILAY = 60;
	const SESSION_KEY = 'timer-expire-at';

	useEffect(() => {
		const savedExpireAt = sessionStorage.getItem(SESSION_KEY);

		if (savedExpireAt) {
			const expireAt = Number(savedExpireAt);
			const diff = Math.max(0, Math.ceil((expireAt - Date.now()) / 1000));

			if (diff > 0) {
				setTimer(diff);
				setIsActive(true);
			}
		}
	}, []);

	const start = useCallback(() => {
		const expireAt = Date.now() + TIMER_DILAY * 1000;
		sessionStorage.setItem(SESSION_KEY, expireAt);
		setTimer(TIMER_DILAY);
		setIsActive(true);
	}, []);

	useEffect(() => {
		if (!isActive) return;

		intervalRef.current = setInterval(() => {
			setTimer(prev => {
				if (prev <= 1) {
					clearInterval(intervalRef.current);
					sessionStorage.removeItem(SESSION_KEY);
					setIsActive(false);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(intervalRef.current);
	}, [isActive]);

	return {
		timer,
		isActive,
		start,
	};
};
