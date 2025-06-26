import { useTranslation } from 'react-i18next';
import { useAuthSubmitTimer } from '../../hooks/useAuthSubmitTimer';
import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';

import classNames from 'classnames';

export const SubmitButtonTimer = ({ className }) => {
	const { timer, isActive } = useAuthSubmitTimer();
	const { root } = useThemeVar();
	const { t } = useTranslation();

	if (!isActive) return null;

	return <p className={classNames(root.fontColor, className)}>{t('mailResentPage.timerText', { timer })}</p>;
};
