import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';

import { LoginProfile } from './UI/login-profile/LoginProfile';
import { Underline } from './UI/underline/Underliner';
import { Title } from './UI/title/Title';
import { ChangeThemeButton } from '../../UI/change-theme-button/ChangeThemeButton';
import { TranslationButton } from '../../UI/translaitor-button/TranslationButton';

import classNames from 'classnames';
import styles from './header.module.scss';

export const Header = () => {
	const { header, root } = useThemeVar();

	return (
		<header className={classNames(styles.header, header.borderBottomColor)}>
			<Underline />

			<div className={classNames(styles.mobileToolbar, root.btnSubmit)}>
				<ChangeThemeButton />
				<TranslationButton />
			</div>

			<div className="container">
				<div className={classNames(styles.wrapper)}>
					<Title />

					<div className={styles.toolbar}>
						<ChangeThemeButton />
						<TranslationButton />
					</div>

					<LoginProfile />
				</div>
			</div>
		</header>
	);
};
