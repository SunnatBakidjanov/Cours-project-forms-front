import { useState } from 'react';

export const useDisable = () => {
	const [isDisabled, setDisable] = useState(false);
	const DISABLE_DILAY = 520;

	const handleDisableonClick = () => {
		if (isDisabled) return;

		setDisable(true);

		setTimeout(() => {
			setDisable(false);
		}, DISABLE_DILAY);
	};

	return { handleDisableonClick, isDisabled };
};
