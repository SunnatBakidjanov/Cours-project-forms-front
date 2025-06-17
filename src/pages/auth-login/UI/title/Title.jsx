import classNames from 'classnames';
import styles from './title.module.scss';

export const Title = ({ text, className, styleUsePlace }) => {
	return (
		<h2
			className={classNames(className, {
				[styles.authTitle]: styleUsePlace === 'authTitle',
			})}
		>
			{text}
		</h2>
	);
};
