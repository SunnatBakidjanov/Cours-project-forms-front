import { useCallback, useEffect, useRef, useState } from 'react';
import { AuthSubmitTimerContext } from './index';

export const AuthSubmitTimerProvider = ({ children }) => {
	const TIMER_DURATION = 60;
	const SESSION_KEY = 'register-btn';

	const [timer, setTimer] = useState(0);
	const [isActive, setActive] = useState(false);
	const intervalRef = useRef(null);

	const start = useCallback(() => {
		if (isActive) return;

		const expireAt = Date.now() + TIMER_DURATION * 1000;
		localStorage.setItem(SESSION_KEY, expireAt);

		setTimer(TIMER_DURATION);
		setActive(true);
	}, [isActive]);

	useEffect(() => {
		const savedExpireAt = localStorage.getItem(SESSION_KEY);

		if (savedExpireAt) {
			const expireAt = savedExpireAt;
			const diff = Math.ceil((expireAt - Date.now()) / 1000);
			if (diff > 0) {
				setTimer(diff);
				setActive(true);
			} else {
				localStorage.removeItem(SESSION_KEY);
			}
		}
	}, []);

	useEffect(() => {
		if (!isActive) return;

		intervalRef.current = setInterval(() => {
			setTimer(prev => {
				if (prev <= 1) {
					clearInterval(intervalRef.current);
					setActive(false);
					localStorage.removeItem(SESSION_KEY);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(intervalRef.current);
	}, [isActive]);

	return <AuthSubmitTimerContext.Provider value={{ timer, isActive, start }}>{children}</AuthSubmitTimerContext.Provider>;
};
