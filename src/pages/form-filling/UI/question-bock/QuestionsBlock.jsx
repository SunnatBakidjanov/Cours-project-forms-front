import { useTranslation } from 'react-i18next';
import { Button } from '../../../../UI/button/Button';
import { useQuestions } from '../../hooks/useQustions';
import { QuestionItem } from '../question-item/QuestionItem';
import styles from './questions-block.module.scss';
import classNames from 'classnames';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

export const QuestionsBlock = () => {
	const { questions, addQuestion, updateQuestion, removeQuestion } = useQuestions();
	const { t } = useTranslation();
	const { root } = useThemeVar();

	return (
		<section className={classNames(styles.section)}>
			<div className={classNames(styles.wrapper)}>
				<h2 className={classNames(styles.title)}>Вопросы</h2>
				{questions.map(q => (
					<QuestionItem key={q.id} question={q} onChange={value => updateQuestion(q.id, value)} onDelete={() => removeQuestion(q.id)} />
				))}
				<Button onClick={addQuestion} text={t('fillingFormPage.questions.addQuestion')} className={classNames(styles.button, root.btnSubmit, root.reverseFontColor)} />
			</div>
		</section>
	);
};
