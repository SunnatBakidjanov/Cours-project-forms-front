import { useTranslation } from 'react-i18next';

import { Paragraph } from '../paragraph/Paragrph';

export const WarningMessages = ({ text, styleUsePlace, className, isShowMessage = false }) => {
	const { t } = useTranslation();

	return isShowMessage ? <Paragraph text={t(text)} styleUsePlace={styleUsePlace} className={className} /> : null;
};
