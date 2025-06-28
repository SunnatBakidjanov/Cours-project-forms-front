import { useReducer, useCallback, use } from 'react';
import { changeLanguage } from '../../../../UI/translaitor-button/scripts/changeLanguage';
import { ThemeContext } from '../../../../context/theme';
import { useRedirect } from '../../../../hooks/useRedirect';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const ACTIONS = {
	SET_LOADING: 'SET_LOADING',
	SET_ERROR: 'SET_ERROR',
	RESET_ERROR: 'RESET_ERROR',
	SET_SUCCESS: 'SET_SUCCESS',
};

const initialState = {
	isLoading: false,
	errors: '',
	isSuccess: false,
	successMessage: '',
};

function reducer(state, { type, payload }) {
	switch (type) {
		case ACTIONS.SET_LOADING:
			return { ...state, isLoading: payload };
		case ACTIONS.SET_SUCCESS:
			return { ...state, isSuccess: payload.state, successMessage: payload.message };
		case ACTIONS.SET_ERROR:
			return { ...state, errors: payload };
		default:
			return state;
	}
}

export const useResendMail = email => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentLang } = changeLanguage();
	const { isThemeLight } = use(ThemeContext);
	const redirect = useRedirect('/login', 3000);

	const handleResend = useCallback(async () => {
		dispatch({ type: ACTIONS.SET_ERROR, payload: '' });
		dispatch({ type: ACTIONS.SET_LOADING, payload: true });
		dispatch({ type: ACTIONS.SET_SUCCESS, payload: false });

		try {
			const res = await axios.post(`${API_URL}/api/resend-verification-email`, {
				email,
				lang: currentLang,
				theme: isThemeLight,
			});

			dispatch({
				type: ACTIONS.SET_SUCCESS,
				payload: {
					state: true,
					message: res.data.message,
				},
			});
		} catch (error) {
			const errors = error?.response?.data?.message || '';
			if (errors === 'USER_STATUS_ACTIVE') redirect();

			console.error(error);
			dispatch({ type: ACTIONS.SET_SUCCESS, payload: false });
			dispatch({ type: ACTIONS.SET_ERROR, payload: errors });
		} finally {
			dispatch({ type: ACTIONS.SET_LOADING, payload: false });
		}
	}, [email, currentLang, isThemeLight, dispatch]);

	return {
		state,
		handleResend,
	};
};
