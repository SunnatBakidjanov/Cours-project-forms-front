import { use } from 'react';
import { useTimeLeft } from './hooks/useTimeLeft';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../../../components/theme';

import { calculateTimeLeft } from './scripts/calculateTimeLeft';

import styles from './count-down-timer.module.scss';

export const CountdownTimer = () => {
	const { timeLeft } = useTimeLeft(calculateTimeLeft);
	const { isThemeLight } = use(ThemeContext);
	const { t } = useTranslation();

	return (
		<>
			{timeLeft ? (
				<p className={`${styles.text} ${isThemeLight ? styles.textLightTheme : styles.textDarkTheme}`}>
					{timeLeft.days} {t('technikalWorkPage.countText.day')} :{timeLeft.hours} {t('technikalWorkPage.countText.hours')} :{timeLeft.minutes} {t('technikalWorkPage.countText.minutes')} :{timeLeft.seconds} {t('technikalWorkPage.countText.seconds')}
				</p>
			) : (
				<p>{t('technikalWorkPage.countEndText')}</p>
			)}
		</>
	);
};
