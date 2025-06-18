import { Background } from '../../../UI/background/Background';
import { ChangeThemeButton } from '../../../UI/change-theme-button/ChangeThemeButton';
import { TranslationButton } from '../../../UI/translaitor-button/TranslationButton';
import { LoginForm } from './UI/login-form/LoginForm';

import styles from '../styles/auth-login-root.module.scss';
import classNames from 'classnames';
import { LinkBtn } from '../UI/link-btn/LinkBtn';

export const Login = () => {
	return (
		<section>
			<Background styleUsePlace="loginAuthPage" />

			<div className="container">
				<div className={classNames(styles.wrapper, styles.wrapperReverse)}>
					<div className={styles.innerForm}>
						<div className={styles.toolbar}>
							<ChangeThemeButton />
							<TranslationButton />
						</div>
						<LoginForm />
					</div>
					<LinkBtn text={'loginPage.linkBtn.text'} btnText={'loginPage.linkBtn.button'} link={'/auth'} />
				</div>
			</div>
		</section>
	);
};
