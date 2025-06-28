import { use } from 'react';
import { AuthSubmitTimerContext } from '../context/timer-submit';

export const useAuthSubmitTimer = () => {
	return use(AuthSubmitTimerContext);
};
