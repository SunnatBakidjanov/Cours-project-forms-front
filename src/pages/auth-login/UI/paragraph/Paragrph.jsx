import classNames from 'classnames';
import styles from './pargraph.module.scss';

export const Paragraph = ({ text, styleUsePlace, className }) => {
	return (
		<p
			className={classNames(className, styles.root, {
				[styles.formText]: styleUsePlace === 'formText',
				[styles.welcomeText]: styleUsePlace === 'welcomeText',
			})}
		>
			{text}
		</p>
	);
};
