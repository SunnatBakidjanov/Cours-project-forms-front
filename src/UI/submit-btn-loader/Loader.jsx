import classNames from 'classnames';
import styles from './loader.module.scss';

export const Loader = ({ className, styleUsePlace }) => {
	return (
		<span
			className={classNames(styles.loader, className, {
				[styles.submitBtn]: styleUsePlace === 'submitBtn',
				[styles.pageLoader]: styleUsePlace === 'pageLoader',
				[styles.headerBtn]: styleUsePlace === 'headerBtn',
			})}
		></span>
	);
};
