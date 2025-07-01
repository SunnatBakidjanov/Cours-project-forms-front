import { useState } from 'react';
import axiosPrivate from '../../../../api/axiosPrivate';
import { useNavigate } from 'react-router-dom';

const APP_URL = import.meta.env.VITE_API_URL;

export const TemplateForm = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		title: '',
		description: '',
		theme: 'Other',
		isPublic: true,
	});

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = e => {
		const { name, value, type, checked } = e.target;
		setForm(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const res = await axiosPrivate.post(`${APP_URL}/api/templates`, form);
			navigate(`/template/${res.data.id}`);
		} catch (err) {
			setError(err.response?.data?.message || 'Ошибка при создании шаблона');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mt-4">
			<h2>Создать шаблон</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label className="form-label">Название</label>
					<input type="text" name="title" className="form-control" value={form.title} onChange={handleChange} required />
				</div>

				<div className="mb-3">
					<label className="form-label">Описание (Markdown)</label>
					<textarea name="description" className="form-control" value={form.description} onChange={handleChange} />
				</div>

				<div className="mb-3">
					<label className="form-label">Тема</label>
					<select name="theme" className="form-select" value={form.theme} onChange={handleChange}>
						<option value="Education">Образование</option>
						<option value="Poll">Опрос</option>
						<option value="Other">Другое</option>
					</select>
				</div>

				<div className="form-check mb-3">
					<input type="checkbox" name="isPublic" className="form-check-input" checked={form.isPublic} onChange={handleChange} />
					<label className="form-check-label">Публичный шаблон</label>
				</div>

				{error && <div className="alert alert-danger">{error}</div>}

				<button className="btn btn-primary" disabled={loading}>
					{loading ? 'Создание...' : 'Создать'}
				</button>
			</form>
		</div>
	);
};
