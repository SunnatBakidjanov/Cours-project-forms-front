import { FormTitle } from './UI/from-title/FormTitle ';

import classNames from 'classnames';
import styles from './form-filling-page.module.scss';

export const FormFillingPage = () => {
	return (
		<div className={classNames(styles.wrapper)}>
			<FormTitle />
		</div>
	);
};
