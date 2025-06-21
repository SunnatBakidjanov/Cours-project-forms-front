import { useTranslation, Trans } from 'react-i18next';
import { useThemeVar } from '../../../../../hooks/useThemeVar/useThemeVar';

import styles from './sent-text.module.scss';
import classNames from 'classnames';

export const SentText = ({ email }) => {
	const { t } = useTranslation();
	const { root } = useThemeVar();

	return (
		<div className={classNames(styles.text, root.fontColor)}>
			<Trans i18nKey="mailResentPage.emailSentText" values={{ email }} components={[<span className={classNames(styles.accentText, root.accentColor)} />, <span className={classNames(styles.accentText, root.accentColor)} />]} t={t} />
		</div>
	);
};
