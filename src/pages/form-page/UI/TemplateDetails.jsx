import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import axiosPrivate from '../../../api/axiosPrivate';
import DOMPurify from 'dompurify';
import Markdown from 'react-markdown';
import { AddQuestionForm } from './AddQuestionForm';

export const TemplateDetails = () => {
	const { id } = useParams();
	const [template, setTemplate] = useState(null);
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const API_URL = import.meta.env.VITE_API_URL;

	const fetchData = useCallback(async () => {
		try {
			const [templateRes, questionsRes] = await Promise.all([axiosPrivate.get(`${API_URL}/api/templates/${id}`), axiosPrivate.get(`${API_URL}/api/questions/${id}`)]);
			setTemplate(templateRes.data);
			setQuestions(questionsRes.data);
		} catch (err) {
			setError(err.response?.data?.message || 'Ошибка при загрузке');
		} finally {
			setLoading(false);
		}
	}, [API_URL, id]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleDelete = async questionId => {
		if (!confirm('Удалить вопрос?')) return;
		try {
			await axiosPrivate.delete(`${API_URL}/api/questions/${questionId}`);
			setQuestions(prev => prev.filter(q => q.id !== questionId));
		} catch (err) {
			alert('Ошибка при удалении вопроса');
		}
	};

	if (loading) return <div className="container mt-4">Загрузка...</div>;
	if (error) return <div className="container mt-4 text-danger">{error}</div>;
	if (!template) return null;

	return (
		<div className="container mt-4">
			<h2>{template.title}</h2>
			<p className="text-muted">Тема: {template.theme}</p>

			{template.imageUrl && (
				<div className="mb-3">
					<img src={template.imageUrl} alt="template" style={{ maxWidth: '100%', maxHeight: 300 }} className="rounded shadow" />
				</div>
			)}

			<div className="mb-4">
				<h5>Описание:</h5>
				<div className="border rounded p-3 bg-light">
					<Markdown>{DOMPurify.sanitize(template.description || '')}</Markdown>
				</div>
			</div>

			<AddQuestionForm templateId={id} onAdd={fetchData} />

			<div className="mb-4">
				<h5>Вопросы:</h5>
				{questions.length === 0 ? (
					<p className="text-muted">Нет вопросов в этом шаблоне.</p>
				) : (
					<ul className="list-group">
						{questions.map(q => (
							<li key={q.id} className="list-group-item d-flex justify-content-between align-items-start">
								<div>
									<div className="fw-bold">{q.title}</div>
									<small className="text-muted">{q.description}</small>
									<br />
									<span className="badge bg-secondary">{q.type}</span>
								</div>
								<button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(q.id)}>
									Удалить
								</button>
							</li>
						))}
					</ul>
				)}
			</div>

			<div>
				<p>Автор: {template.User?.name || 'Неизвестен'}</p>
				<p>Публичный: {template.isPublic ? 'Да' : 'Нет'}</p>
			</div>

			<hr />
		</div>
	);
};
