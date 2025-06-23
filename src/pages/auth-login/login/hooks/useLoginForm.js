import { useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
	email: '',
	password: '',
	errors: {},
	isLoading: false,
};

const RESENT_TIMER = 2000;

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	CLEAR_FORM: 'CLEAR_FORM',
	LOADING: 'LOADING',
	SET_ERROR: 'SET_ERROR',
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
		case ACTIONS.SET_ERROR:
			return {
				...state,
				errors: payload,
			};
		case ACTIONS.LOADING: {
			return {
				...state,
				isLoading: payload,
			};
		}
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
			navigate('/form', {
				state: {
					name: state.name,
					surname: state.surname,
					email: state.email,
				},
			});
		}, RESENT_TIMER);
	};

	const handleSubmit = useCallback(async () => {
		dispatch({ type: ACTIONS.LOADING, payload: true });

		try {
			const res = await axios.post(`${API_URL}/api/login`, {
				email: state.email,
				password: state.password,
			});

			redirect();

			dispatch({ type: ACTIONS.CLEAR_FORM });

			return { success: true };
		} catch (err) {
			const errors = err.response?.data?.errors || {};

			dispatch({ type: ACTIONS.SET_ERROR, payload: errors });

			console.log(errors);

			console.error(err);
			return { success: false };
		} finally {
			dispatch({ type: ACTIONS.LOADING, payload: false });
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
