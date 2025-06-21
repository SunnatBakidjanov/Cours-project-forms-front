import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';

import styles from './subtitle.module.scss';
import classNames from 'classnames';

export const SubTitle = () => {
	const { t } = useTranslation();
	const { root } = useThemeVar();

	return <h2 className={classNames(styles.text, root.fontColor)}>{t('mailResentPage.subtitle')}</h2>;
};
