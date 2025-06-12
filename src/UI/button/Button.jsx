import classNames from 'classnames';
import styles from './button.module.scss';

export const Button = ({ text, onClick, className, type = 'button', children, disabled = false }) => {
	return (
		<button disabled={disabled} type={type} onClick={onClick} className={classNames(className, {})}>
			{text}
			{children}
		</button>
	);
};
