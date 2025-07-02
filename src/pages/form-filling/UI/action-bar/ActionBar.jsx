import { ActionBarTitle } from '../action-bar-title/ActionBarTitle';

import styles from './action-bar.module.scss';
import classNames from 'classnames';

export const ActionBar = () => {
	return (
		<section className={classNames(styles.section)}>
			<div className={classNames(styles.wrapper)}>
				<ActionBarTitle />
			</div>
		</section>
	);
};
