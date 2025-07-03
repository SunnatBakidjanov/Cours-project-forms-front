import { useEffect, useState } from 'react';
import axiosPrivate from '../../../api/axiosPrivate';

export const useAllForms = () => {
	const [forms, setForms] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await axiosPrivate.get('/api/forms');
				setForms(res.data);
			} catch (error) {
				console.error('Ошибка при получении форм:', error);
			}
		})();
	}, []);

	return { forms };
};
