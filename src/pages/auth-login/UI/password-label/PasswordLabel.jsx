import { useDisable } from '../../../../hooks/useDisable';
import { useShowPassword } from '../../hooks/useShowPassword';

import { Button } from '../../../../UI/button/Button';
import { InputImg } from '../input-img/InputImg';

import eyePasswordImg from '../../../../assets/imgs/svg/eye-password.svg';
import styles from '../../styles/auth-login-form.module.scss';
import btnStyles from './password-label.module.scss';
import classNames from 'classnames';

export const PasswordLabel = ({ placeholderText, name, underlineThemeClassName, value, onChange }) => {
	const { showPassword, togglePassword } = useShowPassword();
	const inputType = showPassword ? 'text' : 'password';
	const changeEyeStyles = showPassword ? btnStyles.eyeLineShow : '';

	const DISABLED_DILAY = 200;
	const { handleDisableonClick, isDisabled } = useDisable(DISABLED_DILAY);

	return (
		<label className={styles.label}>
			<input className={styles.input} maxLength={255} type={inputType} name={name} placeholder={placeholderText} required value={value} onChange={onChange} />
			<span className={underlineThemeClassName}></span>
			<Button
				onClick={() => {
					handleDisableonClick();
					togglePassword();
				}}
				disabled={isDisabled}
				className={classNames(btnStyles.button)}
			>
				<span className={classNames(btnStyles.eyeLine, changeEyeStyles)}></span>
				<InputImg src={eyePasswordImg} />
			</Button>
		</label>
	);
};
