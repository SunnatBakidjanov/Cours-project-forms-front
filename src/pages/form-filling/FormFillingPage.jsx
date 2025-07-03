import { FormTitle } from './UI/from-title/FormTitle ';
import { ActionBar } from './UI/action-bar/ActionBar';
import { Background } from '../../UI/background/Background';
import { QuestionsBlock } from './UI/question-bock/QuestionsBlock';

import classNames from 'classnames';
import styles from './form-filling-page.module.scss';

export const FormFillingPage = () => {
	return (
		<>
			<ActionBar />
			<Background />

			<div className={classNames(styles.wrapper)}>
				<FormTitle />

				<QuestionsBlock />
			</div>
		</>
	);
};
