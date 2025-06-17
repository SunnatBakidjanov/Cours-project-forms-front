import { Background } from '../../../UI/background/Background';
import { AuthForm } from './UI/auth-form/AuthForm';
import { ChangeThemeButton } from '../../../UI/change-theme-button/ChangeThemeButton';
import { TranslationButton } from '../../../UI/translaitor-button/TranslationButton';
import { AuthWelcome } from './UI/auth-welocme/AuthWelcome';

import styles from '../styles/auth-login-root.module.scss';

export const Authorization = () => {
	return (
		<section>
			<Background />

			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.innerForm}>
						<div className={styles.toolbar}>
							<ChangeThemeButton />
							<TranslationButton />
						</div>
						<AuthForm />
					</div>

					<div className={styles.innerText}>
						<AuthWelcome />
					</div>
				</div>
			</div>
		</section>
	);
};
