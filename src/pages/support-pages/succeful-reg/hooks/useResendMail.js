import { useReducer, useCallback } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const ACTIONS = {
	SET_LOADING: 'SET_LOADING',
	SET_ERROR: 'SET_ERROR',
	RESET_ERROR: 'RESET_ERROR',
};

const initialState = {
	isLoading: false,
	isError: false,
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.SET_LOADING:
			return { ...state, isLoading: action.payload };
		case ACTIONS.SET_ERROR:
			return { ...state, isError: action.payload };
		case ACTIONS.RESET_ERROR:
			return { ...state, isError: false };
		default:
			return state;
	}
}

export const useResendMail = email => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleResend = useCallback(async () => {
		dispatch({ type: ACTIONS.RESET_ERROR });
		dispatch({ type: ACTIONS.SET_LOADING, payload: true });

		try {
			await axios.post(`${API_URL}/api/resend-verification`, { email });
		} catch (err) {
			console.error(err);
			dispatch({ type: ACTIONS.SET_ERROR, payload: true });
		} finally {
			dispatch({ type: ACTIONS.SET_LOADING, payload: false });
		}
	}, [email]);

	return {
		state,
		handleResend,
	};
};
