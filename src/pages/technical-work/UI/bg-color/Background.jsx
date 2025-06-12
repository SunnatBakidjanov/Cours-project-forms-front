import { ThemeContext } from '../../../../components/theme';
import { use } from 'react';

import classNames from 'classnames';
import styles from './background.module.scss';

export const Background = () => {
	const { isThemeLight } = use(ThemeContext);

	return <div className={classNames(styles.root, isThemeLight ? styles.bgLigthTheme : styles.bgDarkTheme)}></div>;
};
