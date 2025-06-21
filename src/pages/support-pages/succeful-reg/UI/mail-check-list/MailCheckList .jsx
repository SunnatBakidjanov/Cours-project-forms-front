import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';

import styles from './mail-check-list.module.scss';
import classNames from 'classnames';

export const MailCheckList = () => {
	const { t } = useTranslation();
	const { emeailSentPage, root } = useThemeVar();

	const items = t('mailResentPage.checkList', { returnObjects: true });

	return (
		<ul className={classNames(styles.list, emeailSentPage.checkListUnderline)}>
			{items.map((text, idx) => (
				<li className={classNames(styles.item, root.fontColor)} key={idx}>
					{text}
				</li>
			))}
		</ul>
	);
};
