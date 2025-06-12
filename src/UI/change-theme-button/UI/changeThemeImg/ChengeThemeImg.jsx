import classNames from 'classnames';
import styles from './change-theme-img.module.scss';

export const ChangeThemeImg = ({ src, styleUsePlace }) => {
	return (
		<img
			src={src}
			alt=""
			className={classNames({
				[styles.moon]: styleUsePlace === 'moon',
				[styles.sun]: styleUsePlace === 'sun',
			})}
		/>
	);
};
