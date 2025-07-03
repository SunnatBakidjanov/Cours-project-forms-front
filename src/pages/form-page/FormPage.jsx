import { Background } from '../../UI/background/Background';
import { CreateFormBtn } from './UI/create-form-btn/CreateFormBtn';
import { FormsList } from './UI/fomr-list/FormList';

import styles from './form-page.module.scss';
import classNames from 'classnames';

export const FormPage = () => {
	return (
		<div className={classNames(styles.wrapper)}>
			<Background />

			<CreateFormBtn />

			<FormsList />
		</div>
	);
};
