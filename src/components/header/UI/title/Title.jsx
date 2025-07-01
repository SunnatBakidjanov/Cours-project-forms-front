import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { MainTitle } from '../../../../UI/main-title/MainTitle';

import styles from './title.module.scss';
import classNames from 'classnames';

export const Title = () => {
	const { root } = useThemeVar();

	return <MainTitle text="Forms" className={classNames(styles.title, root.fontColor)} />;
};
