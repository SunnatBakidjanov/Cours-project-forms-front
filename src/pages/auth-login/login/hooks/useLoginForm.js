import { useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
	email: '',
	password: '',
};

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	CLEAR_FORM: 'CLEAR_FORM',
};

const reducer = (state, { type, field, payload }) => {
	switch (type) {
		case ACTIONS.SET_FIELD:
			return {
				...state,
				[field]: payload,
			};
		case ACTIONS.CLEAR_FORM:
			return {
				...initialState,
			};
		default:
			return state;
	}
};

export const useLoginForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const navigate = useNavigate();

	const setField = (field, value) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload: value });
	};

	const redirect = () => {
		return setTimeout(() => {
			navigate('/technical-work', {
				state: {
					name: state.name,
					surname: state.surname,
					email: state.email,
				},
			});
		}, RESENT_TIMER);
	};

	const handleSubmit = useCallback(async () => {
		try {
			const res = await axios.post(`${API_URL}/api/login`, {
				email: state.email,
				password: state.password,
			});

			console.log(res.data.id);
			console.log(res.data.accessToken);
			console.log(res.data.refreshToken);
			console.log(res.data.name);
			console.log(res.data.surname);
			console.log(res.data.email);

			dispatch({ type: ACTIONS.CLEAR_FORM });

			redirect();

			return { success: true };
		} catch (err) {
			console.error(err);
			return { success: false };
		}
	}, [state, dispatch]);

	const onSubmit = async e => {
		e.preventDefault();
		await handleSubmit();
	};

	return {
		state,
		setField,
		onSubmit,
	};
};
