import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { Button } from '../../../../UI/button/Button';
import { MainTitle } from '../../../../UI/main-title/MainTitle';
import { Paragraph } from '../paragraph/Paragrph';

import styles from './auth-form.module.scss';
import classNames from 'classnames';

export const AuthForm = () => {
	const { t } = useTranslation();
	const { changeColor, reverseChangeColor, accentbgColor, boxShadow } = useThemeVar();

	return (
		<div className={classNames(styles.container, boxShadow)}>
			<MainTitle text={t('authPage.title')} className={classNames(styles.title, changeColor)} />

			<form className={styles.form}>
				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.name')} styleUsePlace="formText" className={changeColor} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="name" placeholder={t('authPage.form.namePlaceholder')} required />
						<span className={classNames(styles.labelUnderline, accentbgColor)}></span>
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.surname')} styleUsePlace="formText" className={changeColor} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={50} type="text" name="surname" placeholder={t('authPage.form.surnamePlaceholder')} required />
						<span className={classNames(styles.labelUnderline, accentbgColor)}></span>
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.email')} styleUsePlace="formText" className={changeColor} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="email" name="email" placeholder={t('authPage.form.emailPlaceholder')} required />
						<span className={classNames(styles.labelUnderline, accentbgColor)}></span>
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.password')} styleUsePlace="formText" className={changeColor} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="password" name="password" placeholder={t('authPage.form.passwordPlaceholder')} required />
						<span className={classNames(styles.labelUnderline, accentbgColor)}></span>
					</label>
				</div>

				<div className={styles.formBlock}>
					<Paragraph text={t('authPage.form.repeatPassword')} styleUsePlace="formText" className={changeColor} />

					<label className={styles.label}>
						<input className={styles.input} maxLength={255} type="password" name="repeat-password" placeholder={t('authPage.form.repeatPasswordPlaceholder')} required />
						<span className={classNames(styles.labelUnderline, accentbgColor)}></span>
					</label>
				</div>

				<Button text={t('authPage.submitButton')} type="submit" className={classNames(styles.button, accentbgColor, reverseChangeColor)} />
			</form>
		</div>
	);
};
