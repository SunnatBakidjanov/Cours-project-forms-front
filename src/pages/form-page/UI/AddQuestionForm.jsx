import { useState } from 'react';
import axiosPrivate from '../../../api/axiosPrivate';

export const AddQuestionForm = ({ templateId, onAdd }) => {
	const [type, setType] = useState('shortText');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await axiosPrivate.post('/api/questions', {
				template_id: templateId,
				type,
				title,
				description,
			});
			setTitle('');
			setDescription('');
			setType('shortText');
			if (onAdd) onAdd();
		} catch (err) {
			alert(err.response?.data?.message || 'Ошибка при добавлении');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mb-4">
			<div className="mb-2">
				<label className="form-label">Тип вопроса</label>
				<select className="form-select" value={type} onChange={e => setType(e.target.value)}>
					<option value="shortText">Короткий текст</option>
					<option value="longText">Длинный текст</option>
					<option value="number">Число</option>
					<option value="checkbox">Флажок</option>
				</select>
			</div>
			<div className="mb-2">
				<label className="form-label">Заголовок</label>
				<input className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
			</div>
			<div className="mb-3">
				<label className="form-label">Описание</label>
				<textarea className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
			</div>
			<button className="btn btn-success" type="submit">
				Добавить вопрос
			</button>
		</form>
	);
};
