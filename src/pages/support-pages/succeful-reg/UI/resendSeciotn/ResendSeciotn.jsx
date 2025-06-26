import { useResendMail } from '../../hooks/useResendMail';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';
import { useTranslation } from 'react-i18next';
import { useAuthSubmitTimer } from '../../../../../hooks/useAuthSubmitTimer';

import { Button } from '../../../../../UI/button/Button';
import { SubmitBtnLoader } from '../../../../../UI/submit-btn-loader/SubmitBtnLoader';
import { SubmitButtonTimer } from '../../../../../UI/submit-button-timer/SubmitButtonTimer';

import classNames from 'classnames';
import styles from './resend-section.module.scss';

export const ResendSection = ({ email }) => {
	const { t } = useTranslation();
	const { root } = useThemeVar();
	const { state, handleResend } = useResendMail(email);
	const { isActive } = useAuthSubmitTimer();
	const { isLoading, isError } = state;

	return (
		<div className={styles.wrapper}>
			<Button text={isLoading ? '' : t('mailResentPage.button')} onClick={handleResend} className={classNames(styles.button, root.btnSubmit, root.reverseFontColor, isActive && styles.buttonDisabled)} disabled={isLoading || isActive}>
				{isLoading && <SubmitBtnLoader />}
			</Button>

			<SubmitButtonTimer className={styles.errorAndTimerText} />

			{isError && <p className={classNames(styles.errorAndTimerText, root.errorMessage)}>{t('mailResentPage.errMessage')}</p>}
		</div>
	);
};
