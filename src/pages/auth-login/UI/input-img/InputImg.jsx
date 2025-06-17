import classNames from 'classnames';
import styles from './input-img.module.scss';

export const InputImg = ({ src, styleUsePlace }) => {
	return (
		<img
			className={classNames(styles.img, {
				[styles.text]: styleUsePlace === 'text',
			})}
			src={src}
			alt=""
		/>
	);
};
