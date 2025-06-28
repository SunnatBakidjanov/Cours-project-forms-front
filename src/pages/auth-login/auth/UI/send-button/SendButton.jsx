import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useAuthSubmitTimer } from '../../../../../hooks/useAuthSubmitTimer';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import { SubmitButtonTimer } from '../../../../../UI/submit-button-timer/SubmitButtonTimer';
import { Loader } from '../../../../../UI/submit-btn-loader/Loader';
import { Button } from '../../../../../UI/button/Button';

import styles from './send-button.module.scss';
import classNames from 'classnames';

export const SendButton = ({ isLoading, className, isSuccess }) => {
	const { loginAuthPage, root } = useThemeVar();
	const { start, isActive } = useAuthSubmitTimer();
	const { t } = useTranslation();

	useEffect(() => {
		if (isSuccess) {
			start();
		}
	}, [isSuccess]);

	return (
		<div className={styles.wrapper}>
			<Button text={isLoading ? '' : t('authPage.submitButton')} type="submit" className={classNames(className, loginAuthPage.formBtnBgColor, root.reverseFontColor, isActive && styles.btnDisabled)} disabled={isLoading || isActive}>
				{isLoading ? <Loader className={loginAuthPage.submitLoader} styleUsePlace="submitBtn" /> : undefined}
			</Button>

			<SubmitButtonTimer className={styles.timerText} />
		</div>
	);
};
