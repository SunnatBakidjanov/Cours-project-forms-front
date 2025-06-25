import { useReducer, use, useCallback } from 'react';
import { changeLanguage } from '../../../../UI/translaitor-button/scripts/changeLanguage';
import { ThemeContext } from '../../../../components/theme';
import { useRedirect } from '../../../../hooks/useRedirect';
import { validateForm } from '../scripts/validateForm';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
	name: '',
	surname: '',
	email: '',
	password: '',
	repeatPassword: '',
	isLoading: false,
	successful: {},
	errors: {},
};

const RESENT_TIMER = 2500;

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	SET_ERRORS: 'SET_ERRORS',
	SET_UNHANDLED_ERROR: 'SET_UNHANDLED_ERROR',
	SET_LOADING: 'SET_LOADING',
	SET_SUCCESSFUL: 'SET_SUCCESSFUL',
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
		case ACTIONS.SET_SUCCESSFUL:
			return {
				...state,
				successful: payload,
			};
		case ACTIONS.SET_LOADING:
			return {
				...state,
				isLoading: payload,
			};
		case ACTIONS.CLEAR_FORM:
			return {
				...state,
				name: '',
				surname: '',
				email: '',
				password: '',
				repeatPassword: '',
				errors: {},
			};
		default:
			return state;
	}
}

export const useAuthFrom = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentLang } = changeLanguage();
	const { isThemeLight } = use(ThemeContext);
	const redirect = useRedirect('/email-sent');

	const setField = (field, value) => {
		dispatch({ type: ACTIONS.SET_ERRORS, payload: {} });
		dispatch({ type: ACTIONS.SET_UNHANDLED_ERROR, payload: false });
		dispatch({ type: ACTIONS.SET_FIELD, field, payload: value });
	};

	const handleSubmit = useCallback(async () => {
		const errors = validateForm(state);

		if (Object.keys(errors).length > 0) {
			dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });
			return { success: false };
		}

		redirect({
			name: state.name,
			surname: state.surname,
			email: state.email,
		});

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

			dispatch({ type: ACTIONS.SET_SUCCESSFUL, payload: res?.data?.successful || {} });
			dispatch({ type: ACTIONS.CLEAR_FORM });

			return { success: true };
		} catch (err) {
			const errors = err.response?.data?.message || {};

			dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });

			return { success: false };
		} finally {
			dispatch({ type: ACTIONS.SET_LOADING, payload: false });
		}
	}, [state, dispatch, redirect, currentLang, isThemeLight]);

	const onSubmit = async e => {
		e.preventDefault();
		await handleSubmit();
	};

	return { state, setField, onSubmit };
};
