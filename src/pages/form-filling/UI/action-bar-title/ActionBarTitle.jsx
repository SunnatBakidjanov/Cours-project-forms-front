import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { useSelector } from 'react-redux';
import { Loader } from '../../../../UI/submit-btn-loader/Loader';

import styles from './action-bar-title.module.scss';
import classNames from 'classnames';

export const ActionBarTitle = () => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();
	const title = useSelector(state => state.createForm.title);
	const isDataSaving = useSelector(state => state.createForm.isDataSaving);
	const titleLength = title?.length >= 20 ? `${title.slice(0, 19)}...` : title;

	return (
		<div className={classNames(styles.wrapper)}>
			<h2 className={classNames(styles.title, root.fontColor)}>{t('fillingFormPage.actionBar.title')}</h2>

			<span className={classNames(styles.titleBlockLine, loginAuthPage.btnLinkUnderlineBgColor)}></span>

			<p className={classNames(styles.formName, root.fontColor)}>{titleLength || <Loader className={root.loaderPage} styleUsePlace="headerBtn" />}</p>

			<span className={classNames(styles.titleBlockLine, loginAuthPage.btnLinkUnderlineBgColor)}></span>

			<p className={classNames(styles.saveText, root.fontColor)}>{isDataSaving ? t('fillingFormPage.actionBar.savingDataText') : t('fillingFormPage.actionBar.savedDateText')}</p>
		</div>
	);
};
