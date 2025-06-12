import { useTranslation } from 'react-i18next';

export const changeLanguage = () => {
	const { i18n } = useTranslation();
	const currentLang = i18n.language?.toUpperCase() || 'EN';
	const nextLang = currentLang === 'RU' ? 'en' : 'ru';

	const handleChangeLanguageOnClick = () => {
		i18n.changeLanguage(nextLang);
	};

	return handleChangeLanguageOnClick;
};
