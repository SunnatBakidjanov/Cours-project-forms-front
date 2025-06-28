import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useLoginForm } from '../../hooks/useLoginForm';

import { Paragraph } from '../../../UI/paragraph/Paragrph';
import { InputImg } from '../../../UI/input-img/InputImg';
import { MainTitle } from '../../../../../UI/main-title/MainTitle';
import { PasswordLabel } from '../../../UI/password-label/PasswordLabel';
import { Button } from '../../../../../UI/button/Button';
import { Loader } from '../../../../../UI/submit-btn-loader/Loader';
import { WarningMessages } from '../../../UI/warning-messages/WarningMessages';

import styles from '../../../styles/auth-login-form.module.scss';
import classNames from 'classnames';
import emailImg from '../../../../../assets/imgs/svg/email.svg';

export const LoginForm = () => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();
	const { state, setField, onSubmit } = useLoginForm();
	const { email, password, isLoading, errors, fullname, successMessage } = state;

	return (
		<div className={classNames(styles.container, loginAuthPage.formBoxShadow)}>
			<MainTitle text={t('loginPage.title')} className={classNames(styles.title, root.fontColor)} />

			<form className={classNames(styles.form)} onSubmit={onSubmit}>
				<div className={styles.formBlock}>
					<Paragraph text={t('loginPage.form.email')} styleUsePlace="formText" className={root.fontColor} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="email" name="email" placeholder={t('loginPage.form.emailPlaceholder')} required value={email} onChange={e => setField('email', e.target.value)} />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={emailImg} styleUsePlace="text" />
					</label>
				</div>
				<div className={styles.formBlock}>
					<Paragraph text={t('loginPage.form.password')} styleUsePlace="formText" className={root.fontColor} />

					<PasswordLabel underlineThemeClassName={classNames(styles.labelUnderline)} placeholderText={t('loginPage.form.passwordPlaceholder')} name="password" value={password} onChange={e => setField('password', e.target.value)} />
				</div>

				<WarningMessages text={t('loginPage.errorMessages.invalidPassword')} className={loginAuthPage.errorMessages} styleUsePlace="succefulMessage" isShowMessage={errors === 'INCORRECT_LOGIN_OR_PASSWORD'} />
				<WarningMessages text={t('loginPage.errorMessages.userBlocked')} className={loginAuthPage.errorMessages} styleUsePlace={'succefulMessage'} isShowMessage={errors === 'BLOCKED_ACCAUNT'} />
				<WarningMessages text={t('loginPage.errorMessages.userPandding')} className={loginAuthPage.errorMessages} styleUsePlace={'succefulMessage'} isShowMessage={errors === 'USER_STATUS_PENDING'} />
				<WarningMessages text={`${t('loginPage.successMessages.getting')} ${fullname?.name} ${fullname?.surname}`} styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} isShowMessage={successMessage === 'CORRECT_USER'} />

				<Button text={!isLoading ? t('loginPage.submitButton') : undefined} type="submit" className={classNames(styles.button, root.reverseFontColor, loginAuthPage.formBtnBgColor)}>
					{isLoading ? <Loader className={loginAuthPage.submitLoader} /> : undefined}
				</Button>
			</form>
		</div>
	);
};
