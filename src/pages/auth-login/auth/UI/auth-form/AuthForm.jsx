import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';

import { Button } from '../../../../../UI/button/Button';
import { MainTitle } from '../../../../../UI/main-title/MainTitle';
import { Paragraph } from '../../../UI/paragraph/Paragrph';
import { InputImg } from '../../../UI/input-img/InputImg';
import { PasswordLabel } from '../../../UI/password-label/PasswordLabel';

import styles from '../../../styles/auth-login-form.module.scss';
import classNames from 'classnames';
import userImg from '../../../../../assets/imgs/svg/user.svg';
import userGroupImg from '../../../../../assets/imgs/svg/user-group.svg';
import emailImg from '../../../../../assets/imgs/svg/email.svg';

export const AuthForm = () => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();

	return (
		<div className={classNames(styles.container)}>
			<MainTitle text={t('authPage.title')} className={classNames(styles.title, root.fontColor)} />

			<form className={styles.form}>
				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.name')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="name" placeholder={t('authPage.form.namePlaceholder')} required />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={userImg} styleUsePlace="text" />
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.surname')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="surname" placeholder={t('authPage.form.surnamePlaceholder')} required />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={userGroupImg} styleUsePlace="text" />
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.email')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="email" name="email" placeholder={t('authPage.form.emailPlaceholder')} required />
						<span className={classNames(styles.labelUnderline)}></span>
						<InputImg src={emailImg} styleUsePlace="text" />
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.password')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<PasswordLabel underlineThemeClassName={classNames(styles.labelUnderline)} placeholderText={t('authPage.form.passwordPlaceholder')} name="password" />
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.repeatPassword')} styleUsePlace="formText" className={classNames(root.fontColor)} />

					<PasswordLabel underlineThemeClassName={classNames(styles.labelUnderline)} placeholderText={t('authPage.form.repeatPasswordPlaceholder')} name="repeat-password" />
				</div>

				<Button text={t('authPage.submitButton')} type="submit" className={classNames(styles.button, loginAuthPage.formBtnBgColor, root.reverseFontColor)} />
			</form>
		</div>
	);
};
