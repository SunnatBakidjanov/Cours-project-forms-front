import { useReducer, use } from 'react';
import { changeLanguage } from '../../../../../../UI/translaitor-button/scripts/changeLanguage';
import { ThemeContext } from '../../../../../../components/theme';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
	name: '',
	surname: '',
	email: '',
	password: '',
	repeatPassword: '',
	isLoading: false,
	errors: {},
};

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	SET_ERRORS: 'SET_ERRORS',
	SET_LOADING: 'SET_LOADING',
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
			};
		default:
			return state;
	}
}

export const useAuthFrom = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentLang } = changeLanguage();
	const { isThemeLight } = use(ThemeContext);

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

	const handleSubmit = async () => {
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

			dispatch({ type: ACTIONS.CLEAR_FORM });

			return { success: true };
		} catch (err) {
			const errors = err.response?.data?.errors || {};
			dispatch({ type: ACTIONS.SET_ERRORS, payload: errors });
			return { success: false };
		} finally {
			dispatch({ type: ACTIONS.SET_LOADING, payload: false });
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		await handleSubmit();
	};

	return { state, setField, onSubmit };
};
