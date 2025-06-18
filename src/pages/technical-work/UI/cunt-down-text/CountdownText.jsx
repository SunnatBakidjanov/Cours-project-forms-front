import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import styles from './count-down-text.module.scss';
import classNames from 'classnames';

export const CountdownText = () => {
	const { root } = useThemeVar();
	const { t } = useTranslation();

	return <p className={classNames(styles.text, root.fontColor)}>{t('technikalWorkPage.countDownText')}</p>;
};
