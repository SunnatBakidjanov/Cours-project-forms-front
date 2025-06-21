import { useReducer, use, useCallback } from 'react';
import { changeLanguage } from '../../../../../../UI/translaitor-button/scripts/changeLanguage';
import { ThemeContext } from '../../../../../../components/theme';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
	name: '',
	surname: '',
	email: '',
	password: '',
	repeatPassword: '',
	isLoading: false,
	successfule: false,
	errors: {},
};

const RESENT_TIMER = 2000;

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	SET_ERRORS: 'SET_ERRORS',
	SET_LOADING: 'SET_LOADING',
	SHOW_SUCCESS_MESSAGE: 'SHOW_SUCCESS_MESSAGE',
	CLEAR_FORM: 'CLEAR_FORM',
};

function reducer(state, { type, field, payload }) {
	switch (type) {
		case ACTIONS.SET_FIELD:
			return {
				...state,
				[field]: payload,
			};
		case ACTIONS.SET_ERRORS:
			return {
				...state,
				errors: payload,
			};
		case ACTIONS.SET_LOADING:
			return {
				...state,
				isLoading: payload,
			};
		case ACTIONS.CLEAR_FORM:
			return {
				...initialState,
				successfule: true,
			};
		default:
			return state;
	}
}

export const useAuthFrom = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentLang } = changeLanguage();
	const { isThemeLight } = use(ThemeContext);
	const navigate = useNavigate();

	const setField = (field, value) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload: value });
	};

	const validate = () => {
		const errors = {};
		if (!/\S+@\S+\.\S+/.test(state.email)) {
			errors.email = ['EMAIL_INVALID_FORMAT'];
		}
		if (state.password !== state.repeatPassword) {
			errors.repeatPassword = ['PASSWORDS_DO_NOT_MATCH'];
		}
		return errors;
	};

	const handleSubmit = useCallback(async () => {
		const errors = validate();

		if (Object.keys(errors).length > 0) {
			dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });
			return { success: false };
		}

		dispatch({ type: ACTIONS.SET_LOADING, payload: true });

		try {
			const res = await axios.post(`${API_URL}/api/register`, {
				name: state.name,
				surname: state.surname,
				email: state.email,
				password: state.password,
				lang: currentLang,
				theme: isThemeLight,
			});

			setTimeout(() => {
				navigate('/email-sent', {
					state: {
						name: state.name,
						surname: state.surname,
						email: state.email,
					},
				});
			}, RESENT_TIMER);

			dispatch({ type: ACTIONS.CLEAR_FORM });

			return { success: true };
		} catch (err) {
			const errors = err.response?.data?.errors || {};
			dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });
			return { success: false };
		} finally {
			dispatch({ type: ACTIONS.SET_LOADING, payload: false });
		}
	}, [state, dispatch, navigate, validate, currentLang, isThemeLight]);

	const onSubmit = async e => {
		e.preventDefault();
		await handleSubmit();
	};

	return { state, setField, onSubmit };
};
