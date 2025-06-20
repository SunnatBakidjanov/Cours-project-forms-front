import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';
import { useDisable } from '../../hooks/useDisable';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from './scripts/changeLanguage';

import { TranslationImg } from './UI/translation-img/TranslationImg';
import { Button } from '../button/Button';

import styles from './translation-button.module.scss';
import classNames from 'classnames';

export const TranslationButton = () => {
	const { root } = useThemeVar();
	const { t } = useTranslation();

	const DISABLE_DILAY = 200;
	const { handleDisableonClick, isDisabled } = useDisable(DISABLE_DILAY);
	const { handleChangeLanguageOnClick } = changeLanguage();

	return (
		<Button
			text={t('translationBtn')}
			onClick={() => {
				handleDisableonClick();
				handleChangeLanguageOnClick();
			}}
			disabled={isDisabled}
			className={classNames(styles.button, root.toolbarBtnBgColor, root.fontColor)}
		>
			<TranslationImg />
		</Button>
	);
};
