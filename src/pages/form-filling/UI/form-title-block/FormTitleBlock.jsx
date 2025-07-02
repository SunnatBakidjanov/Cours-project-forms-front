import classNames from 'classnames';
import styles from './form-title-block.module.scss';

export const FromTitleBlock = () => {
	return (
		<section className={classNames(styles.section)}>
			<div className={classNames(styles.wrapper)}></div>
		</section>
	);
};
