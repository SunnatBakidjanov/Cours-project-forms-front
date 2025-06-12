import { use } from 'react';
import { ThemeContext } from '../../components/theme';
import { useDisable } from '../../hooks/useDisable';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from './scripts/changeLanguage';

import { TranslationImg } from './UI/translation-img/TranslationImg';
import { Button } from '../button/Button';

import styles from './translation-button.module.scss';

export const TranslationButton = () => {
	const { isThemeLight } = use(ThemeContext);
	const { t } = useTranslation();

	const DISABLE_DILAY = 200;
	const { handleDisableonClick, isDisabled } = useDisable(DISABLE_DILAY);
	const handleChangeLanguageOnClick = changeLanguage();

	return (
		<Button
			text={t('translationBtn')}
			onClick={() => {
				handleDisableonClick();
				handleChangeLanguageOnClick();
			}}
			disabled={isDisabled}
			className={`${styles.button} ${isThemeLight ? styles.linghtTheme : styles.darkTheme}`}
		>
			<TranslationImg />
		</Button>
	);
};
