import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';

import classNames from 'classnames';
import styles from './background.module.scss';

export const Background = ({ styleUsePlace }) => {
	const { loginAuthPage, root } = useThemeVar();

	return (
		<div
			className={classNames(styles.root, root.bgColor, {
				[loginAuthPage.bgColor]: styleUsePlace === 'loginAuthPage',
			})}
		></div>
	);
};
