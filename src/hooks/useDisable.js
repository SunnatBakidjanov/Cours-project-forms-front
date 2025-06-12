import { useState } from 'react';

export const useDisable = (disabledTime = 400) => {
	const [isDisabled, setDisable] = useState(false);

	const handleDisableonClick = () => {
		if (isDisabled) return;

		setDisable(true);

		setTimeout(() => {
			setDisable(false);
		}, disabledTime);
	};

	return { handleDisableonClick, isDisabled };
};
