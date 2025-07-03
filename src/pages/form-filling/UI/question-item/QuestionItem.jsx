import { useTranslation } from 'react-i18next';
import { Button } from '../../../../UI/button/Button';

import styles from './question-item.module.scss';
import classNames from 'classnames';
import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';
import { DeleteBtnImg } from '../delete-btn-img/DeleteBtnImg';

export const QuestionItem = ({ question, onChange, onDelete }) => {
	const { t } = useTranslation();
	const { root, loginAuthPage } = useThemeVar();

	return (
		<div className={classNames(styles.block, loginAuthPage.formBoxShadow)}>
			<label className={styles.label}>
				<input className={classNames(styles.input, root.fontColor, root.bgColor)} maxLength={255} type="text" placeholder={t('fillingFormPage.questions.placeholder')} value={question.text} onChange={e => onChange(e.target.value)} />
				<span className={classNames(styles.labelUnderline, loginAuthPage.btnLinkUnderlineBgColor)}></span>
			</label>

			<div className={styles.innerBtn}>
				<Button onClick={onDelete} className={classNames(styles.button)}>
					<DeleteBtnImg />
				</Button>
			</div>
		</div>
	);
};
