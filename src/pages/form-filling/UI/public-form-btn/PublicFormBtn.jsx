import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { useSelector } from 'react-redux';
import { usePublishForm } from '../../hooks/usePublishForm';

import { Button } from '../../../../UI/button/Button';
import { Loader } from '../../../../UI/submit-btn-loader/Loader';

import styles from './public-form-btn.module.scss';
import classNames from 'classnames';

export const PublicFormBtn = () => {
	const { handlePublish, isDisabled, isPublish } = usePublishForm();
	const isLoading = useSelector(state => state.createForm.isLoading);
	const { t } = useTranslation();
	const { root } = useThemeVar();

	return (
		<Button
			text={!isLoading && (!isPublish ? t('fillingFormPage.actionBar.publicBtn') : t('fillingFormPage.actionBar.publicBtnEdit'))}
			className={classNames(styles.button, root.btnSubmit, root.reverseFontColor)}
			onClick={handlePublish}
			disabled={isLoading || isDisabled}
		>
			{isLoading && <Loader styleUsePlace="headerBtn" />}
		</Button>
	);
};
