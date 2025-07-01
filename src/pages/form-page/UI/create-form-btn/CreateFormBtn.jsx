import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { useSelector } from 'react-redux';
import { useCreateForm } from '../../hooks/useCrateForm';

import { Button } from '../../../../UI/button/Button';

import styles from './create-form-btn.module.scss';
import classNames from 'classnames/bind';
import { Loader } from '../../../../UI/submit-btn-loader/Loader';

export const CreateFormBtn = () => {
	const { t } = useTranslation();
	const { root, formPage } = useThemeVar();
	const accessToken = useSelector(state => state.auth.accessToken);
	const { handleCreate, isLoading } = useCreateForm();

	return accessToken ? (
		<section className={classNames(styles.wrapper)}>
			<h2 className={classNames(styles.title, root.fontColor)}>{t('formPage.createFormTitle')}</h2>

			<Button className={classNames(styles.button, formPage.createFormHoverBtn)} onClick={handleCreate}>
				{!isLoading ? (
					<>
						<span className={classNames(styles.verticalLine, root.btnSubmit)}></span>
						<span className={classNames(styles.horizontalLine, root.btnSubmit)}></span>
					</>
				) : (
					<Loader styleUsePlace="formCreateBtn" className={classNames(root.loaderPage)} />
				)}
			</Button>
		</section>
	) : null;
};
