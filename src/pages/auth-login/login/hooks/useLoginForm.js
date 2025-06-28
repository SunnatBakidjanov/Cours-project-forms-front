import { useCallback, useReducer } from 'react';
import { useRedirect } from '../../../../hooks/useRedirect';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUser } from '../../../../redux/slices/authSlice';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
	email: '',
	password: '',
	fullname: '',
	errors: '',
	isSuccess: false,
	isLoading: false,
};

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	SET_SUCCESS: 'SET_SUCCESS',
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
		case ACTIONS.SET_SUCCESS:
			return {
				...state,
				error: {},
				email: '',
				password: '',
				successMessage: payload.message,
				fullname: payload.fullname,
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
	const redirect = useRedirect('/form', 2500);
	const reduxDispatch = useDispatch();

	const setField = (field, value) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload: value });
	};

	const handleSubmit = useCallback(async () => {
		dispatch({ type: ACTIONS.LOADING, payload: true });

		try {
			const res = await axios.post(
				`${API_URL}/api/login`,
				{
					email: state.email,
					password: state.password,
				},
				{
					withCredentials: true,
				}
			);

			reduxDispatch(setAccessToken(res.data.accessToken));
			reduxDispatch(setUser(res.data.user));

			dispatch({
				type: ACTIONS.SET_SUCCESS,
				payload: {
					fullname: {
						name: res.data.user.name,
						surname: res.data.user.surname,
					},
					message: res.data.message,
				},
			});

			redirect();

			return { success: true };
		} catch (error) {
			const errors = error.response?.data?.message || '';

			dispatch({ type: ACTIONS.SET_ERROR, payload: errors });

			console.error(error);
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
