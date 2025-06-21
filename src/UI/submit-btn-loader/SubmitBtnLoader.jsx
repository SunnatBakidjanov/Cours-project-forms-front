import classNames from 'classnames';
import styles from './submit-btn-loader.module.scss';

export const SubmitBtnLoader = ({ className }) => {
	return <span className={classNames(styles.loader, className)}></span>;
};
