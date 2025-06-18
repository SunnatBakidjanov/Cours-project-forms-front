import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { MainTitle } from '../../../../UI/main-title/MainTitle';

import classNames from 'classnames';
import styles from './title.module.scss';

export const Title = () => {
	const { root } = useThemeVar();
	const { t } = useTranslation();

	return <MainTitle text={t('technikalWorkPage.title')} className={classNames(styles.title, root.fontColor)} />;
};
