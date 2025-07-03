import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDataSaveText } from '../../../redux/slices/createFormSlice';
import { useDisable } from '../../../hooks/useDisable';
import axiosPrivate from '../../../api/axiosPrivate';

const API_URL = import.meta.env.VITE_API_URL;

export const useQuestions = () => {
	const { isDisabled, handleDisableonClick } = useDisable();
	const [questions, setQuestions] = useState([]);
	const [pendingUpdate, setPendingUpdate] = useState(null);
	const timerRef = useRef();
	const { key } = useParams();
	const reduxDispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const res = await axiosPrivate.get(`${API_URL}/api/form/${key}/questions`);
				setQuestions(res.data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [key]);

	const addQuestion = async () => {
		reduxDispatch(setDataSaveText(true));

		try {
			const res = await axiosPrivate.post(`${API_URL}/api/form/${key}/questions`, {
				text: '',
			});
			setQuestions(prev => [...prev, res.data]);
		} catch (error) {
			console.error(error);
		} finally {
			reduxDispatch(setDataSaveText(false));
		}
	};

	const updateQuestion = (id, value) => {
		setQuestions(prev => prev.map(q => (q.id === id ? { ...q, text: value } : q)));
		setPendingUpdate({ id, value });
	};

	useEffect(() => {
		if (!pendingUpdate) return;

		clearTimeout(timerRef.current);

		timerRef.current = setTimeout(async () => {
			const { id, value } = pendingUpdate;
			reduxDispatch(setDataSaveText(true));

			try {
				await axiosPrivate.patch(`${API_URL}/api/questions/${id}`, { text: value });
			} catch (error) {
				console.error('Ошибка при обновлении вопроса:', error);
			} finally {
				reduxDispatch(setDataSaveText(false));
			}

			setPendingUpdate(null);
		}, 1000);

		return () => {
			clearTimeout(timerRef.current);
		};
	}, [pendingUpdate]);

	const removeQuestion = async id => {
		reduxDispatch(setDataSaveText(true));

		try {
			setQuestions(prev => prev.filter(q => q.id !== id));
			await axiosPrivate.delete(`${API_URL}/api/questions/${id}`);
		} catch (error) {
			console.error(error);
		} finally {
			reduxDispatch(setDataSaveText(false));
		}
	};

	return { questions, addQuestion, updateQuestion, removeQuestion };
};
