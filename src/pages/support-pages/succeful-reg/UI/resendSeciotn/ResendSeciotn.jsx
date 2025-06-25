import { Button } from '../../../../../UI/button/Button';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { SubmitBtnLoader } from '../../../../../UI/submit-btn-loader/SubmitBtnLoader';
import { useResendMail } from '../../hooks/useResendMail';
import { useTimer } from '../../hooks/useTimer';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import classNames from 'classnames';
import styles from './resend-section.module.scss';

export const ResendSection = ({ email }) => {
	const { t } = useTranslation();
	const { root } = useThemeVar();
	const { state, handleResend } = useResendMail(email);
	const { isLoading, isError } = state;

	const { timer, isActive, start } = useTimer();

	const resendMail = async () => {
		const success = await handleResend();
		if (success) start();
	};

	return (
		<div className={styles.wrapper}>
			<Button text={isLoading ? '' : t('mailResentPage.button')} onClick={resendMail} className={classNames(styles.button, root.btnSubmit, root.reverseFontColor, isActive ? styles.buttonDisabled : '')} disabled={isLoading || isActive}>
				{isLoading && <SubmitBtnLoader />}
			</Button>

			{isActive && <p className={classNames(styles.errorAndTimerText, root.fontColor)}>{t('mailResentPage.timerText', { timer })}</p>}

			{isError && <p className={classNames(styles.errorAndTimerText, root.errorMessage)}>{t('mailResentPage.errMessage')}</p>}
		</div>
	);
};
