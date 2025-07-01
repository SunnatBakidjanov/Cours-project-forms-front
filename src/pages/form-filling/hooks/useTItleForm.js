import { useEffect, useReducer, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axiosPrivate from '../../../api/axiosPrivate';

const API_URL = import.meta.env.VITE_API_URL;

const TIMERS = {
	TITLE_EMPTY_DILAY: 500,
	CHANGE_SAVE_DILAY: 1000,
};

const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	SET_ERROR: 'SET_ERROR',
	SET_FORM: 'SET_FORM',
	SET_TITLE: 'SET_TITLE',
};

const initialState = {
	title: '',
	description: '',
	error: '',
	isTitle: false,
	isPublic: false,
};

const reducer = (state, { type, field, payload }) => {
	switch (type) {
		case ACTIONS.SET_FIELD:
			return {
				...state,
				[field]: payload,
			};
		case ACTIONS.SET_ERROR:
			return {
				...state,
				error: payload,
			};

		case ACTIONS.SET_FORM:
			return {
				...state,
				title: payload.title,
				description: payload.description,
				isPublic: payload.isPublic,
				isTitle: payload.isTitle,
			};
		case ACTIONS.SET_TITLE:
			return {
				...state,
				title: payload,
			};
		default:
			return state;
	}
};

export const useTitleForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { key } = useParams();
	const timerRef = useRef(null);
	const emptyTitleTimerRef = useRef(null);
	const prevLangRef = useRef();
	const { t, i18n } = useTranslation();

	const setField = (field, value) => {
		dispatch({ type: ACTIONS.SET_FIELD, field, payload: value });
	};

	const handleSubmit = async () => {
		try {
			await axiosPrivate.patch(`${API_URL}/api/forms/${key}`, {
				title: state.title,
				description: state.description,
			});
		} catch (error) {
			dispatch({ type: ACTIONS.SET_ERROR, payload: error?.response?.data?.message });
		}
	};

	useEffect(() => {
		const currentLang = i18n.language;
		const prevLang = prevLangRef.current;
		const prevT = i18n.getFixedT(prevLang);

		if (prevLang && state.title === prevT('fillingFormPage.title-form.title')) {
			dispatch({
				type: ACTIONS.SET_TITLE,
				payload: t('fillingFormPage.title-form.title'),
			});
		}

		prevLangRef.current = currentLang;
	}, [i18n.language]);

	useEffect(() => {
		if (state.isTitle && state.title === '') {
			emptyTitleTimerRef.current = setTimeout(() => {
				console.log('work?');

				dispatch({ type: ACTIONS.SET_TITLE, payload: t('fillingFormPage.title-form.title') });
			}, TIMERS.TITLE_EMPTY_DILAY);
		}

		clearTimeout(timerRef.current);

		timerRef.current = setTimeout(() => {
			handleSubmit();
		}, TIMERS.CHANGE_SAVE_DILAY);

		return () => {
			clearTimeout(timerRef.current);
		};
	}, [state.title, state.description, state.isTitle]);

	useEffect(() => {
		(async () => {
			try {
				const res = await axiosPrivate.get(`${API_URL}/api/forms/${key}`);
				dispatch({
					type: ACTIONS.SET_FORM,
					payload: {
						title: res?.data?.title || t('fillingFormPage.title-form.title'),
						description: res?.data?.description,
						isPublic: res?.data?.isPublic,
						isTitle: true,
					},
				});
			} catch (error) {
				dispatch({ type: ACTIONS.SET_ERROR, payload: error?.response?.data?.message });
			}
		})();
	}, []);

	return { state, setField };
};
