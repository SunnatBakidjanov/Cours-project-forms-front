import { useAllForms } from '../../hooks/useAllForms';
import { Link } from 'react-router-dom';
import styles from './forms-list.module.scss';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const FormsList = () => {
	const { forms } = useAllForms();
	const accessToken = useSelector(state => state.auth.accessToken);
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();

	if (!accessToken) return null;

	return (
		<section className={styles.container}>
			<h2 className={classNames(styles.title, root.fontColor)}>
				{t('formPage.myFormsTitle')}
				<span className={classNames(styles.line, root.btnSubmit)}></span>
			</h2>

			<ul className={classNames(styles.list)}>
				{forms.length < 0 ? (
					forms.map(form => {
						const formTitleShort = form.title && form.title.length > 15 ? `${form.title.slice(0, 30)}...` : form.title;

						return (
							<Link to={`/form/${form.key}`} key={form.key} className={classNames(styles.item, loginAuthPage.formBoxShadow)}>
								<h3 className={classNames(styles.formName, root.fontColor)}>{formTitleShort}</h3>
							</Link>
						);
					})
				) : (
					<p className={styles.noFormText}>{t('formPage.noForms')}</p>
				)}
			</ul>
		</section>
	);
};
