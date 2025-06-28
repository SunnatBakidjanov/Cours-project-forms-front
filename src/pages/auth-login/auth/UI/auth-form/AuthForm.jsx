import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useAuthFrom } from '../../hooks/useAuthFrom';

import { MainTitle } from '../../../../../UI/main-title/MainTitle';
import { Paragraph } from '../../../UI/paragraph/Paragrph';
import { InputImg } from '../../../UI/input-img/InputImg';
import { PasswordLabel } from '../../../UI/password-label/PasswordLabel';
import { WarningMessages } from '../../../UI/warning-messages/WarningMessages';

import styles from '../../../styles/auth-login-form.module.scss';
import classNames from 'classnames';
import userImg from '../../../../../assets/imgs/svg/user.svg';
import userGroupImg from '../../../../../assets/imgs/svg/user-group.svg';
import emailImg from '../../../../../assets/imgs/svg/email.svg';
import { SendButton } from '../send-button/SendButton';

export const AuthForm = () => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();

	const { state, setField, onSubmit } = useAuthFrom();
	const { name, surname, email, password, repeatPassword, errors, isLoading, successful, isSuccess } = state;

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

					<WarningMessages text="authPage.errors.nameInvalidFormat" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors?.name === 'NAME_INVALID_CHARACTERS'} />
					<WarningMessages text="authPage.errors.emptyValue" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors?.name === 'NAME_REQUIRED'} />
					<WarningMessages text="authPage.errors.emptyValue" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors?.name === 'NAME_REQUIRED'} />
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.surname')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="surname" placeholder={t('authPage.form.surnamePlaceholder')} required value={surname} onChange={e => setField('surname', e.target.value)} />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={userGroupImg} styleUsePlace="text" />
					</label>

					<WarningMessages text="authPage.errors.surnameInvalidFormat" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors?.surname === 'SURNAME_INVALID_CHARACTERS'} />
					<WarningMessages text="authPage.errors.emptyValue" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors?.surname === 'SURNAME_REQUIRED'} />
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.email')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="email" name="email" placeholder={t('authPage.form.emailPlaceholder')} required value={email} onChange={e => setField('email', e.target.value)} />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={emailImg} styleUsePlace="text" />
					</label>

					<WarningMessages text="authPage.errors.emailAlreadyExists" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors === 'USER_STATUS_ACTIVE'} />
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

					<WarningMessages text="authPage.errors.repeatPassword" styleUsePlace="formError" className={loginAuthPage.errorMessages} isShowMessage={errors?.repeatPassword === 'PASSWORDS_DO_NOT_MATCH'} />
				</div>

				<WarningMessages text="authPage.successfulMessages.successMessage" styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} isShowMessage={successful === 'SUCCESSFUL_MESSAGE'} />
				<WarningMessages text="authPage.successfulMessages.updatedDataMessage" styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} isShowMessage={successful === 'UPDATE_DATA'} />
				<WarningMessages text="authPage.successfulMessages.resendingMessage" styleUsePlace="succefulMessage" className={loginAuthPage.successMessage} isShowMessage={successful === 'RESENDING_MESSAGE'} />
				<WarningMessages text="unhandledError" styleUsePlace="succefulMessage" className={loginAuthPage.errorMessages} isShowMessage={errors === 'SERVER_ERROR'} />

				<SendButton isLoading={isLoading} className={styles.button} isSuccess={isSuccess} />
			</form>
		</div>
	);
};
