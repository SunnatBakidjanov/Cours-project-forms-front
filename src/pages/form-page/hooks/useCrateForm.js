import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axiosPrivate from '../../../api/axiosPrivate';

const API_URL = import.meta.env.VITE_API_URL;

export const useCreateForm = () => {
	const navigate = useNavigate();
	const [isLoading, setLoading] = useState(false);

	const handleCreate = async () => {
		setLoading(true);

		try {
			const res = await axiosPrivate.post(`${API_URL}/api/create-form`);

			const form = res.data;

			navigate(`/form/${form.key}`);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return { handleCreate, isLoading };
};
