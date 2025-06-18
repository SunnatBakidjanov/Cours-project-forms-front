import { useTimeLeft } from './hooks/useTimeLeft';
import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { calculateTimeLeft } from './scripts/calculateTimeLeft';

import styles from './count-down-timer.module.scss';
import classNames from 'classnames';

export const CountdownTimer = () => {
	const { timeLeft } = useTimeLeft(calculateTimeLeft);
	const { root } = useThemeVar();
	const { t } = useTranslation();

	return (
		<>
			{timeLeft ? (
				<p className={classNames(styles.text, root.fontColor)}>
					{timeLeft.days} {t('technikalWorkPage.countText.day')} :{timeLeft.hours} {t('technikalWorkPage.countText.hours')} :{timeLeft.minutes} {t('technikalWorkPage.countText.minutes')} :{timeLeft.seconds} {t('technikalWorkPage.countText.seconds')}
				</p>
			) : (
				<p>{t('technikalWorkPage.countEndText')}</p>
			)}
		</>
	);
};
