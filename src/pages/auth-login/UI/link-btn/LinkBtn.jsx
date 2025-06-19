import { useTranslation } from 'react-i18next';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { useNavigate } from 'react-router-dom';

import { Paragraph } from '../paragraph/Paragrph';
import { Button } from '../../../../UI/button/Button';

import styles from './link-btn.module.scss';
import classNames from 'classnames';

export const LinkBtn = ({ text, btnText, link }) => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();
	const navigat = useNavigate();

	return (
		<div className={classNames(styles.container)}>
			<span className={classNames(styles.overLine, loginAuthPage.btnLinkUnderlineBgColor)}></span>
			<Paragraph styleUsePlace="linkBtn" text={t(text)} className={root.fontColor} />
			<Button
				text={t(btnText)}
				className={classNames(styles.button, loginAuthPage.btnLinkColor)}
				onClick={() => {
					navigat(link);
				}}
			>
				<span className={classNames(styles.btnUnderLine, loginAuthPage.btnLinkUnderlineBgColor)}></span>
			</Button>
		</div>
	);
};
