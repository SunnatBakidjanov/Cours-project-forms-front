import { useState, useRef } from 'react';

export const useShowPassword = () => {
	const [showPassword, setShowPassword] = useState(false);
	const hidePasswordDelay = 5000;
	const timeoutRef = useRef(null);

	const togglePassword = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		setShowPassword(prev => {
			const newState = !prev;

			if (newState) {
				timeoutRef.current = setTimeout(() => {
					setShowPassword(false);
				}, hidePasswordDelay);
			}

			return newState;
		});
	};

	return { showPassword, togglePassword };
};
