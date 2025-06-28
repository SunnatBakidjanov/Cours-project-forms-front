import { useResendMail } from '../../hooks/useResendMail';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useTranslation } from 'react-i18next';
import { useAuthSubmitTimer } from '../../../../../hooks/useAuthSubmitTimer';

import { WarningMessages } from '../../../../auth-login/UI/warning-messages/WarningMessages';
import { Button } from '../../../../../UI/button/Button';
import { Loader } from '../../../../../UI/submit-btn-loader/Loader';
import { SubmitButtonTimer } from '../../../../../UI/submit-button-timer/SubmitButtonTimer';

import classNames from 'classnames';
import styles from './resend-section.module.scss';
import { useEffect } from 'react';

export const ResendSection = ({ email }) => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();
	const { state, handleResend } = useResendMail(email);
	const { isActive, start } = useAuthSubmitTimer();
	const { isLoading, errors, isSuccess, successMessage } = state;

	useEffect(() => {
		if (isSuccess) {
			start();
		}
	}, [isSuccess]);

	return (
		<div className={styles.wrapper}>
			<Button text={isLoading ? '' : t('mailResentPage.button')} onClick={handleResend} className={classNames(styles.button, root.btnSubmit, root.reverseFontColor, isActive && styles.buttonDisabled)} disabled={isLoading || isActive}>
				{isLoading && <Loader className={classNames(loginAuthPage.submitLoader)} styleUsePlace="submitBtn" />}
			</Button>

			<WarningMessages text="unhandledError" className={classNames(state.errorAndTimerText, loginAuthPage.errorMessages)} isShowMessage={errors === 'SERVER_ERROR'} />
			<WarningMessages text={'mailResentPage.errMessages.userActive'} className={classNames(styles.errorAndTimerText, loginAuthPage.successMessage)} isShowMessage={errors === 'USER_STATUS_ACTIVE'} />
			<WarningMessages text={'mailResentPage.errMessages.mailResend'} className={classNames(styles.errorAndTimerText, loginAuthPage.successMessage)} isShowMessage={successMessage === 'VERIFICATION_EMAIL_RESENT'} />

			<SubmitButtonTimer className={styles.errorAndTimerText} />
		</div>
	);
};
