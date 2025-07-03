import { useNavigate } from 'react-router-dom';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { MainTitle } from '../../../../UI/main-title/MainTitle';

import styles from './title.module.scss';
import classNames from 'classnames';

export const Title = () => {
	const { root } = useThemeVar();
	const navigate = useNavigate();

	return (
		<MainTitle
			text="Forms"
			className={classNames(styles.title, root.fontColor)}
			onClick={() => {
				navigate('/form');
			}}
		/>
	);
};
