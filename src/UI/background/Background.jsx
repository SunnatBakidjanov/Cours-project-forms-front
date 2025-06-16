import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';

import classNames from 'classnames';
import styles from './background.module.scss';

export const Background = () => {
	const { mainBgColor } = useThemeVar();

	return <div className={classNames(styles.root, mainBgColor)}></div>;
};
