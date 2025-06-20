import classNames from 'classnames';
import styles from './pargraph.module.scss';

export const Paragraph = ({ text, styleUsePlace, className }) => {
	return (
		<p
			className={classNames(className, styles.root, {
				[styles.formText]: styleUsePlace === 'formText',
				[styles.formError]: styleUsePlace === 'formError',
				[styles.linkBtn]: styleUsePlace === 'linkBtn',
			})}
		>
			{text}
		</p>
	);
};
