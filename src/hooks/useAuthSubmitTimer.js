import { use } from 'react';
import { AuthSubmitTimerContext } from '../components/timer-submit';

export const useAuthSubmitTimer = () => {
	return use(AuthSubmitTimerContext);
};
