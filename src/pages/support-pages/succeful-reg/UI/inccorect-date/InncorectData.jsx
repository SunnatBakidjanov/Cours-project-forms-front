import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../../UI/button/Button';

import classNames from 'classnames/bind';
import styles from './inncorect-data.module.scss';

export const InncorectData = () => {
	const { t } = useTranslation();
	const { root, emeailSentPage } = useThemeVar();
	const navigate = useNavigate();

	return (
		<div className={classNames(styles.wrapper)}>
			<div className={classNames(styles.inner, emeailSentPage.checkListUnderline)}>
				<h2 className={classNames(styles.title, root.fontColor)}>{t('mailResentPage.inccorectData.title')}</h2>
				<p className={classNames(styles.text, root.fontColor)}>{t('mailResentPage.inccorectData.text')}</p>
			</div>
			<Button
				text={t('mailResentPage.inccorectData.button')}
				className={classNames(styles.button, root.btnSubmit, root.reverseFontColor)}
				onClick={() => {
					navigate('/auth');
				}}
			/>
		</div>
	);
};
