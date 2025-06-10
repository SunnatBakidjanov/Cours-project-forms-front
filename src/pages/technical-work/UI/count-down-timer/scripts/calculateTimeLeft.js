export const calculateTimeLeft = () => {
	const timeOverDate = 'July 3, 2025 00:00:00';
	const targetDate = new Date(timeOverDate).getTime();

	const now = new Date().getTime();
	const timeLeft = targetDate - now;

	if (timeLeft <= 0) {
		return null;
	}

	return {
		days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
		hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
	};
};
