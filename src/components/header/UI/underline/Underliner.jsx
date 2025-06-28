import classNames from 'classnames';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import styles from './underline.module.scss';

export const Underline = () => {
	const { header } = useThemeVar();

	return <div className={classNames(styles.root, header.borderBottomColor)}></div>;
};
