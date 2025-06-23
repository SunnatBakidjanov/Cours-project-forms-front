import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useAuthFrom } from './hooks/useAuthFrom';

import { Button } from '../../../../../UI/button/Button';
import { MainTitle } from '../../../../../UI/main-title/MainTitle';
import { Paragraph } from '../../../UI/paragraph/Paragrph';
import { InputImg } from '../../../UI/input-img/InputImg';
import { PasswordLabel } from '../../../UI/password-label/PasswordLabel';
import { SubmitBtnLoader } from '../../../../../UI/submit-btn-loader/SubmitBtnLoader';

import styles from '../../../styles/auth-login-form.module.scss';
import classNames from 'classnames';
import userImg from '../../../../../assets/imgs/svg/user.svg';
import userGroupImg from '../../../../../assets/imgs/svg/user-group.svg';
import emailImg from '../../../../../assets/imgs/svg/email.svg';

export const AuthForm = () => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();

	const { state, setField, onSubmit } = useAuthFrom();
	const { name, surname, email, password, repeatPassword, errors, isLoading, successful } = state;

	return (
		<div className={classNames(styles.container, loginAuthPage.formBoxShadow)}>
			<MainTitle text={t('authPage.title')} className={classNames(styles.title, root.fontColor)} />

			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.name')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="name" placeholder={t('authPage.form.namePlaceholder')} required value={name} onChange={e => setField('name', e.target.value)} />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={userImg} styleUsePlace="text" />
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.surname')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="surname" placeholder={t('authPage.form.surnamePlaceholder')} required value={surname} onChange={e => setField('surname', e.target.value)} />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={userGroupImg} styleUsePlace="text" />
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.email')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="email" name="email" placeholder={t('authPage.form.emailPlaceholder')} required value={email} onChange={e => setField('email', e.target.value)} />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={emailImg} styleUsePlace="text" />
					</label>

					{errors?.email?.includes('EMAIL_ALREADY_EXISTS') && <Paragraph styleUsePlace="formError" text={t('authPage.errors.emailAlreadyExists')} className={loginAuthPage.errorMessages} />}
					{errors?.email?.includes('EMAIL_INVALID_FORMAT') && <Paragraph styleUsePlace="formError" text={t('authPage.errors.emailInvalidFormat')} className={loginAuthPage.errorMessages} />}
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.password')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<PasswordLabel underlineThemeClassName={classNames(styles.labelUnderline)} placeholderText={t('authPage.form.passwordPlaceholder')} name="password" value={password} onChange={e => setField('password', e.target.value)} />
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.repeatPassword')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<PasswordLabel
						underlineThemeClassName={classNames(styles.labelUnderline)}
						placeholderText={t('authPage.form.repeatPasswordPlaceholder')}
						name="repeat-password"
						value={repeatPassword}
						onChange={e => setField('repeatPassword', e.target.value)}
					/>

					{errors?.repeatPassword?.includes('PASSWORDS_DO_NOT_MATCH') && <Paragraph styleUsePlace="formError" text={t(`authPage.errors.repeatPassword`)} className={loginAuthPage.errorMessages} />}
				</div>

				{successful?.message?.includes('SUCCESSFUL_MESSAGE') && <Paragraph text={t('authPage.successMessage')} styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} />}
				{successful?.message?.includes('UPDATED_DATA') && <Paragraph text={t('authPage.updatedDataMessage')} styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} />}
				{successful?.message?.includes('RESENDING_MESSAGE') && <Paragraph text={t('authPage.resendingMessage')} styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} />}

				<Button text={isLoading ? '' : t('authPage.submitButton')} type="submit" className={classNames(styles.button, loginAuthPage.formBtnBgColor, root.reverseFontColor)} disabled={isLoading}>
					{isLoading ? <SubmitBtnLoader className={loginAuthPage.submitLoader} /> : undefined}
				</Button>
			</form>
		</div>
	);
};
