import styles from './main-title.module.scss';

import classNames from 'classnames';

export const MainTitle = ({ text, styleUsePlace }) => {
	return (
		<h1
			className={classNames({
				[styles.technicalWork]: styleUsePlace === 'technicalWork',
			})}
		>
			{text}
		</h1>
	);
};
