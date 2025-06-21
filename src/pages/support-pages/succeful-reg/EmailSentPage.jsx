import { Title } from './UI/Title/Title';
import { Background } from '../../../UI/background/Background';
import { SentText } from './UI/sent-text/SentText';
import { SubTitle } from './UI/subtitle/Subtitle';
import { MailCheckList } from './UI/mail-check-list/MailCheckList ';
import { ChangeThemeButton } from '../../../UI/change-theme-button/ChangeThemeButton';
import { TranslationButton } from '../../../UI/translaitor-button/TranslationButton';
import { ResendSection } from './UI/resendSeciotn/ResendSeciotn';

import styles from './email-sent.module.scss';
import classNames from 'classnames';

export const EmailSentPage = ({ name, surname, email }) => {
	return (
		<section className={classNames(styles.section)}>
			<Background />

			<div className="container">
				<div className={classNames(styles.wrapper)}>
					<div className={styles.toolbar}>
						<ChangeThemeButton />
						<TranslationButton />
					</div>

					<Title name={name} surname={surname} />

					<SentText email={email} />

					<SubTitle />

					<MailCheckList />

					<ResendSection email={email} />
				</div>
			</div>
		</section>
	);
};
