import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { useTranslation } from 'react-i18next';
import { useTitleForm } from '../../hooks/useTItleForm';

import styles from './form-title.module.scss';
import classNames from 'classnames';

export const FormTitle = () => {
	const { loginAuthPage } = useThemeVar();
	const { t } = useTranslation();
	const { state, setField } = useTitleForm();
	const { title, description } = state;

	return (
		<form className={classNames(styles.form)}>
			<label className={styles.label}>
				<input className={styles.input} maxLength={50} type="text" name="title" placeholder={t('fillingFormPage.title-form.titlePlaceholder')} required value={title || ''} onChange={e => setField('title', e.target.value)} />
				<span className={classNames(styles.labelUnderline, loginAuthPage.btnLinkUnderlineBgColor)}></span>
			</label>

			<label className={styles.label}>
				<input className={styles.input} maxLength={255} type="text" name="description" placeholder={t('fillingFormPage.title-form.description')} value={description || ''} onChange={e => setField('description', e.target.value)} />
				<span className={classNames(styles.labelUnderline, loginAuthPage.btnLinkUnderlineBgColor)}></span>
			</label>
		</form>
	);
};
