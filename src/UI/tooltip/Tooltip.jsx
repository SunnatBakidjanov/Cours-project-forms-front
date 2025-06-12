import { use } from 'react';

import { ThemeContext } from '../../components/theme';

import classNames from 'classnames';
import styles from './tooltip.module.scss';

export const Tooltip = ({ text, className }) => {
	const theme = use(ThemeContext);

	return <span className={classNames(styles.default, className)}>{text}</span>;
};
