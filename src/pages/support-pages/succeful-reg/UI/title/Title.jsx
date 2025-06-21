import { useTranslation } from 'react-i18next';

import { MainTitle } from '../../../../../UI/main-title/MainTitle';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';

import styles from './title.module.scss';
import classNames from 'classnames/bind';

export const Title = ({ name, surname }) => {
	const { t } = useTranslation();
	const { root } = useThemeVar();

	return (
		<MainTitle className={classNames(styles.title, root.accentColor)}>
			{t('mailResentPage.title')}{' '}
			<span className={classNames(styles.titleName, root.fontColor)}>
				{name} {surname}
			</span>
		</MainTitle>
	);
};
