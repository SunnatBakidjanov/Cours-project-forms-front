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
};

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
};

function reducer(state, { type, field, payload }) {
	switch (type) {
		case ACTIONS.SET_FIELD:
			return {
				...state,
				[field]: payload,
			};
	}
}

export const useAuthFrom = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { currentLang } = changeLanguage();
	const { isThemeLight } = use(ThemeContext);

	console.log(isThemeLight);

	const setField = (field, value) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload: value });
	};

	const validate = () => {
		const errors = {};
		if (!/\S+@\S+\.\S+/.test(state.email)) errors.email = 'Invalid email format';
		if (state.password.length < 6) errors.password = 'Invalid password';
		if (state.password !== state.repeatPassword) errors.repeatPassword = 'Passwords do not match';

		return errors;
	};

	const handleSubmit = async () => {
		const errors = validate();

		if (Object.keys(errors).length > 0) {
			return { success: false };
		}

		try {
			const res = await axios.post(`${API_URL}/api/register`, {
				name: state.name,
				surname: state.surname,
				email: state.email,
				password: state.password,
				lang: currentLang,
				theme: isThemeLight,
			});

			return { success: true, message: res.data.message };
		} catch (err) {
			return { success: false };
		}
	};

	const onSubmit = async e => {
		e.preventDefault();
		await handleSubmit();
	};

	return { state, setField, onSubmit };
};
