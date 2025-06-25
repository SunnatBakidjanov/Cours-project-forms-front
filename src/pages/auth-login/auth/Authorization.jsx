import { Background } from '../../../UI/background/Background';
import { LinkBtn } from '../UI/link-btn/LinkBtn';
import { ChangeThemeButton } from '../../../UI/change-theme-button/ChangeThemeButton';
import { TranslationButton } from '../../../UI/translaitor-button/TranslationButton';
import { AuthForm } from './auth-form/AuthForm';

import styles from '../styles/auth-login-root.module.scss';

export const Authorization = () => {
	return (
		<section>
			<Background styleUsePlace="loginAuthPage" />

			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.innerForm}>
						<div className={styles.toolbar}>
							<ChangeThemeButton />
							<TranslationButton />
						</div>
						<AuthForm />
					</div>
					<LinkBtn text={'authPage.linkBtn.text'} btnText={'authPage.linkBtn.button'} link={'/login'} />
				</div>
			</div>
		</section>
	);
};
